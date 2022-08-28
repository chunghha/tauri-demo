import { defineStore } from 'pinia';
import { EMPTY_STRING } from '../constants';

export const useUserStore = defineStore('userStore', {
	state: () => {
		return { user: EMPTY_STRING };
	},
	actions: {
		set(user: string) {
			this.user = user;
		}
	}
});
