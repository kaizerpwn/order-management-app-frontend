import { Config, ConfigOptions } from 'karma';

module.exports = function (config: Config) {
  const configuration: ConfigOptions = { 
    customLaunchers: {
      Brave: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--disable-gpu'], 
      }
    },
    browsers: ['Brave'],  
  };

  config.set(configuration);
};
