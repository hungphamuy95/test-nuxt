<template lang="pug">
.page-with-side-links
  .links-sidebar
    ul.links
      li(v-for="i, k in links" :key="k")
        nuxt-link(:to="i.slug" v-text="i.title")

      slot(name="links")

  .content
    slot
</template>

<style lang="scss" scoped>
.page-with-side-links {
  display: flex;
  .links-sidebar {
    flex: 0 250px;
    margin-right: 20px;
  }
  .content {
    flex: 1;
  }
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    slug: {
      type: String,
      default: () => null
    }
  },

  computed: {
    ...mapGetters({
      menu: 'ui/menu'
    }),

    links () {
      const slug = this.slug || this.$parent.$route.path
      return this.searchBySlug(this.menu, slug)
    }
  },

  methods: {
    searchBySlug (from, slug) {
      for (let i = 0; i < from.length; i++) {
        const item = from[i]
        if (item.slug === slug) return from
        if (item.children) {
          const res = this.searchBySlug(item.children, slug)
          if (res) return res
        }
      }
      return null
    }
  }
}
</script>
