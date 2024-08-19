export const PATH_AUTH = {
  baseAuth: "/api/v1",
  signUp: "/signup",
  verify: "/verify",
  login: "/login",
  logout: "/logout",
  verifyResetPassword: "/password-reset/verify",
  requestResetPassword: "/password-reset/request",
  ResetPassword: "/reset-password",
  googleOAuth: "/google",
  googleOAuthCallBack: "/google/callback",
  facebookOAuth: "/facebook",
  facebookOAuthCallBack: "/facebook/callback",
};
export const PATH_CRUD = {
  getUser: "/users/:authId",
};

export const PATH_SERVICE = {
  BASE: "/v1",
  USER: {
    CREATE_USER: "/v1/users/create",
    UPDATE_USER: "/v1/users/update",
    GET_USER: "/v1/users/by-auth-id",
  },
  STUDENT: {
    LOGIN: "/v1/students/login",
  },
  TEACHER: {
    LOGIN: "/v1/teachers/login",
  },
};
