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
        const newMeme = makeMeme(userBottomText.value,userTopText.value, userImg.value)
        results.appendChild(newMeme)
    
});

function makeMeme(bottomText, topText, img){
    console.log(bottomText)
    const memeBox = document.createElement('div')
    memeBox.setAttribute("id", "image");
    const memeImg = document.createElement('img')
    memeImg.src = img
    memeBox.appendChild(memeImg)
  const memeTopText = document.createElement('h2')
  memeTopText.setAttribute("id", "topText");
  memeTopText.innerText = topText
  memeBox.append(memeTopText)
  const memeBottomText = document.createElement('h2')
  memeBottomText.setAttribute("id", "botText");
  memeBottomText.innerText = bottomText
  memeBox.append(memeBottomText)
  const removeBtn = document.createElement('button')
  removeBtn.setAttribute("id", "removeBtn");
  removeBtn.innerText = 'Delete'
  removeBtn.addEventListener('click', function(e) {
    e.target.parentElement.remove()
  })
  memeBox.appendChild(removeBtn)

console.log(memeBox)
 return memeBox
}
// form.addEventListener('change', function (e) {

//     e.preventDefault();
//     const reader = new FileReader()
//     reader.onload = function () {
//         const img = new Image()
//         img.src = reader.result
//         memeImg.src = img.src;

//     }


//     reader.readAsDataURL(image.files[0])
// });




