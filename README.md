# GLSL Loader Plugin for Parcel
Load external GLSL files via import from your scripts

## Getting started
Install using yarn:
```
yarn add parcel-plugin-shader-loader --dev
```

Install using npm
```
npm install parcel-plugin-shader-loader --save-dev
```

Import files with any of the following extensions:
+ .glsl
+ .fs
+ .vs
+ .vert
+ .frag
+ .glslv
+ .glslf

Example:
```js
  import myFragShader from "./fragShader.fs"
  console.log(myFragShader) // -> Output file contents
```
