document.addEventListener("DOMContentLoaded", initSlider);

let images = [
  {
    url: "images/admiral_room.jpg",
    link: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don <br> LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
  },
  {
    url: "images/thieves_room.jpg",
    link: "Sochi Thieves",
    city: "Sochi <br> Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
  },
  {
    url: "images/patriotic_room.jpg",
    link: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don <br> Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
  },
];

function initSlider() {
  if (!images || !images.length) return;

let sliderImages = document.querySelector(".slider-line"),
    sliderArrows = document.querySelector(".slider__arrows"),
    sliderDots = sliderArrows.querySelector(".slider__arrows_circle"),
    sliderLink = document.querySelector(".projects-menu"),
    sliderCity = document.querySelector(".specifications__item_city"),
    sliderArea = document.querySelector(".specifications__item_area"),
    sliderTime = document.querySelector(".specifications__item_time"),
    sliderCost = document.querySelector(".specifications__item_cost");

  initImages();
  initArrows();
  initDots();
  initLink();
  sliderInfo();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class ="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrows").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("prev")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dots = `<div class ="slider__arrows_circle-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index = "${index}"></div>`;
      sliderDots.innerHTML += dots;
    });
    sliderDots
      .querySelectorAll(".slider__arrows_circle-item")
      .forEach((dots) => {
        dots.addEventListener("click", function () {
          moveSlider(this.dataset.index);
        });
      });
  }

  function initLink() {
    images.forEach((image, index) => {
      let linkDiv = `<div class ="projects-menu__link n${index} ${
        index === 0 ? "active" : ""
      }"); data-index="${index}"><a>${images[index].link}</a></div>`;
      sliderLink.innerHTML += linkDiv;
    });
    sliderLink.querySelectorAll(".projects-menu__link").forEach((link) => {
      link.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function sliderInfo() {
    images.forEach((image, index) => {
      let cityDiv = `<p class="specifications__item-descr n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].city}</p>`;
      sliderCity.innerHTML += cityDiv;
      let areaDiv = `<p class="specifications__item-descr n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].area}</p>`;
      sliderArea.innerHTML += areaDiv;
      let timeDiv = `<p class="specifications__item-descr n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].time}</p>`;
      sliderTime.innerHTML += timeDiv;
      let costDiv = `<p class="specifications__item-descr n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].cost}</p>`;
      sliderCost.innerHTML += costDiv;
    });
  }

  function toggleActive(name, num) {
    name.querySelector(".active").classList.remove("active");
    name.querySelector(".n" + num).classList.add("active");
  }
  function moveSlider(num) {
    toggleActive(sliderImages, num);
    toggleActive(sliderDots, num);
    toggleActive(sliderLink, num);
    toggleActive(sliderCity, num);
    toggleActive(sliderArea, num);
    toggleActive(sliderTime, num);
    toggleActive(sliderCost, num);
  }
}
