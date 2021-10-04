// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dummy: true,
  local: false,

  ip: {
    mocks: '../assets/mocks/',
    local: 'http://localhost:3000',
  },
  ruta: {
    user: '/user',
    loginMock: '../assets/mocks/login.json',
    userDataMock: 'userData.json',
  },
};
