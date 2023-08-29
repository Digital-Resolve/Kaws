// metro.config.js
module.exports = {
    transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
    resolver: {
      sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
      assetExts: ['glb', 'gltf', 'mtl', 'obj', 'png', 'jpg', 'ttf'],
    },
  };