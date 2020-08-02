<template lang="pug">
.dashboard-header
  .flex
    .branding
      h1.platform-name Hệ thống thông tin về đầu tư sử dụng vốn nhà nước

    .toolbar
      el-button(plain circle type="text")
        el-badge(is-dot)
          i.el-icon-bell
      el-avatar(src="https://images.vietnamdaily.net.vn/zoom/800/uploaded/vothuan/2020_01_04/4-nu-co-dong-vien-bong-da-dep-hon-hotgirl-mac-do-cuc-nong-bong-hinh-2.jpg")
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  padding: .5em 1em;
  .branding {
    flex: 1;
    h1.platform-name {
      margin: 0;
      font-size: 1.25em;
      text-transform: uppercase;
    }
  }
}
.toolbar {
  display: flex;
  justify-content: flex-end;
  > *:not(:last-child) {
    margin-right: 1em;
  }
}
</style>
