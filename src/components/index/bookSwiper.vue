<template>
  <div class="swiper NewBookSwiper">
    <swiper :modules="modules" :space-between="30" :slides-per-view="'auto'" :scrollbar="{
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: false,
    }" :lazy="{
  loadPrevNext: true,
  loadPrevNextAmount: 8,
}" :mousewheel="{ sensitivity: 6 }">
      <!--此处开始卡片循环-->
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="SwiperCard">
          <div class="SwiperCardTag">
            1/23
          </div>
          <div>
            <a href="<?php $recent->permalink();?>">
              <img data-src="http://yurinavi.com/wp-content/uploads/2023/01/nurumeta-3.jpg" alt="" width="1055"
                height="1500" class="alignnone size-full wp-image-60148 swiper-lazy">
              <img data-src="https://houbunsha.co.jp/img/mv_img/label_4.gif" class="swiper-lazy">
            </a>
            <p>
            </p>
            <div style="font-size: 1em; line-height: 20px;text-align:center;">
              qwq
            </div>
          </div>
        </div>
      </swiper-slide>
      <!--结束循环-->
    </swiper>
    <br>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar, Mousewheel, Lazy } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup () {

    return {
      modules: [Mousewheel, Lazy, Scrollbar],
    };
  },
};
</script>

<style scoped>
.SwiperCardTag {
  display: block;
  width: 50px;
  height: 20px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 5;
  top: 0;
  text-align: center;
  line-height: 15px;
  color: #FFF;
  font-size: 10x;
}

.NewBookSwiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.NewBookSwiper .swiper-slide img:nth-child(2n) {
  width: 32px;
  height: 16px;
  object-fit: cover;
  margin: 5px auto;
}

.NewBookSwiper .swiper-slide {
  width: 120px;
}

.SwiperCard {
  position: relative;
  float: left;
  padding-left: 5px;
  width: 120px;
}

@media (max-width: 768px) {
  .NewBookSwiper .swiper-slide {
    width: 80px;
  }

  .SwiperCard {
    position: relative;
    float: left;
    padding-left: 5px;
    width: 80px;
  }
}

.NewBookSwiper img.size-full,
img.size-large {
  max-width: 100%;
  height: auto !important;
}

.NewBookSwiper .swiper-horizontal>.swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  margin-top: 10px;
  position: relative;
  left: 1%;
  bottom: 0px;
  z-index: 50;
  height: 10px;
  width: 98%;
}

.SwiperCard {
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.SwiperCard:hover {
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
}

.NewBookTitle {
  font-size: 1.25em;
  color: var(--md-sys-color-on-secondary-light);
  margin-top: 0em;
  margin-left: -5px;
  padding: 3px 10px;
  background-color: var(--md-sys-color-primary);
  border-radius: 4px;
  line-height: 20px;
  margin-bottom: 0px;
  border-bottom: 0px solid #f7e7ed;
}
</style>