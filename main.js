
// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }

// $color: black;
// $color2: pink;
// $radius: .35rem;
// $border-width: 2px;
// $color-bg: white;
// $offset: .5rem;
// $transition: .3s;

// body {
//   background-color: lightblue;
//   font-family: 'Montserrat', sans-serif;
//   display: grid;
//   place-items: center;
//   height: 100vh;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   //background:  linear-gradient(to bottom, white 0%, pink 100%);
// }

// button {
//   font-weight: 600;
//   border: solid $border-width $color;
//   outline: 0;
//   padding: 1rem 4rem;
//   font-size: 1.5rem;
//   letter-spacing: .08rem;
//   background-color: $color-bg;
//   border-radius: $radius;
//   position: relative;
//   cursor: pointer;
  
//   &::after {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: $color2;
//       z-index: -1;
//       border-radius: $radius;
//       border: solid $border-width $color;
//       transition: all $transition ease-in-out;
//   }
// }
// button.style-1 {
//   &::after {
//      width: 90%;
//      height: 90%;
//   }
//   &:hover {
//     &::after {
//       width: 100%;
//       height: 100%;
//       top: $offset;
//       left: $offset;
//     }
//   }
// }

// button.style-2 {
//   &::after {
//       top: $offset;
//       left: $offset;
//   }
  
//   &:hover {
//     &::after {
//       width: calc(100% + #{$offset});
//       height: calc(100% + #{$offset});
      
//     }
//   }
// }

// button.style-3 {
//   &::after {
//     border: 0;
//       box-shadow: 0px 0px 0px $border-width $color;
//       top: $offset;
//       left: $offset;
//   }
  
//   &:hover {
//     &::after {
//       top: -#{$offset};
//       left: -#{$offset};
//       width: calc(100% + #{$offset} * 2);
//       height: calc(100% + #{$offset} * 2);
//     }
//   }
// }

// button.style-4 {
//   &::after {
//       border: 0;
//       box-shadow: 0px 0px 0px $border-width $color;
//       width: calc(100%);
//       height: calc(100%);
//   }
  
//   &:hover {
//     &::after {
//       top: -#{$offset};
//       left: -#{$offset};
//       width: calc(100% + #{$offset} * 2);
//       height: calc(100% + #{$offset} * 2);
//     }
//   }
// }

// button.style-5 {
//    &::after {
//     border: 0;
//      box-shadow: 0px 0px 0px $border-width $color;
//      top: $offset;
//      left: $offset;
//   }
  
//   &:hover {
//     background-color: $color2;
//     border: 0;
//     &::after {
//       background-color: $color;
//       box-shadow: none;
//     }
//   }
// }


