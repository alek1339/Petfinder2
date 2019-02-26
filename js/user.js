// Register
$(document).on('submit', '.register-form', function (e) {
  e.preventDefault()

  let newUser = {
    fName: document.getElementById('fName').value,
    lName: document.getElementById('lName').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }

  fetch('http://localhost:5000/users/register', {
    method: 'post',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(newUser => document.location.href = "/")
    .catch(error => console.log('error is', error))
})

// Login

$(document).on('submit', '.login-form', function (e) {
  e.preventDefault()

  var token
  let loginUser = {
    email: document.getElementById('login-email').value,
    password: document.getElementById('login-password').value
  }

  $.post('http://localhost:5000/users/login',
    {
      email: loginUser.email,
      password: loginUser.password
    },
    function (data, status) {
      token = parseJwt(data)
      localStorage.setItem('jwtToken', data)
    })
    .then(newUser => document.location.href = "/")

  function parseJwt(token) {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  };

})

// Logout

function logOut() {
  localStorage.removeItem('jwtToken')
  document.location.href = "/";
}
