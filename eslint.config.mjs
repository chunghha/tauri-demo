import antfu from '@antfu/eslint-config';
import gitignore from 'eslint-config-flat-gitignore';

export default await antfu(
	gitignore({
		files: ['.gitignore', '.eslintignore'],
		strict: false
	})
);
