<template>
  <h3 class="new-top" style="margin-bottom: 2px; margin-top: 10px">
    🌟观星资讯✨
  </h3>
  <div style="padding-bottom: 10px">
    <div class="tagList">
      <p>
        <a href="http://yurinavi.com/category/alllist/yuricomic/">
        </a>
      </p>
      <a href="http://yurinavi.com/category/alllist/yuricomic/">
        <div class="tag">
          <span style="color: var(--md-sys-color-on-secondary-light)">
            <center>Tag</center>
          </span>
        </div>
      </a>
      <p>
        <a href="http://yurinavi.com/category/alllist/yuricomic/">
        </a>
        <a href="http://yurinavi.com/tag/yurihime/"> </a>
      </p>
    </div>
  </div>

  <div class="newsList">
    <ul id="npcatch-top">
      <!--文章循环开始-->
      <li v-for="item in newsList" v-bind:key="item" class="post-list">
        <a :href="'/post/' + item.id">
          <div v-if="item.featured_image_url">
            <img :src="item.featured_image_url" width="120px" height="10" />
          </div>
          <div v-else>
            <img src="https://houbunsha.co.jp/img/mv_img/con_item_nPrn_2.png" width="120px" height="10" />
          </div>
        </a>
        <span class="title">
          <router-link :to="'/post/' + item.id">
            {{ item.title.rendered }}
            <span class="date">
              {{ item.date }}
            </span>
          </router-link>
        </span>
      </li>
      <!--文章循环结束-->
    </ul>
  </div>

</template>

<script>
import request from '../../utils/request';
import { useToast } from "vue-toastification";

export default {
  setup () {
    // Get toast interface
    const toast = useToast();
    // These options will override the options defined in the "app.use" plugin registration for this specific toast

    // Make it available inside methods
    return { toast }
  },
  data () {
    return {
      newsList: null
    }
  },
  methods: {
    getNewsList () {
      let url = "/sop-api/wp/v2/posts"
      request.get(url)
        .then(res => {
          this.newsList = res
        })
        .catch((err) => {
          console.log(err);
          this.toast.error("API获取失败，请刷新页面重试", {
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
  },
  mounted () {
    this.getNewsList();
  }
}
</script>

<style scoped>
h3.new-top {
  color: var(--md-sys-color-on-secondary-light);
  margin-top: 0.4em;
  padding: 0.5em 0em 0.5em 0em;
  background-color: var(--md-sys-color-primary);
  border-radius: 14px;
  line-height: 25px;
  border-bottom: 0px solid #f7e7ed;
  text-align: center;
  margin: 0 5px 10px 5px;
}

.tagList .tag {
  border: none;
  padding: 3px 10px;
  background: var(--md-sys-color-secondary-light);
  float: left;
  margin: 5px;
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  font-size: 0.9em;
}

.tagList {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-bottom: 0px solid #ddd;
  width: calc(100% - 10%);
  font-size: 0.7em;
  margin-bottom: 10px;
}

#npcatch-top {
  margin: 0px 0px !important;
}

#npcatch-top li {
  font-size: 12px;
  overflow: hidden;
  clear: both;
  margin: 20px 0px 5px 0px;
  vertical-align: top;
  border-bottom: dashed 1px #969696;
}

#npcatch-top li a {
  transition: color 0.3s;
}

#npcatch-top li a:hover {
  text-decoration: none;
  color: var(--md-sys-color-tertiary);
}

#npcatch-top img {
  float: left;
  margin-left: 4px;
  box-shadow: 0px 0px 7px #bbb;
  margin-bottom: 5px;
  width: 180px;
  height: 120px;
  border-radius: 5px;
  object-fit: cover;
}

#npcatch-top a:hover img {
  opacity: 0.7;
  filter: alpha(opacity=70);
  -ms-filter: â€œalpha(opacity=70);
  transition: 0.2s ease-in-out;
}

#npcatch-top img {
  max-width: 100%;
}

#npcatch-top a img {
  border: 0;
  transition: 0.2s ease-in-out;
}

#npcatch-top img {
  max-width: 100%;
  /* height: auto;*/
  vertical-align: top;
}

#npcatch-top .title {
  float: left;
  height: 10px;
  padding: 0px 10px;
  line-height: 17px;
  font-weight: 700;
  color: #333333;
  line-height: 25px;
}

#npcatch-top .title a {
  font-weight: 700;
  color: #2b2b2b;
  font-size: 18px;
}

#npcatch-top .date {
  font-size: x-small;
  font-weight: 400;
  display: block;
  color: #666699;
  margin-bottom: 5px;
}

#npcatch-top {
  margin: 0px 0px !important;
}

#npcatch-top {
  list-style: none;
  margin: 0;
}

@media (max-width: 768px) {
  #npcatch-top .title {
    float: left;
    padding: 0 10px;
    line-height: 17px;
  }

  #npcatch-top .title a {
    font-size: 13px;
    line-height: 18px;
  }

  #npcatch-top img {
    float: left;
    margin-left: 4px;
    box-shadow: 0px 0px 7px #bbb;
    margin-bottom: 5px;
    width: calc(100% - 70%);
    height: 75px;
    border-radius: 5px;
    object-fit: cover;
  }
}

.post-list {
  transition: all .3s;
}

.post-list:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 10px rgb(204 204 204 / 47%);
  transition: all .2s ease;
}
</style>