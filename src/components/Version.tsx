import type { Component } from 'solid-js';

const Version: Component = () => {
	return (
		<div class="font-tienne text-primary">
			App Version:
			{APP_VERSION}
		</div>
	);
};

export default Version;
