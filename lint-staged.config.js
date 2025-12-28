export default {
  '*.{js,jsx,ts,tsx}': ['bun prettier --write', 'bun eslint --fix'],
  '*.{json,css,scss,md,html}': ['bun prettier --write'],
};
