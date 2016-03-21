System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "ts",
  typescriptOptions: {
    "emitDecoratorMetadata": true,
    "experimentalAsyncFunctions": true,
    "experimentalDecorators": true,
    "sourceMap": false
  },

  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
  },

  packages: {
    "src": {
      "format": "es6",
      "defaultExtension": "ts"
    }
  }
});
