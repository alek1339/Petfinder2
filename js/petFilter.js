$('#genderOptions').change(function(e) {
    if(document.getElementById('pets') != 'undefined'){
        document.getElementById('pets').innerHTML = ''
    }

        // var gender = $( "#genderOptions" ).val()
        // console.log(gender)

    (async () => {
        let adopt = await $.get('../templates/adopt.hbs')
        let template = Handlebars.compile(adopt)

        // let animals = {}

        $.ajax('http://localhost:5000/animals/getAnimals')
            .then(response => addAllAnimals(response))


        function addAllAnimals(animals) {
            console.log(animals)
            for (const pet of animals) {
                let resultHtml = template(pet)
                $("#pets").append(Handlebars.compile(resultHtml))
            }
        }

    })()
});