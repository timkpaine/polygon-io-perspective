/* ***************************************************************************
 *
 * Copyright (c) 2021, the perspective-studio authors.
 *
 * This file is part of the perspective-studio library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["airbnb", "prettier", "plugin:json/recommended"],
  plugins: ["prettier"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {},
    sourceType: "module",
    experimentalObjectRestSpread: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 200,
        tabWidth: 2,
        bracketSpacing: false,
      },
    ],
    "max-len": [
      "warn",
      {
        code: 200,
        comments: 200,
        ignoreTrailingComments: true,
      },
    ],
    camelcase: "off",
    "class-methods-use-this": "off",
    "constructor-super": "error",
    "default-param-last": "warn",
    indent: "off",
    "linebreak-style": ["error", "unix"],
    "no-bitwise": "off",
    "no-const-assign": "error",
    "no-continue": "off",
    "no-nested-ternary": "warn",
    "no-param-reassign": "warn",
    "no-plusplus": "off",
    "no-shadow": "warn",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-underscore-dangle": "off",
    "no-unreachable": "error",
    "no-unused-vars": "warn",
    "object-curly-spacing": "off",
    quotes: "off",
    "spaced-comment": "off",
    "valid-typeof": "error",

    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",

    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "react/no-array-index-key": "warn",
    "react/prop-types": "off",
    "react/require-default-props": "off",

    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
};
