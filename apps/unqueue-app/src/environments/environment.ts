/* eslint-disable @typescript-eslint/no-var-requires */
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

const devEnvironment = require('../../../../environment.json');

export const environment = {
  production: false,
  firebaseCredentials: devEnvironment.firebase,
};
