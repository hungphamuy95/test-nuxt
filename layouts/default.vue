<template lang="pug">
.dashboard
  el-container
    el-header.header(height="auto")
      dashboard-header
      dashboard-menu

    el-main
      nuxt
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>

<style lang="scss" scoped>
.header {
  padding: 0;
}
</style>
