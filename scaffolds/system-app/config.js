System.config({
  baseURL: "build",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-loader": "npm:babel-loader@6.2.4",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.6.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "eslint": "npm:eslint@2.8.0",
    "eslint-config-standard": "npm:eslint-config-standard@5.1.0",
    "eslint-plugin-standard": "npm:eslint-plugin-standard@1.3.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:acorn-jsx@2.0.1": {
      "acorn": "npm:acorn@2.7.0"
    },
    "npm:acorn@2.7.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:acorn@3.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:align-text@0.1.4": {
      "kind-of": "npm:kind-of@3.0.2",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.5.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ansi@0.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.1",
      "micromatch": "npm:micromatch@2.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:are-we-there-yet@1.1.2": {
      "delegates": "npm:delegates@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.14",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:argparse@1.0.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:arr-diff@2.0.0": {
      "arr-flatten": "npm:arr-flatten@1.0.1"
    },
    "npm:array-union@1.0.1": {
      "array-uniq": "npm:array-uniq@1.0.2"
    },
    "npm:asn1.js@4.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "lru-cache": "npm:lru-cache@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-code-frame@6.7.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-core@6.7.6": {
      "babel-code-frame": "npm:babel-code-frame@6.7.5",
      "babel-generator": "npm:babel-generator@6.7.5",
      "babel-helpers": "npm:babel-helpers@6.6.0",
      "babel-messages": "npm:babel-messages@6.7.2",
      "babel-register": "npm:babel-register@6.7.2",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2",
      "babylon": "npm:babylon@6.7.0",
      "convert-source-map": "npm:convert-source-map@1.2.0",
      "debug": "npm:debug@2.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json5": "npm:json5@0.4.0",
      "lodash": "npm:lodash@3.10.1",
      "minimatch": "npm:minimatch@2.0.10",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shebang-regex": "npm:shebang-regex@1.0.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-generator@6.7.5": {
      "babel-messages": "npm:babel-messages@6.7.2",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-indent": "npm:detect-indent@3.0.1",
      "is-integer": "npm:is-integer@1.0.6",
      "lodash": "npm:lodash@3.10.1",
      "repeating": "npm:repeating@1.1.3",
      "source-map": "npm:source-map@0.5.3",
      "trim-right": "npm:trim-right@1.0.1"
    },
    "npm:babel-helper-call-delegate@6.6.5": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.6.5",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-helper-define-map@6.6.5": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.6.0",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-helper-function-name@6.6.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.6.5",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-helper-get-function-arity@6.6.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-helper-hoist-variables@6.6.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-helper-optimise-call-expression@6.6.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-helper-regex@6.6.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-helper-replace-supers@6.7.0": {
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.6.0",
      "babel-messages": "npm:babel-messages@6.7.2",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-helpers@6.6.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0"
    },
    "npm:babel-loader@6.2.4": {
      "babel-core": "npm:babel-core@6.7.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "loader-utils": "npm:loader-utils@0.2.14",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object-assign": "npm:object-assign@4.0.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "webpack": "npm:webpack@2.1.0-beta.5",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:babel-messages@6.7.2": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-check-es2015-constants@6.7.2": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-syntax-async-functions@6.5.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.5.2": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.6.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.7.1": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-plugin-transform-es2015-classes@6.6.5": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.6.5",
      "babel-helper-function-name": "npm:babel-helper-function-name@6.6.0",
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.6.0",
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.7.0",
      "babel-messages": "npm:babel-messages@6.7.2",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.6.5": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.6.5",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0"
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.6.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.6.4": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-plugin-transform-es2015-for-of@6.6.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-function-name@6.5.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.6.0",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-plugin-transform-es2015-literals@6.5.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.7.4": {
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.6.5",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0",
      "babel-types": "npm:babel-types@6.7.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-object-super@6.6.5": {
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.7.0",
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-parameters@6.7.0": {
      "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.6.5",
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.6.5",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-template": "npm:babel-template@6.7.0",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.5.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-plugin-transform-es2015-spread@6.6.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.5.0": {
      "babel-helper-regex": "npm:babel-helper-regex@6.6.5",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.6.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.6.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.5.0": {
      "babel-helper-regex": "npm:babel-helper-regex@6.6.5",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "regexpu-core": "npm:regexpu-core@1.0.0"
    },
    "npm:babel-plugin-transform-regenerator@6.6.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "babel-core": "npm:babel-core@6.7.6",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.5.0",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.7.1",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.6.0",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2",
      "babylon": "npm:babylon@6.7.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-transform-strict-mode@6.6.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2"
    },
    "npm:babel-preset-es2015@6.6.0": {
      "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.7.2",
      "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.5.2",
      "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.6.5",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.7.1",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.6.5",
      "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.6.5",
      "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.6.5",
      "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.6.4",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.6.0",
      "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.5.0",
      "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.5.0",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.7.4",
      "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.6.5",
      "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.7.0",
      "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.5.0",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.6.5",
      "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.5.0",
      "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.6.5",
      "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.6.0",
      "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.5.0",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.6.5"
    },
    "npm:babel-register@6.7.2": {
      "babel-core": "npm:babel-core@6.7.6",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@2.2.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "home-or-tmp": "npm:home-or-tmp@1.0.0",
      "lodash": "npm:lodash@3.10.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map-support": "npm:source-map-support@0.2.10"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-template@6.7.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "babel-types": "npm:babel-types@6.7.2",
      "babylon": "npm:babylon@6.7.0",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-traverse@6.7.6": {
      "babel-code-frame": "npm:babel-code-frame@6.7.5",
      "babel-messages": "npm:babel-messages@6.7.2",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-types": "npm:babel-types@6.7.2",
      "babylon": "npm:babylon@6.7.0",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.18.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-types@6.7.2": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel-traverse": "npm:babel-traverse@6.7.6",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@3.10.1",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.7.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:binary-extensions@1.4.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bl@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:block-stream@0.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:bluebird@3.3.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:brace-expansion@1.1.3": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.3": {
      "expand-range": "npm:expand-range@1.8.1",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@4.5.1": {
      "base64-js": "npm:base64-js@1.1.2",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:caller-path@0.1.0": {
      "callsites": "npm:callsites@0.2.0"
    },
    "npm:center-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4",
      "lazy-cache": "npm:lazy-cache@1.0.3"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:chokidar@1.4.3": {
      "anymatch": "npm:anymatch@1.3.0",
      "async-each": "npm:async-each@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.0.11",
      "glob-parent": "npm:glob-parent@2.0.0",
      "inherits": "npm:inherits@2.0.1",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:cli-cursor@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "restore-cursor": "npm:restore-cursor@1.0.1"
    },
    "npm:cli-width@2.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.3",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:cliui@3.2.0": {
      "string-width": "npm:string-width@1.0.1",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "wrap-ansi": "npm:wrap-ansi@2.0.0"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:code-point-at@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:concat-stream@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.6",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:console-browserify@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "date-now": "npm:date-now@0.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@2.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.11"
    },
    "npm:dashdash@1.13.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-extend@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:del@2.2.0": {
      "globby": "npm:globby@4.0.0",
      "is-path-cwd": "npm:is-path-cwd@1.0.0",
      "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "rimraf": "npm:rimraf@2.5.2"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detect-indent@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:doctrine@1.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "esutils": "npm:esutils@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.11.3",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:emojis-list@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:enhanced-resolve@2.2.2": {
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "memory-fs": "npm:memory-fs@0.3.0",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tapable": "npm:tapable@0.2.4"
    },
    "npm:errno@0.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prr": "npm:prr@0.0.0"
    },
    "npm:es5-ext@0.10.11": {
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-symbol": "npm:es6-symbol@3.0.2"
    },
    "npm:es6-map@0.1.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-set": "npm:es6-set@0.1.4",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "event-emitter": "npm:event-emitter@0.3.4"
    },
    "npm:es6-set@0.1.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "event-emitter": "npm:event-emitter@0.3.4"
    },
    "npm:es6-symbol@3.0.2": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11"
    },
    "npm:es6-weak-map@2.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2"
    },
    "npm:escope@3.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "es6-map": "npm:es6-map@0.1.3",
      "es6-weak-map": "npm:es6-weak-map@2.0.1",
      "esrecurse": "npm:esrecurse@4.1.0",
      "estraverse": "npm:estraverse@4.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:eslint-config-standard@5.1.0": {
      "eslint": "npm:eslint@2.8.0",
      "eslint-plugin-promise": "npm:eslint-plugin-promise@1.1.0",
      "eslint-plugin-standard": "npm:eslint-plugin-standard@1.3.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:eslint@2.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.3",
      "concat-stream": "npm:concat-stream@1.5.1",
      "debug": "npm:debug@2.2.0",
      "doctrine": "npm:doctrine@1.2.1",
      "es6-map": "npm:es6-map@0.1.3",
      "escope": "npm:escope@3.6.0",
      "espree": "npm:espree@3.1.3",
      "estraverse": "npm:estraverse@4.2.0",
      "esutils": "npm:esutils@2.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "file-entry-cache": "npm:file-entry-cache@1.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.0.3",
      "globals": "npm:globals@9.4.0",
      "ignore": "npm:ignore@3.1.1",
      "imurmurhash": "npm:imurmurhash@0.1.4",
      "inquirer": "npm:inquirer@0.12.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
      "is-resolvable": "npm:is-resolvable@1.0.0",
      "js-yaml": "npm:js-yaml@3.6.0",
      "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
      "lodash": "npm:lodash@4.11.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "optionator": "npm:optionator@0.8.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "path-is-inside": "npm:path-is-inside@1.0.1",
      "pluralize": "npm:pluralize@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "progress": "npm:progress@1.1.8",
      "require-uncached": "npm:require-uncached@1.0.2",
      "shelljs": "npm:shelljs@0.6.0",
      "strip-json-comments": "npm:strip-json-comments@1.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "table": "npm:table@3.7.8",
      "text-table": "npm:text-table@0.2.0",
      "user-home": "npm:user-home@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:espree@3.1.3": {
      "acorn": "npm:acorn@3.0.4",
      "acorn-jsx": "npm:acorn-jsx@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esrecurse@4.1.0": {
      "estraverse": "npm:estraverse@4.1.1",
      "object-assign": "npm:object-assign@4.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:estraverse@4.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:estraverse@4.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:event-emitter@0.3.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:exit-hook@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:expand-brackets@0.1.5": {
      "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
    },
    "npm:expand-range@1.8.1": {
      "fill-range": "npm:fill-range@2.2.3"
    },
    "npm:extglob@0.3.2": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:figures@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:file-entry-cache@1.2.4": {
      "flat-cache": "npm:flat-cache@1.0.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fill-range@2.2.3": {
      "is-number": "npm:is-number@2.1.0",
      "isobject": "npm:isobject@2.0.0",
      "randomatic": "npm:randomatic@1.1.5",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.5.4"
    },
    "npm:flat-cache@1.0.10": {
      "del": "npm:del@2.2.0",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "read-json-sync": "npm:read-json-sync@1.1.1",
      "write": "npm:write@0.2.1"
    },
    "npm:for-own@0.1.4": {
      "for-in": "npm:for-in@0.1.5"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@1.0.0-rc4": {
      "async": "npm:async@1.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fsevents@1.0.11": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.2.1",
      "node-pre-gyp": "npm:node-pre-gyp@0.6.26",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fstream-ignore@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fstream@1.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "inherits": "npm:inherits@2.0.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.5.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gauge@1.2.7": {
      "ansi": "npm:ansi@0.3.1",
      "has-unicode": "npm:has-unicode@2.0.0",
      "lodash.pad": "npm:lodash.pad@4.3.0",
      "lodash.padend": "npm:lodash.padend@4.4.0",
      "lodash.padstart": "npm:lodash.padstart@4.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glob-base@0.3.0": {
      "glob-parent": "npm:glob-parent@2.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@6.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@7.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:globals@9.4.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:globby@4.0.0": {
      "array-union": "npm:array-union@1.0.1",
      "arrify": "npm:arrify@1.0.1",
      "glob": "npm:glob@6.0.4",
      "object-assign": "npm:object-assign@4.0.1",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:har-validator@2.0.6": {
      "chalk": "npm:chalk@1.1.3",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-unicode@2.0.0": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@3.1.3": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:home-or-tmp@1.0.0": {
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:http-browserify@1.7.0": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@1.1.1": {
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.2.2",
      "sshpk": "npm:sshpk@1.7.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:https-browserify@0.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:ignore@3.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inquirer@0.12.0": {
      "ansi-escapes": "npm:ansi-escapes@1.3.0",
      "ansi-regex": "npm:ansi-regex@2.0.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.3",
      "cli-cursor": "npm:cli-cursor@1.0.2",
      "cli-width": "npm:cli-width@2.1.0",
      "figures": "npm:figures@1.5.0",
      "lodash": "npm:lodash@4.11.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline2": "npm:readline2@1.0.1",
      "run-async": "npm:run-async@0.1.0",
      "rx-lite": "npm:rx-lite@3.1.2",
      "string-width": "npm:string-width@1.0.1",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-glob@2.0.1": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:is-integer@1.0.6": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:is-my-json-valid@2.13.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-number@2.1.0": {
      "kind-of": "npm:kind-of@3.0.2"
    },
    "npm:is-path-cwd@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-path-in-cwd@1.0.0": {
      "is-path-inside": "npm:is-path-inside@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-path-inside@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-inside": "npm:path-is-inside@1.0.1"
    },
    "npm:is-resolvable@1.0.0": {
      "tryit": "npm:tryit@1.0.2"
    },
    "npm:isobject@2.0.0": {
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jodid25519@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:js-yaml@3.6.0": {
      "argparse": "npm:argparse@1.0.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima": "npm:esprima@2.7.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:json-stable-stringify@1.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:json5@0.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:json5@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jsprim@1.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:kind-of@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.3"
    },
    "npm:lazy-cache@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lcid@1.0.0": {
      "invert-kv": "npm:invert-kv@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:levn@0.3.0": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "type-check": "npm:type-check@0.3.2"
    },
    "npm:loader-runner@2.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loader-utils@0.2.14": {
      "big.js": "npm:big.js@3.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "emojis-list": "npm:emojis-list@1.0.1",
      "json5": "npm:json5@0.5.0",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:lodash.pad@4.3.0": {
      "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
      "lodash.tostring": "npm:lodash.tostring@4.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.padend@4.4.0": {
      "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
      "lodash.tostring": "npm:lodash.tostring@4.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.padstart@4.4.0": {
      "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
      "lodash.tostring": "npm:lodash.tostring@4.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.tostring@4.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.11.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lru-cache@4.0.1": {
      "pseudomap": "npm:pseudomap@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "yallist": "npm:yallist@2.0.0"
    },
    "npm:memory-fs@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "errno": "npm:errno@0.1.4",
      "readable-stream": "npm:readable-stream@2.0.6"
    },
    "npm:micromatch@2.3.7": {
      "arr-diff": "npm:arr-diff@2.0.0",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@1.8.3",
      "expand-brackets": "npm:expand-brackets@0.1.5",
      "extglob": "npm:extglob@0.3.2",
      "filename-regex": "npm:filename-regex@2.0.0",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "kind-of": "npm:kind-of@3.0.2",
      "normalize-path": "npm:normalize-path@2.0.1",
      "object.omit": "npm:object.omit@2.0.0",
      "parse-glob": "npm:parse-glob@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-cache": "npm:regex-cache@0.4.3"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.22.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.10": {
      "mime-db": "npm:mime-db@1.22.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mute-stream@0.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:nan@2.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-libs-browser@1.0.0": {
      "assert": "npm:assert@1.3.0",
      "browserify-zlib": "npm:browserify-zlib@0.1.4",
      "buffer": "npm:buffer@4.5.1",
      "console-browserify": "npm:console-browserify@1.1.0",
      "constants-browserify": "npm:constants-browserify@1.0.0",
      "crypto-browserify": "npm:crypto-browserify@3.11.0",
      "domain-browser": "npm:domain-browser@1.1.7",
      "events": "npm:events@1.0.2",
      "http-browserify": "npm:http-browserify@1.7.0",
      "https-browserify": "npm:https-browserify@0.0.1",
      "os-browserify": "npm:os-browserify@0.2.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-browserify": "npm:path-browserify@0.0.0",
      "process": "npm:process@0.11.2",
      "punycode": "npm:punycode@1.3.2",
      "querystring-es3": "npm:querystring-es3@0.2.1",
      "readable-stream": "npm:readable-stream@2.0.6",
      "stream-browserify": "npm:stream-browserify@2.0.1",
      "string_decoder": "npm:string_decoder@0.10.31",
      "timers-browserify": "npm:timers-browserify@1.4.2",
      "tty-browserify": "npm:tty-browserify@0.0.0",
      "url": "npm:url@0.11.0",
      "util": "npm:util@0.10.3",
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:node-pre-gyp@0.6.26": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@3.0.6",
      "npmlog": "npm:npmlog@2.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.1.6",
      "request": "npm:request@2.72.0",
      "rimraf": "npm:rimraf@2.5.2",
      "semver": "npm:semver@5.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tar": "npm:tar@2.2.1",
      "tar-pack": "npm:tar-pack@3.1.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:nopt@3.0.6": {
      "abbrev": "npm:abbrev@1.0.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:npmlog@2.0.3": {
      "ansi": "npm:ansi@0.3.1",
      "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@1.2.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.8.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:object.omit@2.0.0": {
      "for-own": "npm:for-own@0.1.4",
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optionator@0.8.1": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@1.1.3",
      "levn": "npm:levn@0.3.0",
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "type-check": "npm:type-check@0.3.2",
      "wordwrap": "npm:wordwrap@1.0.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-browserify@0.2.1": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-locale@1.4.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "lcid": "npm:lcid@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.5.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-glob@3.0.4": {
      "glob-base": "npm:glob-base@0.3.0",
      "is-dotfile": "npm:is-dotfile@1.0.2",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-inside@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pify@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@2.0.1": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:progress@1.1.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pseudomap@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randomatic@1.1.5": {
      "is-number": "npm:is-number@2.1.0",
      "kind-of": "npm:kind-of@3.0.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rc@1.1.6": {
      "deep-extend": "npm:deep-extend@0.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@1.0.4"
    },
    "npm:read-json-sync@1.1.1": {
      "graceful-fs": "npm:graceful-fs@4.1.3"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "minimatch": "npm:minimatch@2.0.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:readline2@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "mute-stream": "npm:mute-stream@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:regex-cache@0.4.3": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:regexpu-core@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerate": "npm:regenerate@1.2.1",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:request@2.72.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.3.2",
      "bl": "npm:bl@1.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@1.0.0-rc4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.6",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.10",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.8.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.2.2",
      "tunnel-agent": "npm:tunnel-agent@0.4.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:require-uncached@1.0.2": {
      "caller-path": "npm:caller-path@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve-from": "npm:resolve-from@1.0.1"
    },
    "npm:resolve-from@1.0.1": {
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:restore-cursor@1.0.1": {
      "exit-hook": "npm:exit-hook@1.1.1",
      "onetime": "npm:onetime@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4"
    },
    "npm:rimraf@2.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:run-async@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "once": "npm:once@1.3.3"
    },
    "npm:rx-lite@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shelljs@0.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-list-map@0.1.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sshpk@1.7.4": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.13.0",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.14.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:stream-browserify@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.6"
    },
    "npm:string-width@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:strip-json-comments@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:table@3.7.8": {
      "bluebird": "npm:bluebird@3.3.5",
      "chalk": "npm:chalk@1.1.3",
      "lodash": "npm:lodash@4.11.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "slice-ansi": "npm:slice-ansi@0.0.4",
      "string-width": "npm:string-width@1.0.1",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tv4": "npm:tv4@1.2.7",
      "xregexp": "npm:xregexp@3.1.0"
    },
    "npm:tar-pack@3.1.3": {
      "debug": "npm:debug@2.2.0",
      "fstream": "npm:fstream@1.0.8",
      "fstream-ignore": "npm:fstream-ignore@1.0.3",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "rimraf": "npm:rimraf@2.5.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tar": "npm:tar@2.2.1",
      "uid-number": "npm:uid-number@0.0.6",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:tar@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:tough-cookie@2.2.2": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-check@0.3.2": {
      "prelude-ls": "npm:prelude-ls@1.1.2"
    },
    "npm:uglify-js@2.6.2": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "yargs": "npm:yargs@3.10.0"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uid-number@0.0.6": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:user-home@2.0.0": {
      "os-homedir": "npm:os-homedir@1.0.1"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:watchpack@1.0.1": {
      "async": "npm:async@0.9.2",
      "chokidar": "npm:chokidar@1.4.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:webpack-sources@0.1.1": {
      "source-list-map": "npm:source-list-map@0.1.6",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:webpack@2.1.0-beta.5": {
      "acorn": "npm:acorn@3.0.4",
      "async": "npm:async@1.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "enhanced-resolve": "npm:enhanced-resolve@2.2.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "interpret": "npm:interpret@1.0.0",
      "loader-runner": "npm:loader-runner@2.1.1",
      "loader-utils": "npm:loader-utils@0.2.14",
      "memory-fs": "npm:memory-fs@0.3.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "node-libs-browser": "npm:node-libs-browser@1.0.0",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "supports-color": "npm:supports-color@3.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tapable": "npm:tapable@0.2.4",
      "uglify-js": "npm:uglify-js@2.6.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "watchpack": "npm:watchpack@1.0.1",
      "webpack-sources": "npm:webpack-sources@0.1.1",
      "yargs": "npm:yargs@3.32.0"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:window-size@0.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:wrap-ansi@2.0.0": {
      "string-width": "npm:string-width@1.0.1"
    },
    "npm:write@0.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:xregexp@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:y18n@3.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs@3.10.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.0"
    },
    "npm:yargs@3.32.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@2.1.1",
      "cliui": "npm:cliui@3.2.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "string-width": "npm:string-width@1.0.1",
      "window-size": "npm:window-size@0.1.4",
      "y18n": "npm:y18n@3.2.1"
    }
  }
});
