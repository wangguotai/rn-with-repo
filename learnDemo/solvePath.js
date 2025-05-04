const path = require('path');
const pluginPath = require.resolve('@react-native/gradle-plugin/package.json', {
    paths: [require.resolve('react-native/package.json')]
  });
  const pluginDir = path.dirname(pluginPath); // 提取目录路径
  console.log(pluginDir);