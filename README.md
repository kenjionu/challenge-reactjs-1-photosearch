# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

#React Jest testing

For Typescript (TSX)
npm install -D jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest identity-obj-proxy jest-environment-jsdom ts-node
Create the Jest config setup file
jest.setup.ts for TSX or jest.setup.js for JSX, and add the following:

import "@testing-library/jest-dom";


Create the main Jest config file
jest.config.ts for TSX or jest.config.js for JSX, and add the following:

For Javascript (JSX)
```js
export default {
  testEnvironment: "jest-environment-jsdom", // Same name of the lib you installed
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js", // The global stub for weird files
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // The mock for style related files
    "^@/(.*)$": "<rootDir>/src/$1", // [optional] Are you using aliases?
  },
};
```

For Typescript (TSX)
```ts
export default {
  testEnvironment: "jest-environment-jsdom", // Same name of the lib you installed
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js", // The global stub for weird files
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // The mock for style related files
    "^@/(.*)$": "<rootDir>/src/$1", // [optional] Are you using aliases?
  },
};
```
If you previously tried to configure TSX file transformations with the “transform” config prop of jest and didn’t work probably you bumped on the same problem as me, it’s a version issue, to make things simple use babel to transpile your TSX files as well.

export default {
  transform: { // Stop using this approach
    "^.+\\.tsx?$": "ts-jest",
  },
};

to mock styling files (css, sass etc…).

Create the global mock for different file extensions
Now let’s create a file that will serve as a global mocker for images and other weird file extensions, in the root dir create test/__mocks__/ and add fileMock.js with the following content:

module.exports = 'test-file-stub';
Typescript only!
To avoid TS issues on your test files include the jest config in the tsconfig.app.json file:

"include": ["src", "./jest.setup.ts"]
Babel config
You’ll need to configure babel in order to transpile your JSX/TSX syntax to jest understandable one, for that create .babelrc file at the root of the project and add the following:

For Javascript (JSX)
{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }], // It's the name of the lib you installed
    ["@babel/preset-react", { "runtime": "automatic" }] // It's the name of the lib you installed
  ]
}
For Typescript (TSX)
{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }], // It's the name of the lib you installed
    ["@babel/preset-react", { "runtime": "automatic" }], // It's the name of the lib you installed
    "@babel/preset-typescript" // It's the name of the lib you installed
  ]
}
Great we are done with configurations now just add the following commands to package.json for running tests and code coverage, respectively, and we are done!

For Javascript (JSX)
"test": "jest --watchAll",
"cov": "jest --coverage --collectCoverageFrom='src/**/*.{js,jsx}'"
For Typescript (TSX)
"test": "jest --watchAll",
"cov": "jest --coverage --collectCoverageFrom='src/**/*.{ts,tsx}'"
If any issues regarding absolute imports appear because you are using path aliases check my post about it. That’s it hope it helped👋

