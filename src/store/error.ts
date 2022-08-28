import { defineStore } from 'pinia';
import { EMPTY_STRING } from '../constants';

export const useErrorStore = defineStore('errorStore', {
	state: () => {
		return { error: EMPTY_STRING };
	},
	actions: {
		set(error: string) {
			this.error = error;
		}
	}
});
