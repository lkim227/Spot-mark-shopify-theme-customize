// if(screen.width > 768){
//   const work_point = document.querySelectorAll(".work-point-icon");
//   work_point.forEach((item) => {
//     item.addEventListener("click", () =>{
//       const work_point_root = item.closest(".text-overlay");
//       const content_text = work_point_root.querySelector(".work-point-content>.text");
//       let flag = 1;
//       if(item.className.indexOf("active") > -1){
//         item.classList.remove("active");
//         content_text.style.maxHeight = "0";
//         content_text.style.opacity = "0";
//         work_point_root.classList.remove("active");
//         flag = 0;
//       }
//       const all_text_overlay = document.querySelectorAll(".text-overlay");
//       all_text_overlay.forEach((it_item) => {
//         it_item.classList.remove("active");
//         it_item.querySelector(".work-point-icon").classList.remove("active");
//         const temp_item_text = it_item.querySelector(".work-point-content>.text");
//         temp_item_text.style.maxHeight = "0";
//         temp_item_text.style.opacity = "0";
//       });
      
      
      
//       if(flag){
//         item.classList.add("active");
//         content_text.style.maxHeight = content_text.scrollHeight + "px";
//         content_text.style.opacity = "1";
//         work_point_root.classList.add("active");
//       }
  
//     })
//   })
// }
if(screen.width > 768){
  const text_overlay_total = document.querySelectorAll(".text-overlay");
  text_overlay_total.forEach((item) => {
    item.addEventListener("click", () => {
      let flag = 1;
      if(item.className.indexOf("active") > -1){
        item.classList.remove("active");
        item.querySelector(".work-point-icon").classList.remove("active");
        const temp_item_text = item.querySelector(".work-point-content>.text");
        temp_item_text.style.maxHeight = "0";
        temp_item_text.style.opacity = "0";
        flag = 0;
      }
      const temp_overlay_total = document.querySelectorAll(".text-overlay");
      temp_overlay_total.forEach((it_item) => {
        it_item.classList.remove("active");
        it_item.querySelector(".work-point-icon").classList.remove("active");
        const temp_item_text = it_item.querySelector(".work-point-content>.text");
        temp_item_text.style.maxHeight = "0";
        temp_item_text.style.opacity = "0";
      });
      if(flag){
        item.classList.add("active");
        item.querySelector(".work-point-icon").classList.add("active");
        const temp_item_text = item.querySelector(".work-point-content>.text");
        temp_item_text.style.maxHeight = temp_item_text.scrollHeight + "px";
        temp_item_text.style.opacity = "1";
      }
    });

  });
}

class WorkSlider extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.sliderWrapper = this.querySelector(
      ".work-swiper"
    );
    if (!this.sliderWrapper) return;
    const resizeObserver = new ResizeObserver((entries) => this.init());
    resizeObserver.observe(this.sliderWrapper);
  }
  init() {
    const slider = new Swiper(this.sliderWrapper, {
      grid: {
        rows: 2, // your amount of slides
        fill: "row",
      },
      slidesPerColumnFill: 'column',
      slidesPerColumn: 2,
      slidesPerView: parseFloat(this.sliderWrapper.dataset.slidesmobile),
      horizontal: JSON.parse(this.sliderWrapper.dataset.horizontal),
      freeMode: JSON.parse(this.sliderWrapper.dataset.freemode),
      spaceBetween: parseFloat(this.sliderWrapper.dataset.mobilespace),
      grabCursor: JSON.parse(this.sliderWrapper.dataset.grabcursor),
      loop: JSON.parse(this.sliderWrapper.dataset.loop),
      speed: parseInt(this.sliderWrapper.dataset.speed),
      autoplay: {
        enabled: JSON.parse(this.sliderWrapper.dataset.autoplay),
        delay: parseInt(this.sliderWrapper.dataset.delay),
        disableOnInteraction: JSON.parse(
          this.sliderWrapper.dataset.disableoninteraction
        ),
        reverseDirection: JSON.parse(
          this.sliderWrapper.dataset.reversedirection
        ),
      },
      navigation: {
        nextEl: ".next-nav",
        prevEl: ".prev-nav",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        359: {
          slidesPerView: parseFloat(this.sliderWrapper.dataset.slidesmobile),
          spaceBetween: parseFloat(this.sliderWrapper.dataset.mobilespace),
        },
        769: {
          slidesPerView: parseFloat(this.sliderWrapper.dataset.slidestab),
          spaceBetween: parseFloat(this.sliderWrapper.dataset.tabspace),
        },
        1024: {
          slidesPerView: parseFloat(this.sliderWrapper.dataset.slideslaptop),
          spaceBetween: parseFloat(this.sliderWrapper.dataset.laptopspace),
        },
        1440: {
          slidesPerView: parseFloat(this.sliderWrapper.dataset.slidesdesktop),
          spaceBetween: parseFloat(this.sliderWrapper.dataset.desktopspace),
        },
      },
    });
    return slider;
  }
}
customElements.define("work-slider", WorkSlider);


