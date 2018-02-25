module.exports = function(bundler) {
    bundler.addAssetType('fs', require.resolve('./asset.js'));
    bundler.addAssetType('vs', require.resolve('./asset.js'));
    bundler.addAssetType('glsl', require.resolve('./asset.js'));
    bundler.addAssetType('vert', require.resolve('./asset.js'));
    bundler.addAssetType('frag', require.resolve('./asset.js'));
    bundler.addAssetType('glslv', require.resolve('./asset.js'));
    bundler.addAssetType('glslf', require.resolve('./asset.js'));
}