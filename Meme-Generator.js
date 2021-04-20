const form = document.querySelector('#memeForm');
const userBottomText = document.querySelector('input[name="bottomText"]');
const userTopText = document.querySelector('input[name="topText"]');
const userImg = document.querySelector('input[name="image"]');
const memeImg = document.querySelector('img');
const memeBottomText = document.querySelector('#meme_bottom_text');
const memeTopText = document.querySelector('#meme_top_text');
const results = document.querySelector('#results');
const fileImg = document.querySelector('input[type="file"]');
const imgContainer = document.querySelector('#pic')
const image = document.querySelector('#file')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    memeBottomText.innerHTML = userBottomText.value;
    memeTopText.innerHTML = userTopText.value;

    if (userImg.value) {
        memeImg.src = userImg.value;
    }

});

form.addEventListener('change', function (e) {

    e.preventDefault();
    const reader = new FileReader()
    reader.onload = function () {
        const img = new Image()
        img.src = reader.result
        memeImg.src = img.src;

    }


    reader.readAsDataURL(image.files[0])
});



