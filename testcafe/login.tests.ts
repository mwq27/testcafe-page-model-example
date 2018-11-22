import { Selector } from 'testcafe';
import LoginModel from './page-models/Login';
const url = 'http://localhost:3000';

fixture('Login tests - Logged In')
  .page(url)
  .beforeEach(async t => {
    await LoginModel.userLogin(t);
  });
test('Should show the logout button after logging in', async t => {
  await t.expect(LoginModel.logoutButton.exists).ok();
});

fixture('Login tests - Not logged in').page(url);
test('Should have a username and password field', async t => {
  await t.wait(5000);
  await t.expect(LoginModel.username.exists).ok();
  await t.expect(LoginModel.password.exists).ok();
});

test('Should show the correct text in the title', async t => {
  await t.wait(5000);
  await t.expect(LoginModel.titleText.innerText).eql('Welcome to React');
});
