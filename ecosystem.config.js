module.exports = {
  apps: [{
    name: 'baymax',
    script: 'dist/index.js',
    watch: false,
    ignore_watch: ['node_modules', 'artifact', 'artifact'],
  }],
};
