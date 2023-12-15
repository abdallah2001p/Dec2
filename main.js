/* Navigation Bar for Responsive */
let nav = document.querySelector("i")
let ul = document.querySelector("ul")
nav.addEventListener("click",()=>{
    ul.classList.toggle("active")
})


/* Image Slider */
let imagesName = new Map([ [1,'images/background.jpg'],[2,'images/background-2.jpg'],[3,'images/background-3.jpg'],[4,'images/background-4.jpg'] ])
let leftArrow = document.querySelector(".left-arrow")
let rightArrow = document.querySelector(".right-arrow")
let imageDots = document.querySelectorAll(".image-changer li")
let landingPage = document.querySelector(".landing-page");
let imageDisplayed = 1;
//default settings
landingPage.style.backgroundImage = "url('images/background.jpg')"
imageDots[0].classList.add("active")
//Right Arrow
rightArrow.addEventListener("click",()=>{
    imageDisplayed++;
    imageSilder()
})
//Left Arrow
leftArrow.addEventListener("click",()=>{
    imageDisplayed--;
    imageSilder()
})
//image silider main
function imageSilder() {
    checker()
    changeBackground()
}
//iterate over all image and change the background image and  change the dot color
function changeBackground() {
    for(let i of imagesName.keys())
    {
        if(imageDisplayed == i)
        {
                landingPage.style.backgroundImage = `url('${imagesName.get(i)}')`
                changeDots()
        }
    }
}
//Check if the number of the image displayed exceed the range
function checker() {
    if(imageDisplayed <= 0)
            imageDisplayed = 4;
    if(imageDisplayed >= 5)
        imageDisplayed = 1;
}
//change the dot color when i change the image 
function changeDots() {
    imageDots.forEach(el=>{
        el.classList.remove("active")
        if(imageDisplayed == el.dataset.count)
            el.classList.add("active")
    })
}
//change the image when presses a dot 
chooseDot()
function chooseDot() {
    imageDots.forEach(el=>{
        el.addEventListener("click",()=>{
            imageDisplayed = el.dataset.count;
            landingPage.style.backgroundImage = `url('${imagesName.get(Number(imageDisplayed))}')`
            changeDots()
        })
    })
}
//change the background after a period of time
setInterval(function(){
    imageDisplayed++
    imageSilder()
},5000)


/* Change gellery photos */
let moreList = document.querySelectorAll(".more-images ul li")
let photos = document.querySelectorAll(".photos div img")
//Default settings
moreList[0].classList.add("active")
//CHosen Number
moreList.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(el.innerHTML == '1')
        {
            let counter = 1;
            photosChanger(counter)
            changeListNumber(el)
        }
        if(el.innerHTML == '2')
        {
            let counter = 7;
            photosChanger(counter)
            changeListNumber(el)
        }        
        if(el.innerHTML == '3')
        {
            let counter = 13;
            photosChanger(counter)
            changeListNumber(el)
        }
    })
})
//Change the photo 
function photosChanger(counter) {
    photos.forEach(img=>{
        img.src = `images/${counter}.jpg`
        counter+=1;
    })
}
//Change the style of the number
function changeListNumber(el) {
    moreList.forEach(el=>{
        el.classList.remove("active")
    })
    el.classList.add("active")
}