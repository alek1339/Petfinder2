var displayNoneElements = []

displayNoneElements.push(document.getElementById('home'))
displayNoneElements.push(document.getElementById('aboutUs'))
displayNoneElements.push(document.getElementById('supportUs'))
displayNoneElements.push(document.getElementById('adopt'))
displayNoneElements.push(document.getElementById('register'))
displayNoneElements.push(document.getElementById('login'))
displayNoneElements.push(document.getElementById('addAnimals'))
displayNoneElements.push(document.getElementById('adopted'))
displayNoneElements.push(document.getElementById('contacts'))
displayNoneElements.push(document.getElementsByClassName('map')[0])
displayNoneElements.push(document.getElementById('edit'))

function hideElements() {
  for (let i = 0; i < displayNoneElements.length; i++) {
    displayNoneElements[i].style.display = 'none'
  }
}

function loginClicked() {
  hideElements()
  document.getElementById('login').style.display = 'block'

  document.getElementsByClassName('container')[0].classList.remove('contacts-container')
  document.getElementsByClassName('active')[0].classList.remove('active')

  document.getElementById('loginBtn').classList.add('active')
}

function registerClicked() {
  hideElements()
  document.getElementById('register').style.display = 'block'

  document.getElementsByClassName('container')[0].classList.remove('contacts-container')
  document.getElementsByClassName('active')[0].classList.remove('active')
  document.getElementById('registerBtn').classList.add('active')
}

function aboutUsClicked() {
  hideElements()
  document.getElementById('aboutUs').style.display = 'block'

  document.getElementsByClassName('container')[0].classList.remove('contacts-container')
  document.getElementsByClassName('active')[0].classList.remove('active')
  document.getElementById('aboutUsBtn').classList.add('active')
}

function homeClicked() {
  hideElements()
  document.getElementById('home').style.display = 'block'

  document.getElementsByClassName('container')[0].classList.remove('contacts-container')

  document.getElementsByClassName('active')[0].classList.remove('active')
  document.getElementById('homeBtn').classList.add('active')
}

function supportUsClicked() {
  hideElements()
  document.getElementById('supportUs').style.display = 'block'

  document.getElementsByClassName('container')[0].classList.remove('contacts-container')

  document.getElementsByClassName('active')[0].classList.remove('active')
  document.getElementById('supportUsBtn').classList.add('active')
}

function adoptClicked() {
  hideElements()
  document.getElementById('adopt').style.display = 'block'
  // document.getElementById('edit').style.display = 'none'

  document.getElementsByClassName('container')[0].classList.remove('contacts-container')

  document.getElementsByClassName('active')[0].classList.remove('active')
  document.getElementById('adoptBtn').classList.add('active')
}

function addAnimalsClicked() {
  hideElements()
  document.getElementById('addAnimals').style.display = 'block'

  document.getElementsByClassName('container')[0].classList.remove('contacts-container')

  document.getElementsByClassName('active')[0].classList.remove('active')
  document.getElementById('addBtn').classList.add('active')
}

function adoptedClicked() {
  hideElements()
  document.getElementById('adopted').style.display = 'block'

  document.getElementsByClassName('container')[0].classList.remove('contacts-container')

  document.getElementsByClassName('active')[0].classList.remove('active')
  document.getElementById('adoptedBtn').classList.add('active')
}

function contactsClicked() {
  hideElements()
  document.getElementById('contacts').style.display = 'block'
  document.getElementsByClassName('map')[0].style.display = 'block'

  document.getElementsByClassName('container')[0].classList.add('contacts-container')

  document.getElementsByClassName('active')[0].classList.remove('active')
  document.getElementById('contactsBtn').classList.add('active')
}
