<script>
import { RouterLink, RouterView } from 'vue-router'
import { useToast } from "vue-toastification";
import request from './utils/request';
export default {
  data () {
    return {
      webSetting: null
    }
  },
  setup () {
    // Get toast interface
    const toast = useToast();
    // These options will override the options defined in the "app.use" plugin registration for this specific toast

    // Make it available inside methods
    return { toast }
  },
  created () {
    let url = "/sop-api/wp/v2/sop/web-settings"
    request.get(url)
      .then(res => {
        this.webSetting = res
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
        this.toast.error("网站配置获取失败，请刷新页面重试", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        });
      })
  },
}
</script>

<template>
  <header id="Navigation">
    <nav id="NavigationItem">
      <div id="brand">
        <!-- if ($this->options->logoUrl):-->
        <div v-if="webSetting.logo.ID" id="logo">
          <a href="/">
            <img :src="webSetting.logo.guid" :alt="webSetting.web_title">
          </a>
        </div>
        <!-- else: -->
        <div v-else id="logoText">
          <a href="/">
            {{ webSetting.web_title }}
          </a>
        </div>
        <!-- endif; -->
      </div>
      <div id="menu">
        <div id="menu-toggle">
          <div id="menu-icon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <ul>
          <li><a href="/">首页</a></li>
          <!-- 
          \Widget\Contents\Page\Rows::alloc()->to($pages);
          while ($pages->next()): 
        -->
          <li>
            <a href="/manga" title="<!-- $pages->title(); -->">
              manga
            </a>
            <!-- endwhile; -->
          </li>

        </ul>
      </div>
    </nav>
  </header>
  <div id="body">
    <div class="move_star01 img_100">
      <img src="http://koiastv.com/images/tmp/star.png" width="133" height="133" alt="">
    </div>
    <div class="move_star02 img_100">
      <img src="http://koiastv.com/images/tmp/star.png" width="133" height="133" alt="">
    </div>
    <div class="move_star03 img_100 style_mobile">
      <img src="http://koiastv.com/images/tmp/star.png" width="133" height="133" alt="">
    </div>
    <div class="container drop-shadow">
      <div class="row">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
/*** Mixins & Default Styles ***/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
}

/*** Color Variables ***/
/*** Centering Hack ***/
/*** Header Styles ***/
#Navigation header {
  width: 100vw;
  height: 100vh;
  background: #5661f2;
  display: flex;
}

#Navigation nav {
  background-color: #3752abb3;
  backdrop-filter: saturate(120%) blur(20px);
  transition: 0.3s ease all;
  border-radius: 24px;
}

/*** Navigation Styles ***/
#Navigation nav {
  width: 95vw;
  height: 80px;
  display: grid;
  left: 2.2%;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  z-index: 10;
  transition: all 0.3s;
  transition: box-shadow 0.5s;
  transition: height 0.7s;
}

#Navigation nav.navShadow {
  box-shadow: 0 4px 30px -5px #3752abb3;
  height: 60px;
}

#Navigation ol,
#Navigation ul {
  list-style: none;
}

#Navigation nav.navShadow #word-mark {
  opacity: 0;
}

#Navigation nav.navShadow #menu-toggle {
  height: 40px;
  width: 40px;
}

#Navigation nav.navShadow #logo img {
  height: 30px;
  width: auto;
  vertical-align: unset;
}



#Navigation #brand,
#Navigation #menu,
#Navigation ul {
  display: flex;
  align-items: center;
}

#Navigation #brand {
  padding-left: 40px;
}

#Navigation #logo img {
  width: auto;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s;
}

#Navigation #word-mark {
  width: 120px;
  height: 20px;
  background: #fff;
  border-radius: 90px;
  margin-left: 20px;
  opacity: 1;
  transition: all 0.3s;
}

#Navigation #logoText {
  margin-left: 10px;
  opacity: 1;
  transition: all 0.3s;
}

#Navigation #logoText>a {
  color: #fff;
  text-align: center;
  vertical-align: middle;
  font-size: 1.25em;
}

/*** Menu Styles ***/
#Navigation #menu {
  justify-content: flex-end;
  padding-right: 40px;
}

#Navigation li {
  margin-left: 20px;
  transition: all 0.3s;
}

#Navigation li:hover {
  background: white;
  display: block;
  border-radius: 90px;
  transition: all 0.3s;
  color: var(--md-ref-palette-primary40);
}

#Navigation li a {
  display: block;
  width: 80px;
  height: 20px;
  text-align: center;
  color: white;
  font-weight: 700;
  margin: 5px;
  transition: all 0.3s;
}

#Navigation li a:hover {

  color: var(--md-ref-palette-primary40);
}

#Navigation #menu-toggle {
  width: 55px;
  height: 55px;
  background: var(--md-ref-palette-primary40);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  transition: all 0.3s;
}

#Navigation #menu-toggle:hover .bar {
  width: 25px;
}

#Navigation #menu-toggle.closeMenu .bar {
  width: 25px;
}

#Navigation #menu-toggle.closeMenu .bar:first-child {
  transform: translateY(7px) rotate(45deg);
}

#Navigation #menu-toggle.closeMenu .bar:nth-child(2) {
  transform: scale(0);
}

#Navigation #menu-toggle.closeMenu .bar:last-child {
  transform: translateY(-7px) rotate(-45deg);
}

#Navigation .bar {
  width: 25px;
  height: 2px;
  background: #fff;
  transition: 0.3s ease-in-out;
}

#Navigation .bar:nth-child(2) {
  width: 20px;
  margin: 5px 0;
}

#Navigation .bar:last-child {
  width: 15px;
}


/*** Responsive Menu For Smaller Device ***/
@media screen and (max-width: 767px) {
  #Navigation #menu-toggle {
    display: flex;
  }

  #Navigation nav {
    width: 100vw;
    height: 80px;
    left: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    z-index: 10;
    transition: all 0.3s;
    border-radius: 0px;
  }

  #Navigation ul {
    display: inline-block;
    height: 0;
    background-color: #3752abb3;
    position: absolute;
    top: 80px;
    transform: translate();
    box-shadow: 0 5px 30px -4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }

  #Navigation ul.showMenu {
    height: 250px;
    background-color: #314997b3;
    backdrop-filter: saturate(120%) blur(20px);
    transition: 0.3s ease all;
    border-radius: 0px 0px 24px 24px;
  }

  #Navigation ul.showMenu li {
    height: 80px;
    opacity: 1;
    visibility: visible;
  }

  #Navigation li {
    width: 50%;
    height: 80px;
    float: left;
    padding-left: 40px;
    opacity: 0;
    visibility: hidden;
    margin-left: 0;
    transition: all 0.3s 0.1s;
  }

  #Navigation li:first-child,
  #Navigation li:nth-child(2) {
    margin-top: 80px;
  }

  #Navigation #head-line {
    transform: scale(0.8);
  }
}

/* -----------------------------------------
   流れ星
   -----------------------------------------*/

@keyframes nagareboshi01 {
  0% {
    left: -10px;
    top: 40%;
    opacity: 1;
  }

  15% {
    left: 98%;
    top: 80%;
    opacity: 0;
  }
}

.move_star01 {
  animation: nagareboshi01 infinite;
  animation-duration: 15s;
  animation-delay: 10s;
  position: absolute;
  width: 1%;
  opacity: 0;
  z-index: 51;
}


@keyframes nagareboshi02 {
  0% {
    left: -10%;
    top: 10%;
    opacity: 1;
  }

  30% {
    left: 98%;
    top: 25%;
    opacity: 0;
  }
}

.move_star02 {
  animation: nagareboshi02 infinite;
  animation-duration: 20s;
  animation-delay: 2s;
  position: absolute;
  width: 1%;
  opacity: 0;
  z-index: 52;
}





@keyframes nagareboshi03 {
  0% {
    left: -10%;
    top: 0%;
    opacity: 1;
  }

  30% {
    left: 98%;
    top: 10%;
    opacity: 0;
  }
}

.move_star03 {
  animation: nagareboshi02 infinite;
  animation-duration: 30s;
  animation-delay: 2s;
  position: absolute;
  width: 1.8%;
  opacity: 0;
  z-index: 52;
}


.ms_m {
  left: -10%;
}
</style>
