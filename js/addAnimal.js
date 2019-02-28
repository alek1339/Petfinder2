$(document).on('submit', '.addAnimalForm', function (e) {
  e.preventDefault()

  let newAnimal = {
    petName: document.getElementById('petName').value,
    petPicture: document.getElementById('petPicture').value,
    petBreed: document.getElementById('petBreed').value,
    petGender: document.getElementById('petGender').value,
    petYears: document.getElementById('petYears').value
  }

  fetch('http://localhost:5000/animals/add', {
    method: 'post',
    body: JSON.stringify(newAnimal),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(newAnimal => console.log(newAnimal))
    .catch(error => console.log('error is', error))
})
