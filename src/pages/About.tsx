import type { Component } from 'solid-js'
import Version from '../components/Version'

const About: Component = () => {
  return (
    <div class="min-h-screen">
      <p class="text-inter p-8 text-center">This is a Solid demo that uses the Country API.</p>
      <div class="flex items-center justify-center">
        <Version />
      </div>
    </div>
  )
}

export default About
