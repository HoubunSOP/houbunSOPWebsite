<template>
  <div class="swiper TopSwiper">
    <swiper :modules="modules" :space-between="30" :autoplay="true" :pagination="{
      el: '.swiper-pagination',
      clickable: true,
    }" :slides-per-view="'auto'" :centeredSlides="true" :lazy="{
  loadPrevNext: true,
  loadPrevNextAmount: 1,
}">
      <swiper-slide>
        <a href="http://yurinavi.com/2023/01/14/yurihime_sale/" target="_self">
          <img src="http://yurinavi.com/wp-content/uploads/2023/01/citrus-purasu-1-st-400x200.png" height="210"
            width="420" alt="" class="slider-1767 slide-77396" draggable="false">
        </a>
        <div class="caption-wrap">
          <div class="caption">
            一迅社・百合姫セール1
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="http://yurinavi.com/2023/01/14/yurihime_sale/" target="_self">
          <img src="http://yurinavi.com/wp-content/uploads/2023/01/citrus-purasu-1-st-400x200.png" height="210"
            width="420" alt="" class="slider-1767 slide-77396" draggable="false">
        </a>
        <div class="caption-wrap">
          <div class="caption">
            一迅社・百合姫セール2
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <a href="http://yurinavi.com/2023/01/14/yurihime_sale/" target="_self">
          <img src="http://yurinavi.com/wp-content/uploads/2023/01/citrus-purasu-1-st-400x200.png" height="210"
            width="420" alt="" class="slider-1767 slide-77396" draggable="false">
        </a>
        <div class="caption-wrap">
          <div class="caption">
            一迅社・百合姫セール3
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <br>
    <br>
    <br>
    <div class="swiper-pagination">
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Lazy, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup () {
    return {
      modules: [Lazy, Pagination, Autoplay],
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  width: auto;
}

.swiper {
  height: 300px;
}

.TopSwiper {
  margin-top: 30px;
}

.TopSwiper .swiper-pagination-bullet-active {
  background: var(--md-sys-color-surface-tint);
}

.TopSwiper .swiper-horizontal>.swiper-pagination-bullets,
.TopSwiper .swiper-pagination-bullets.swiper-pagination-horizontal,
.TopSwiper .swiper-pagination-custom,
.TopSwiper .swiper-pagination-fraction {
  bottom: 0px;
  left: 0;
  margin-top: 10px;
  width: 100%;
}

.TopSwiper .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: var(--md-sys-color-on-secondary-light);
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-radius: 8px !important;
}

.TopSwiper .swiper-slide img {
  display: block;
  width: 480px;
  height: 240px;
  object-fit: cover;
}

.TopSwiper .swiper-slide {
  width: 480px;
  height: 240px;
}

@media (max-width: 768px) {
  .TopSwiper .swiper-slide img {
    display: block;
    width: 420px;
    height: 210px;
    object-fit: cover;
  }

  .TopSwiper .swiper-slide {
    width: 420px;
    height: 210px;
  }
}

.TopSwiper .caption-wrap {
  line-height: 0px !important;
  height: 40px !important;
  border-radius: 0 0 9px 9px !important;
  font-size: 0.8em !important;
}

.TopSwiper .caption-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  background: black;
  color: var(--md-sys-color-on-secondary-light);
  opacity: 0.7;
  margin: 0;
  display: block;
  width: 100%;
  line-height: 1.4em;
}

.TopSwiper .caption-wrap>.caption {
  padding: 5px 10px;
  word-wrap: break-word;
  line-height: 15px;
  padding: 0px 0px 0px 0px !important;
  margin: 0px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.TopSwiper .swiper-slide img {
  border-radius: 8px !important;
}

.TopSwiper {
  padding-bottom: 20px !important;
  font-size: 0.8em !important;
}

.TopSwiper .swiper-wrapper {
  height: 200px;
}

.TopSwiper {
  padding-left: 10% !important;
  padding-right: 10% !important;
  filter: drop-shadow(rgba(0, 0, 0, 0.4) 2px 2px 2px);
}

@media (min-width: 768px) {
  .TopSwiper {
    padding-left: 10px !important;
    padding-right: 10px !important;
    filter: drop-shadow(rgba(0, 0, 0, 0.4) 2px 2px 2px);
    margin-left: 20px;
  }
}

.TopSwiper .swiper-slide a:hover img {
  opacity: 0.7;
  filter: alpha(opacity=70);
  -ms-filter: “alpha(opacity=70) ”;
  transition: all 0.5s ease-in-out;
}

.TopSwiper .swiper-slide img {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}
</style>