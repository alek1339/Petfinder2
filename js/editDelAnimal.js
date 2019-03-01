$(document).on('click', '.delBtn', function (e) {
  e.preventDefault()

  $.post('http://localhost:5000/animals/delete',
    {
      id: $(this).attr('name')
    },
    function (data, status) {
    })
  document.location.href = '/'
})

$(document).on('click', '#editSaveBtn', function (e) {
  e.preventDefault()

  $.post('http://localhost:5000/animals//edit-animal',
    {
      id: $(this).attr('name'),
      name: document.getElementById('petNameEdit').value,
      picture: document.getElementById('petPictureEdit').value,
      breed: document.getElementById('petBreedEdit').value,
      gender: document.getElementById('petGenderEdit').value,
      years: document.getElementById('petYearsEdit').value
    },
    function (data, status) {
    })
  document.location.href = '/'
})

$(document).on('click', '.editBtn', function (e) {
  (async () => {
    var id = $(this).attr('name')
    let edit = await $.get('../templates/edit.hbs')
    let template = Handlebars.compile(edit)

    var animal = {}

    $.post('http://localhost:5000/animals/edit',
      {
        id: $(this).attr('name')
      },
      function (data, status) {
        editAnimal(data)
      })

    function editAnimal(res) {
      animal = res
      document.getElementById('adopt').style.display = 'none'
      document.getElementById('edit').style.display = 'block'
      let resultHtml = template(animal)
      $('#edit').append(Handlebars.compile(resultHtml))
    }
  })()
})
