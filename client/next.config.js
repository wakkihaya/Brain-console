module.exports = {
  webpack5: false,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        child_process: 'empty',
        net: 'empty',
        dns: 'empty',
        tls: 'empty'
      }
    }
    return config
  }
}
