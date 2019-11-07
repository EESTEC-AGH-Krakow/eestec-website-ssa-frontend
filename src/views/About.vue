<template>
    <div>
        <RowContent :key="element.id" :photo="element.image" :reverse="element.id % 2 === 0" v-for="element in about">
            <h3 class="align-self-start ">{{element.title}}</h3>
            <p>{{element.description}}</p>
        </RowContent>
    </div>
</template>

<script>
    import RowContent from '../components/RowContent'
    import ABOUT from '../mocks/about.js'

  export default {
    name: 'About',
      data () {
          return {
              about: ABOUT
          }
      },
      components: {
          RowContent
      },
    methods: {},
    computed: {},
    watch: {},
  }
</script>

<style scoped lang="scss">

</style>
