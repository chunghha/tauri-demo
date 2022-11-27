import { QueryClient, QueryClientProvider, createQuery } from '@tanstack/solid-query'
import type { Component } from 'solid-js'
import { For } from 'solid-js'
import type { Country } from '../models/country'

const fetchCountries = async () => (await fetch('https://restcountries.com/v3.1/all')).json()

const queryClient = new QueryClient()

const CountryContainer: Component = () => {
  const query = createQuery(() => ['countryAPI'], fetchCountries)

  return (
    <div>
        <span>{query.isLoading && 'Loading...'}</span>
        <div class="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <For each={query.data}>{(country: Country) =>
            <div
              class="w-84 card card-compact bg-base-100 shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <figure><img src={country.flags.svg} alt={country.name.official} /></figure>
              <div class="card-body">
                <h2 class="card-title font-poppins text-secondary">
                  {country.name.official}
                </h2>
                <p class="font-inter text-xl text-warning">
                  {(country.capital)?.[0] ?? ''}
                </p>
                <p class="font-inter text-lg text-info">
                  {country.population.toLocaleString()}
                </p>
                <div class="card-actions justify-end">
                  <button class="btn-neutral btn font-poppins">Details</button>
                </div>
              </div>
            </div>
          }</For>
        </div>
      </div>
  )
}

const Countries: Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CountryContainer />
    </QueryClientProvider>
  )
}

export default Countries
