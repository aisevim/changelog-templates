import symmetrys from 'eslint-config-symmetrys'

export default symmetrys({
  vueA11y: false,
  settings: {
    strictFormat: {
      scriptFiles: ['fixtures/**/*.js'],
    },
  },
})
