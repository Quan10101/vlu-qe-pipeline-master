const { login } = require('./auth');

describe('Regression Test - Login', () => {

  test('Dang nhap dung', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('Sai mat khau', () => {
    expect(login('admin', '999')).toBe(false);
  });

  test('Sai ten dang nhap', () => {
    expect(login('user', '123')).toBe(false);
  });

  test('Username rong', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rong', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Mat khau chua ky tu dac biet', () => {
    expect(login('admin', '@#$123')).toBe(false);
  });

  test('Tai khoan bi khoa', () => {
    expect(login('locked', '123')).toBe(false);
  });

});
