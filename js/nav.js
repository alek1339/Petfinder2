var home = document.getElementById('home')
var aboutUs = document.getElementById('aboutUs')
var supportUs = document.getElementById('supportUs')
var adopt = document.getElementById('adopt')

function loginClicked() {
  home.style.display = 'none'
  aboutUs.style.display = 'none'
  supportUs.style.display = 'none'
  adopt.style.display = 'none'
  document.getElementById('register').style.display = 'none'
  document.getElementById('login').style.display = 'block'

  document.getElementById('homeBtn').classList.remove('active')
  document.getElementById('aboutUsBtn').classList.remove('active')
  document.getElementById('supportUsBtn').classList.remove('active')
  document.getElementById('adoptBtn').classList.remove('active')
  document.getElementById('registerBtn').classList.remove('active')
  document.getElementById('loginBtn').classList.add('active')
}

function registerClicked() {
  home.style.display = 'none'
  aboutUs.style.display = 'none'
  supportUs.style.display = 'none'
  adopt.style.display = 'none'
  document.getElementById('register').style.display = 'block'
  document.getElementById('login').style.display = 'none'

  document.getElementById('homeBtn').classList.remove('active')
  document.getElementById('aboutUsBtn').classList.remove('active')
  document.getElementById('supportUsBtn').classList.remove('active')
  document.getElementById('adoptBtn').classList.remove('active')
  document.getElementById('registerBtn').classList.add('active')
  document.getElementById('loginBtn').classList.remove('active')
}

function aboutUsClicked() {
  home.style.display = 'none'
  aboutUs.style.display = 'block'
  supportUs.style.display = 'none'
  adopt.style.display = 'none'
  document.getElementById('register').style.display = 'none'
  document.getElementById('login').style.display = 'none'

  document.getElementById('homeBtn').classList.remove('active')
  document.getElementById('aboutUsBtn').classList.add('active')
  document.getElementById('supportUsBtn').classList.remove('active')
  document.getElementById('adoptBtn').classList.remove('active')
  document.getElementById('registerBtn').classList.remove('active')
  document.getElementById('loginBtn').classList.remove('active')
}

function homeClicked() {
  home.style.display = 'block'
  aboutUs.style.display = 'none'
  supportUs.style.display = 'none'
  adopt.style.display = 'none'
  document.getElementById('register').style.display = 'none'
  document.getElementById('login').style.display = 'none'

  document.getElementById('homeBtn').classList.add('active')
  document.getElementById('aboutUsBtn').classList.remove('active')
  document.getElementById('supportUsBtn').classList.remove('active')
  document.getElementById('adoptBtn').classList.remove('active')
  document.getElementById('registerBtn').classList.remove('active')
  document.getElementById('loginBtn').classList.remove('active')
}

function supportUsClicked() {
  home.style.display = 'none'
  supportUs.style.display = 'block'
  aboutUs.style.display = 'none'
  adopt.style.display = 'none'
  document.getElementById('register').style.display = 'none'
  document.getElementById('login').style.display = 'none'

  document.getElementById('homeBtn').classList.remove('active')
  document.getElementById('supportUsBtn').classList.add('active')
  document.getElementById('aboutUsBtn').classList.remove('active')
  document.getElementById('adoptBtn').classList.remove('active')
  document.getElementById('registerBtn').classList.remove('active')
  document.getElementById('loginBtn').classList.remove('active')
}

function adoptClicked() {
  home.style.display = 'none'
  supportUs.style.display = 'none'
  aboutUs.style.display = 'none'
  adopt.style.display = 'block'
  document.getElementById('register').style.display = 'none'
  document.getElementById('login').style.display = 'none'

  document.getElementById('homeBtn').classList.remove('active')
  document.getElementById('adoptBtn').classList.add('active')
  document.getElementById('supportUsBtn').classList.remove('active')
  document.getElementById('aboutUsBtn').classList.remove('active')
  document.getElementById('registerBtn').classList.remove('active')
  document.getElementById('loginBtn').classList.remove('active')
}

function addAnimalsClicked() {
  home.style.display = 'none'
  supportUs.style.display = 'none'
  aboutUs.style.display = 'none'
  adopt.style.display = 'none'
  document.getElementById('register').style.display = 'none'
  document.getElementById('login').style.display = 'none'
  document.getElementById('addAnimals').style.display = 'block'

  document.getElementById('homeBtn').classList.remove('active')
  document.getElementById('adoptBtn').classList.remove('active')
  document.getElementById('supportUsBtn').classList.remove('active')
  document.getElementById('aboutUsBtn').classList.remove('active')
  document.getElementById('registerBtn').classList.remove('active')
  document.getElementById('loginBtn').classList.remove('active')
  document.getElementById('addBtn').classList.add('active')
}