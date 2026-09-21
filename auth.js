// Feature update: improve login documentation
function login(username, password) {
  if (!username || !password) {
    return false;
  }

  // Tai khoan bi khoa
  if (username === 'locked') {
    return false;
  }

  // Kiem tra thong tin dang nhap
  return username === 'admin' && password === '123';
}

module.exports = { login };
