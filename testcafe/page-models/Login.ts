import { Selector } from 'testcafe';

class Login {
  username: Selector = Selector('[data-locator=username]');
  password: Selector = Selector('[data-locator=password]');
  loginButton: Selector = Selector('[data-locator=login-button]');
  logoutButton: Selector = Selector('[data-locator=logout-button]');
  titleText: Selector = Selector('[data-locator="title-text');
  async userLogin(t: TestController) {
    await t
      .typeText(this.username, 'admin@admin.com', { replace: true, paste: true })
      .typeText(this.password, 'password123', { replace: true, paste: true })
      .click(this.loginButton);
  }
}

export default new Login();
