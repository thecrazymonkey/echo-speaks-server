module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'echospeaks',
      script    : 'index.js',
      watch	: true,
      disable_logs	: false,
      ignore_watch : ["node_modules"]
    }
  ]
};
