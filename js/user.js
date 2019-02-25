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
    .then(newUser => console.log('newUser is', newUser))
    .catch(error => console.log('error is', error))
})

$(document).on('submit', '.login-form', function (e) {
  e.preventDefault()

  let loginUser = {
    email: document.getElementById('login-email').value,
    password: document.getElementById('login-password').value
  }

  fetch('http://localhost:5000/users/login', {
    method: 'post',
    body: JSON.stringify(loginUser),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res.json()))
    .catch(error => console.log('error is', error))
})
