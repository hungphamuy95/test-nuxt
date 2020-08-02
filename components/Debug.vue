<template lang="pug">
pre.debug
  code(v-text="JSON.stringify(data, null, 2)")
</template>

<script>
export default {
  props: {
    data: {
      type: null,
      required: true
    }
  }
}
</script>
