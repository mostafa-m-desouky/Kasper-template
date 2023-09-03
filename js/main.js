let allLis = document.querySelectorAll("ul li a");
allLis.forEach (function (ele) {
    ele.onclick = function () {
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        })
        this.classList.add("active");
    }
})

let landing = document.querySelector(".landing")
let imgArray = ["image/landing-2.jpg", "image/landing.jpg", "image/landing-3.jpg"];
let prevBtn = document.querySelector("#left");
let nextBtn = document.querySelector("#right");
let currentSlide = 1;

var bulletsElement = document.createElement('ul');

// Set ID On Created Ul Element
bulletsElement.setAttribute('class', 'bullets');
bulletsElement.setAttribute('id', 'bullets');


// Create List Items Based On Slides Count
for (var i = 0; i < imgArray.length; i++) {

  var liItem = document.createElement('li');
  liItem.setAttribute('data-index', i);

  bulletsElement.appendChild(liItem);
  
}

landing.appendChild(bulletsElement);

let li = document.querySelectorAll("#bullets li")

let liArray = Array.from(li)
for (var i = 0; i < liArray.length; i++) {
    liArray[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        landing.style.backgroundImage = `url(${imgArray[parseInt(this.getAttribute('data-index'))]})`
        theChecker();
    }
  }
theChecker ()

function nextSlide() {
    if (nextBtn.classList.contains("block")) {
        return false;
    } else {
        landing.style.backgroundImage = `url(${imgArray[++currentSlide]})`;
        theChecker();
    }
}
function prevSlide() {
    if (prevBtn.classList.contains("block")) {
        return false;
    } else {
        landing.style.backgroundImage = `url(${imgArray[--currentSlide]})`;
        theChecker();
    }
}

function theChecker () {
    removeAllActive();
    
    bulletsElement.children[currentSlide].classList.add('active');

    if (currentSlide == 0) {
        prevBtn.classList.add("block");
    } else {
        prevBtn.classList.remove("block");
    }
    if (currentSlide == imgArray.length - 1) {
        nextBtn.classList.add("block");
    } else {
        nextBtn.classList.remove("block");
    }
}

function removeAllActive() {
    liArray.forEach(function (bullet) {
      bullet.classList.remove('active');
    });
  
}

let switcherLis = document.querySelectorAll(".shuffle li");
let shuffleBox = Array.from(document.querySelectorAll(".box"));


switcherLis.forEach (function (li) {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", filterImg);
})

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
}

function filterImg () {
    shuffleBox.forEach((img) => {
        img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
        el.style.display = "block";
    })
}

let nums = document.querySelectorAll(".number");
let stats = document.querySelector(".stats");
let started = false;

window.onscroll = () => {
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            nums.forEach((num) => statsCount(num));
        }
        started = true;
    }
}

function statsCount (el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal)
}