/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',

  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^react(.*)$',

    '<THIRD_PARTY_MODULES>',

    '^@/types(.*)$',
    '^@/utils(.*)$',
    '^@/constants(.*)$',
    '^@/store(.*)$',
    '^@/lib(.*)$',
    '^@/components(.*)$',
    '^@/views(.*)$',

    '^@/mocks(.*)$',

    '^[./](?!.*\\.(css|png|jpg|jpeg|svg|gif|webp)$)',

    '\\.(png|jpg|jpeg|svg|gif|webp)$',
    '\\.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
