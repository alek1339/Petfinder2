$('#genderOptions').change(function (e) {
  petFilter()
})

$('#yearsOptions').change(function (e) {
  petFilter()
})

function petFilter () {
  if (document.getElementById('pets') != 'undefined') {
    document.getElementById('pets').innerHTML = ''
  }

  (async () => {
    let adopt = await $.get('../templates/adopt.hbs')
    let template = Handlebars.compile(adopt)

    $.ajax('http://localhost:5000/animals/getAnimals')
      .then(response => addAllAnimals(response))

    function addAllAnimals (allPets) {
      var animals = []
      if ($('#genderOptions').val() === 'male' && $('#yearsOptions').val() !== 'all') {
        animals = _.filter(allPets, { 'gender': 'Male', 'years': $('#yearsOptions').val() })
        console.log(1)
      } else if ($('#genderOptions').val() === 'female' && $('#yearsOptions').val() !== 'all') {
        animals = _.filter(allPets, { 'gender': 'Female', 'years': $('#yearsOptions').val() })
        console.log(2)
      } else if ($('#genderOptions').val() === 'all' && $('#yearsOptions').val() !== 'all') {
        animals = _.filter(allPets, { 'years': $('#yearsOptions').val() })
        console.log(3)
      } else if ($('#genderOptions').val() === 'male' && $('#yearsOptions').val() === 'all') {
        animals = _.filter(allPets, { 'gender': 'Male' })
        console.log(5)
      } else if ($('#genderOptions').val() === 'female' && $('#yearsOptions').val() === 'all') {
        animals = _.filter(allPets, { 'gender': 'Female' })
      } else if (($('#genderOptions').val() === 'all' && $('#yearsOptions').val() === 'all')) {
        animals = allPets
        console.log(6)
      }

      for (const pet of animals) {
        let resultHtml = template(pet)
        $('#pets').append(Handlebars.compile(resultHtml))
      }
    }
  })()
}
