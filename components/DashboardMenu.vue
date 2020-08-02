<template lang="pug">
el-menu.dashboard-menu(
  mode="horizontal"
  router
  menu-trigger="click"
  unique-opened
)
  dashboard-menu-item(v-for="i, k in menu" :key="i.slug" v-bind="i")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      menu: 'ui/menu'
    })
  }
}
</script>
