// Say you wanted to create a plugin that added custom values to Info.plist in an iOS project:

const withMySDK = (config, {apiKey}) => {
    console.log('Adding custom native iOS API key to Info.plist');
    if(!config.ios) {
        config.ios = {};
    }
    if(!config.ios.infoPlist) {
        config.ios.infoPlist = {};
    }
    config.ios.infoPlist['MY_CUSTOM_NATIVE_IOS_API_KEY'] = apiKey;
    console.log('config info:', config)
    return config;
}
module.exports.withMySDK = withMySDK;