/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',

  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^react(.*)$',

    '<THIRD_PARTY_MODULES>',

    '^@/types(.*)$',
    '^@/constants(.*)$',
    '^@/services(.*)$',
    '^@/utils(.*)$',
    '^@/store(.*)$',
    '^@/lib(.*)$',
    '^@/components(.*)$',
    '^@/pages(.*)$',

    '^@/mocks(.*)$',

    '^[./](?!.*\\.(css|png|jpg|jpeg|svg|gif|webp)$)',

    '\\.(png|jpg|jpeg|svg|gif|webp)$',
    '\\.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
