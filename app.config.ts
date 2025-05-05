import { withMySDK } from './learnDemo/my-plugin';
import { ExpoConfig, ConfigContext } from '@expo/config';
import { withPlugins } from 'expo/config-plugins';
import { withCustomProductName } from './learnDemo/my-config-plugin';
export default({config}: ConfigContext): ExpoConfig => {
  const completeConfig: ExpoConfig = {
    ...config,
    name: config.name || 'rn-with-expo', // Ensure 'name' is defined
    slug: config.slug || 'rn-with-expo', // Ensure 'slug' is defined
    
  };

  return withPlugins(
    completeConfig,
    [
      (config) => withMySDK(config, { apiKey: 'your-key'}),
      (config) => withCustomProductName(config, 'MyApp')
    ]
  ); 
}

