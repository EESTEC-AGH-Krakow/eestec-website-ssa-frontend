<template>
    <b-row no-gutters>
        header
    </b-row>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        links: [
          {
            name: 'start',
            href: {
              name: 'home'
            },
          },
          {
            name: 'o nas',
            href: {
              name: 'about'
            },
          },
          {
            name: 'kontakt',
            href: {
              name: 'contact'
            },
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
