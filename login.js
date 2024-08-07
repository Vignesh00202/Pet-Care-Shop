function login() {
    // Clear previous error messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('message').textContent = '';

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '') {
      document.getElementById('username-error').textContent = 'Please enter a username';
      return;
    }

    if (password === '') {
      document.getElementById('password-error').textContent = 'Please enter a password';
      return;
    }

    if (username === 'admin' && password === 'password') {
      // Redirect to another page
      window.location.href = 'welcome.html';
    } else {
      document.getElementById('message').textContent = 'Invalid username or password';
    }
  }