<template lang="pug">
component(:index="slug" :is="type" :route="slug")
  span.title(slot="title" v-text="title")
  dashboard-menu-item(
    v-if="children"
    v-for="i, k in children"
    v-bind="i"
    :key="i.slug"
  )
</template>

<script>
export default {
  name: 'DashboardMenuItem',

  props: {
    slug: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    children: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    type () {
      if (!this.children) return 'el-menu-item'
      return this.children.length > 0 ? 'el-submenu' : 'el-menu-item'
    }
  }
}
</script>
