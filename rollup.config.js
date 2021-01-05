import pkg from './package.json'

const banner =
  `${'/*!\n' + ' * '}${pkg.name} v${pkg.version}\n` +
  ` * (c) 2020-${new Date().getFullYear()} ${pkg.author.name}(${pkg.author.email})\n` +
  ` * Released under the ${pkg.license} License.\n` +
  ` */`;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner,
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      banner,
      sourcemap: true,
      exports: 'named',
    },
  ],
}
