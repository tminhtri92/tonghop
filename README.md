<style>
.title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}
.container {
  max-width: 100%;
}
.image {
  width: 33%;
  position: relative;
}
.ecom-app .image:first-child {
  animation-name: bmi-1;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.ecom-app .image:nth-child(2) {
  animation-name: bmi-2;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.ecom-app .image:nth-child(3) {
  animation-name: bmi-3;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.ecom-app .image:nth-child(6) {
  animation-name: bmi-6;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.ecom-app .image:nth-child(5) {
  animation-name: bmi-5;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.ecom-app .image:nth-child(4) {
  animation-name: bmi-4;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.image-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@keyframes bmi-1 {
  0% {left:0%}
  25% {left:33.33333%}
  50% {left:66.66666%}
  75% {left:33.33333%}
  100% {left:0%}
}
@keyframes bmi-2 {
  0% {left:0%}
  25% {left:-33.33333%}
  50% {left:-33.33333%}
  75% {left:-33.33333%}
  100% {left:0%}
}
@keyframes bmi-3 {
  0% {left:0%}
  25% {left:0%;}
  50% {left:-33.33333%}
  75% {left:0%}
  100% {left:0%}
}
@keyframes bmi-6 {
  0% {left:0%}
  25% {left:-33.33333%}
  50% {left:-66.66666%}
  75% {left:-33.33333%}
  100% {left:0%}
}
@keyframes bmi-5 {
  0% {left:0%}
  25% {left:33.33333%}
  50% {left:33.33333%}
  75% {left:33.33333%}
  100% {left:0%}
}
@keyframes bmi-4 {
  0% {left:0%}
  25% {left:0%;}
  50% {left:33.33333%}
  75% {left:0%}
  100% {left:0%}
}
.bmi-app .image-wrapper {
  justify-content: flex-start;
}
.header {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10000;
  justify-content: space-around;
  background: white;
}
.header-item {
  font-size: 40px;
}
</style>
<nav class="header">
  <div class="header-item">
    <a href="#ecom-app">Ecom App</a>
  </div>
  <div class="header-item">
    <a href="#bmi-app">BMI App</a>
  </div>
  <div class="header-item">
    <a href="#insta-app">Instagram App</a>
  </div>

</nav>
<div class="container">
  <section id="ecom-app">
    <div class="ecom-app">
      <div class="title">
        Ecom App
      </div>
      <div class="image-wrapper">
        <img src="./screenshots/Ecommerce/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 13.40.52.png" class="image" />
        <img src="./screenshots/Ecommerce/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 13.41.12.png" class="image" />
        <img src="./screenshots/Ecommerce/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 13.41.29.png" class="image" />
        <img src="./screenshots/Ecommerce/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 13.41.40.png" class="image" />
        <img src="./screenshots/Ecommerce/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 13.42.01.png" class="image" />
        <img src="./screenshots/Ecommerce/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 13.42.15.png" class="image" />
        <img src="./screenshots/Ecommerce/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 13.42.24.png" class="image" />
      </div>
    </div>
  </section>
  <section id="bmi-app">
    <div class="bmi-app">
      <div class="title">
        BMI App
      </div>
      <div class="image-wrapper">
        <img src="./screenshots/BMI/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 14.20.32.png" class="image" style="margin-right: 0.333333%"/>
        <img src="./screenshots/BMI/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 14.20.42.png" class="image" />
      </div>
    </div>
  </section>
  <section id="insta-app">
    <div class="insta-app">
      <div class="title">
        Instagram App
      </div>
      <div class="image-wrapper">
        <img src="./screenshots/Instagram/Simulator Screen Shot - iPhone 11 - 2020-10-16 at 17.00.37.png" class="image" />
      </div>
    </div>
  </section>
</div>