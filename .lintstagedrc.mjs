const config = {
  '*.{ts,tsx}': [
    'prettier --write',
    'npm run lint:js',
    () => 'tsc --skipLibCheck --noEmit', // https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
  ],
};

export default config;
