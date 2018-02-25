const fs = require('fs');
const parcelRequire = require('./parcelRequire');
const JSAsset = require(parcelRequire.JSAsset);

class ShaderLoaderAsset extends JSAsset {
  async load() {
    const base64 = fs.readFileSync(this.name).toString('base64');
    return `module.exports = atob('${base64}');`;
  }

  pretransform() {}
  transform() {}
}

module.exports = ShaderLoaderAsset;
