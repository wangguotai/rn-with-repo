// Say you wanted to write a mod to update the Xcode Project's "product name":
import { ConfigPlugin, withXcodeProject, IOSConfig } from '@expo/config-plugins';

export const withCustomProductName: ConfigPlugin<string> = (config, productName) => {
    return withXcodeProject( 
        config,
        async (config) => {
            config.modResults = IOSConfig.Name.setProductName({name: productName}, config.modResults);
            return config;
        }
    );
};

// module.exports.withCustomProductName = withCustomProductName;
