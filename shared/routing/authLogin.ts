// eslint-disable-next-line import/no-cycle

class AuthLogin {
  get root() {
    return `/?login=true`;
  }
}

export default new AuthLogin();
