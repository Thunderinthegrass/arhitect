function scrollToLink() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
scrollToLink();

function modal() {
  const btns = document.querySelectorAll(".request-btn");
  const modalOverlay = document.querySelector(".modal-overlay ");
  const modals = document.querySelectorAll(".modal");
  const modalCloseBtn = document.querySelector(".close-btn");
  // const close = document.querySelectorAll(".close");

  btns.forEach((el) => {
    el.addEventListener("click", (e) => {
      // document.body.classList.add('ov-hidden');
      let path = e.currentTarget.getAttribute("data-path");

      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("modal--visible");
        modalOverlay.classList.add("modal-overlay--visible");
    });
  });

  modalOverlay.addEventListener("click", (e) => {
    // document.body.classList.remove('ov-hidden');
      if (e.target == modalOverlay) {
        modalOverlay.classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
          el.classList.remove("modal--visible");
        });
      }
  });

  modalCloseBtn.addEventListener("click", (e) => {
    // document.body.classList.remove('ov-hidden');
    
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  });
}
modal();

const heroSwiper = new Swiper(".hero__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const advantagesSwiper = new Swiper(".advantages__slider", {
    slidesPerView: 0,
    spaceBetween: 30,
});

// изменение хедера при прокрутке и прилипании
let scroll = () => {
  if (document.body.clientWidth <= 1110) {
    return;
  }

  let header =  document.querySelector('.header');

  if (header) {
    window.addEventListener("scroll", function() {
      let scroll = document.querySelector("body");
      let scrollHeight = scroll.getBoundingClientRect().top;
    
      if (scrollHeight < 0) {
        header.classList.add('sticky');
      }
      else{
        header.classList.remove('sticky');
      }
    })
  }
}
scroll();

//мобильное меню
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("ov-hidden");
});

nav.querySelectorAll("a, button").forEach((elem) => {
  elem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("ov-hidden");
  });
});

//placeholder инпутов
let placeholder = () => {
  let input = document.querySelectorAll('.modal-form__item');
  let label = document.querySelectorAll('.label');
  
  input.forEach((elem, id) => {
    elem.addEventListener('blur', () => {
      if (elem.value != '') {
        label[id].classList.add('active');
      }
      else {
        label[id].classList.remove('active');
      }
      console.log(elem.value);
    })
  })
}
placeholder();

//увеличивающаяся по мере заполняемости текстом textarea
let textareaTransfer = () => {
  let textarea = document.querySelector('.modal-form__textarea');
  

  textarea.setAttribute('style', 'height:' + (textarea.scrollHeight) + 'px;overflow-y:hidden;');
  textarea.addEventListener("input", OnInput, false);

  function OnInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  }
}
textareaTransfer();

//табы преимущества

let stageTabs = () => {
  let tabBtn = document.querySelectorAll('.stages__name-wrapper');
  let tabInfo = document.querySelectorAll('.stages__info');

  tabBtn.forEach((elem, id) => {

    elem.addEventListener('click', () => {
      tabBtn.forEach((elem, id) => {
        elem.classList.remove('active');
        tabInfo[id].classList.remove('active')
      })

      tabInfo[id].classList.add('active');
      elem.classList.add('active');
    })
  })
}
stageTabs();