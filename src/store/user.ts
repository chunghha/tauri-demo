import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
	state: () => {
		return { user: '' };
	},
	actions: {
		set(user: string) {
			this.user = user;
		}
	}
});
