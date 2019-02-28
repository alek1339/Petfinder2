function openModal (event) {
  var modal = document.getElementsByClassName('modal')[0]
  var img = document.getElementsByClassName('imageInModal')[0]
  var imagesArray = document.getElementsByClassName('galleryImage')

  var imagesSrc = []

  for (let i = 0; i < imagesArray.length; i++) {
    imagesSrc.push(imagesArray[i].src)
  }

  var currentIndex = imagesSrc.indexOf(event.src)

  // Open modal

  $('#modal').fadeIn(350)

  img.src = event.src

  modal.appendChild(img)

  //   Previous Image
  $('#prev').click(function () {
    currentIndex--

    if (currentIndex < 0) {
      currentIndex = imagesSrc.length - 1
    }

    img.src = imagesSrc[currentIndex]
  })

  //   Next Image
  $('#next').click(function () {
    currentIndex++

    if (currentIndex > imagesSrc.length - 1) {
      currentIndex = 0
    }
    img.src = imagesSrc[currentIndex]
  })
}

function closeModal () {
  $('#modal').fadeOut(350)
}
