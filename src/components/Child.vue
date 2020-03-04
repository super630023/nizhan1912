<template>
  <div>
    child-{{myname}}--{{mytitle}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      myname: 'child定义的name'
    }
  },
  props: ['mytitle']
}
</script>
<style scoped>
  div{
    background: blue;
  }
</style>
