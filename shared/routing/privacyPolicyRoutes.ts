/* eslint-disable import/no-cycle */

class PrivacyPolicyRoutes {
  get root() {
    return '/privacy_policy';
  }

  get terms() {
    return '/privacy_policy/#terms';
  }
}

export default new PrivacyPolicyRoutes();
