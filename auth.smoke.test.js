const { login } = require('./auth');

test('Smoke Test: Dang nhap dung', () => {
  expect(login('admin', '123')).toBe(true);
});
