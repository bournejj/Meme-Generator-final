const image = document.querySelector('#file')

image.addEventListener('change', function (e) {

    console.log(image.files);
    const reader = new FileReader()
    reader.onload = function () {
        const img = new Image()
        img.src = reader.result
        document.body.appendChild(img)
    }


    reader.readAsDataURL(image.files[0])
});
