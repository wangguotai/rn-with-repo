import { withMySDK } from './learnDemo/my-plugin';
import { ExpoConfig, ConfigContext } from '@expo/config';
import { withPlugins } from 'expo/config-plugins';

// const {exp: baseConfig} = getConfig(process.cwd());

// export default withPlugins(baseConfig, [(config) => withMySDK(config, { apiKey: 'your-api-key' })]);


export default({config}: ConfigContext): ExpoConfig => {
  const completeConfig: ExpoConfig = {
    ...config,
    name: config.name || 'DefaultAppName', // Ensure 'name' is defined
    slug: config.slug || 'default-app-slug', // Ensure 'slug' is defined
  };

  return withPlugins(
    completeConfig,
    [
      (config) => withMySDK(config, { apiKey: 'your-key'})
    ]
  ); 
}


