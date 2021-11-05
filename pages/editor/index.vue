<template>
  <!-- 文章编辑及发布 -->
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="contents.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="contents.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="contents.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="tagcont"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  @keyup.enter="enterTag"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(item, i) in contents.tagList"
                    :key="i"
                  >
                    <i class="ion-close-round" @click="removeTag(index)"></i>
                    {{ item }}
                  </span>
                </div>
              </fieldset>
              <button
                @click.prevent="addContent()"
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, addArticle, updateArticle } from "@/api/article";

export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  name: "EditorIndex",
  data() {
    return {
      tagcont: "",
      contents: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
    };
  },
  async mounted() {
    const slug = this.$route.params.slug;
    if (slug) {
      this.slug = slug;
      const { data } = await getArticle(slug);
      this.contents = data.article;
    }
  },
  methods: {
    enterTag() {
      this.contents.tagList.push(this.tagcont);
      this.tagcont = "";
    },
    removeTag(index) {
      this.contents.tagList.splice(index, 1);
    },
    async addContent() {
      if (this.slug) {
          const { data } = await updateArticle(this.slug, {article: this.contents})
          this.$router.push(`/article/${data.article.slug}`)
        }else {
          const { data } = await addArticle(this.contents);
          this.$router.push(`/article/${data.article.slug}`);
        }
    },
  },
};
</script>

<style>
</style>
