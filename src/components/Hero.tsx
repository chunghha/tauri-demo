import type { Component } from 'solid-js';
import Counter from './Counter';

const Hero: Component = () => {
	return (
		<div
			class="hero min-h-screen"
			style={{ 'background-image': 'url(https://api.lorem.space/image/shoes?w=1000&h=800)' }}
		>
			<div class="bg-opacity-45 hero-overlay" />
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 font-tienne text-5xl font-bold">Hello there</h1>
					<p class="mb-5 font-nunito-sans">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
					<button class="btn btn-primary font-nunito-sans uppercase text-700">Get Started</button>
					<Counter />
				</div>
			</div>
		</div>
	);
};

export default Hero;
