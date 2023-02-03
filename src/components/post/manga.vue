<template>
  <article>
    <header class="entry-header">
      <h1 class="entry-title">
        {{ mangaInfo && mangaInfo.title.rendered}}
      </h1>
      <!-- .entry-title -->
    </header>
    <div id="entry-content" class="entry-content clearfix">
      <div class="syoseki-page1">
        <img :src="mangaInfo && mangaInfo.thumbnail.guid" alt="" width="250" height="994" class="alignnone size-large">
        <br>
        <span class="MangaAuthor">
          <span class="MangaAuthorName">
            Quro
          </span>
        </span>
      </div>
      <div class="syoseki-page2">
        <div class="tagList">
          <!-- $this->tags(' ', true, "<a>暂无标签</a>"); -->
        </div>
        <div class="clear">
          <hr>
        </div>
        <h3 class="kanren">
          <i class="fa-solid fa-star" style="color: rgb(253,208,0);"></i>
          书籍详细
        </h3>
        <p style="line-height: 1.5em;">
          <span style="font-size: 1em;">
            发售日:{{ mangaInfo && mangaInfo.release_date }}
            <!-- $this->fields->UpDate();-->
            <br>
            出版社:芳文社
            <br>
            刊载杂志:
            <!-- echo $Magazine; -->
          </span>
        </p>
        <div class="clear">
          <hr>
        </div>
        <h3 class="kanren" style="margin-top: 25px;">
          <i class="fa-solid fa-moon" style="color: rgb(253,208,0);"></i>
          书籍简介
        </h3>
        <p class="bookIntroduction" style="line-height: 1.2em;">
          <span style="font-size: 0.8em;">
            <div v-if="mangaInfo && mangaInfo.content.rendered" v-html="mangaInfo.content.rendered" id="post_content"
              class="post-content">
            </div>
            <div v-else id="post_content" class="post-content">
              <strong>暂无简介</strong>
            </div>
          </span>
        </p>
      </div>
      <div class="syoseki-page3">
        <!--相关链接-->
        <a v-if="mangaInfo && mangaInfo.melonbook_url" :href="mangaInfo.melonbook_url" target="_blank"
          rel="nofollow noopener noreferrer">
          <div class="btn-a" style="background-color:#66cb63;">
            <center>
              <span class="relatedLink" style="font-size: 1.1em;color: #fff;">
                MelonBooks
              </span>
            </center>
          </div>
        </a>
        <a v-if="mangaInfo && mangaInfo.animate_url" :href="mangaInfo.animate_url" target="_blank"
          rel="nofollow noopener noreferrer">
          <div class="btn-a" style="background-color:#285490;">
            <center>
              <span class="relatedLink" style="font-size: 1.1em;color: #fff;">
                Animate
              </span>
            </center>
          </div>
        </a>
        <a v-if="mangaInfo && mangaInfo.gamers_url" :href="mangaInfo.gamers_url" target="_blank"
          rel="nofollow noopener noreferrer">
          <div class="btn-a" style="background-color:#ed7203;">
            <center>
              <span class="relatedLink" style="font-size: 1.1em;color: #fff;">
                Gamers
              </span>
            </center>
          </div>
        </a>
        <!--相关链接 end-->
      </div>

      <p>
        &nbsp;
      </p>
      <div class="clear">
        <hr>
      </div>
      <hr>
      <p>
      </p>
      <!--<div align="right">
      <a href="#"
        rel="nofollow noopener noreferrer" target="_blank" >
        <span style="font-size: 0.8em; color:#7f7f7f;">
          此信息需要修正
        </span>
      </a>
    </div>-->
      <p>
      </p>
      <p>
        &nbsp;
      </p>
      <!-- #comments .comments-area -->
    </div>
  </article>
</template>

<script>
import request from '../../utils/request';
export default {
  data () {
    return {
      mangaInfo: null
    }
  },
  created () {
    this.getMangaInfo()
  }, methods: {
    getMangaInfo () {
      let url = "/sop-api/wp/v2/mangas/" + this.$route.params.id
      request.get(url)
        .then(res => {
          this.mangaInfo = res
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
}
</script>

<style>
.post-content {
  color: #24292e;
  line-height: 2em !important;
}

.entry-content .kanren:nth-of-type(1) {
  margin-top: -5px;
}

.entry-content h1,
.entry-content h2,
.entry-content h3,
.entry-content h4,
.entry-content h5 {
  color: #004483;
  font-weight: 700;
  margin-top: 25px;
}

.post-content {
  color: #24292e;
  line-height: 2em;
}

.post-content h2 {
  font-size: 180%;
  transform: rotate(0.03deg);
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
}


.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
  line-height: 1.4;
  font-weight: 700;
  margin: 30px 0 10px 0;
}

.post-content p {
  margin: 10px 0;
}

.post-content ul {
  margin-left: 20px;
}

.gallery>img {
  margin: 10px 0 20px 0;
  transition: 0.3s ease all;
  border-radius: 10px;
}

.gallery>img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 30px -5px #3752abb3;
  cursor: pointer;
}

.post-content a:not(.gallery) {
  text-decoration: none;
  color: rgba(0, 68, 131, 1.00);
  font-weight: 600;
  border-bottom: rgba(45, 67, 144, 1.00) 2px dotted;
}

.post-content a:not(.gallery):after {
  content: ' \f08e';
  font-family: "Font Awesome 6 Free";
}

.post-content li::marker {
  content: '☄️';
  color: red;
  font-size: 3px;
}

.post-content h2:before {
  content: "⭐";
}

.post-content h2:after {
  content: "⭐";
}

.post-content h3 {
  font-size: 165%;
  transform: rotate(0.03deg);
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
}

.post-content h3:before {
  content: "✨";
}

.post-content h4 {
  font-size: 140%;
  transform: rotate(0.03deg);
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
  border-bottom: 2px solid var(--md-sys-color-on-primary-container);
}

.post-content h4:before {
  content: "🔭";
}

h5 {
  transform: rotate(0.03deg);
  font-weight: 700;
  font-size: 120%;
  border-bottom: rgb(0, 68, 131) 3px dotted;
  margin-bottom: 7px;
  line-height: 1.4;
  color: #004483;
}

.post-content h5:before {
  content: "🌙";
}

/* 预计制作 */
.ns_h4 {
  position: relative;
  background: #E9F0FB;
  padding: 10px 10px 10px 13px;
  font-size: 115%;
  color: #004483;
  border-left: rgba(71, 116, 185, 1.00) 10px solid;
  box-sizing: border-box;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  transform: rotate(0.03deg);
  font-weight: 700;
  line-height: 1.4;
}

/* 预计制作 */
.ns_waku {
  background-color: rgba(223, 229, 252, 1.00);
  border-radius: 20px;
  padding: 10px 15px;
}

#article h1 {
  padding-bottom: 3px;
}

.entry-title,
.entry-title a {
  color: #555;
}

.entry-content {
  padding-bottom: 3px;
  padding-top: 3px;
  display: block;
  overflow: hidden;
}

.syoseki-page1 {
  float: left;
  display: block;
  width: 375px;
  text-align: center;
  vertical-align: baseline;
  margin: 5px -30px -5px 0px;
}



.entry-content img,
.comment-content img,
.widget img {
  max-width: 100%;
}

.MangaAuthor {
  line-height: 50px;
  color: #fff;
  background-color: #272b446e;
  padding: 5px 25px;
  border-radius: 4px;
}

.MangaAuthorName {
  font-weight: bold;
}

.syoseki-page2 {
  float: left;
  width: 380px;
}

.syoseki-page2>p {
  margin-left: 13px;
}

.clear {
  clear: both;
}

.clear hr {
  display: none;
}

.syoseki-page3 {
  float: left;
  width: 400px;
  margin: 30px 5px 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-a {
  color: #fff;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);
  font-weight: bold;
  border-radius: 4px;
  margin: 0.5em auto;
  padding: 8px 0px;
  text-align: center;
  line-height: 30px;
  transition: all .2s ease;
  position: relative;
  margin: 5px;
  float: left;
}

.gaibu {
  margin-right: calc(-1em - 1px);
  opacity: 1 !important;
}

.btn-a:hover {
  box-shadow: none;
  transform: translateY(2px);
  opacity: 0.8;
}

#article h3,
#article h4,
#article h5,
#article h6 {
  padding-bottom: 0px;
}

.bookIntroduction {
  margin: 20px 0;
}

.tagList>a {
  color: #ffffff;
  padding: 2px 20px;
  background: var(--md-sys-color-secondary-light);
  float: left;
  font-weight: bold;
  margin: 6px;
  border-radius: 4px;
  font-size: 14px;
}

.relatedLink {
  margin: 0 10px;
}

@media (max-width: 768px) {
  .syoseki-page1 {
    width: 100%;
  }

  .syoseki-page3 {
    width: 100%;
  }

  .post-content>p>img {
    max-width: 90%;
  }
}
</style>