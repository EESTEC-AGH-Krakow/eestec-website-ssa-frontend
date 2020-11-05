<template>
    <div>
        <RowContent :key="previousEdition.id" :photo="previousEdition.image" :reverse="previousEdition.id % 2 === 0" v-for="previousEdition in previousEditions">
            <h3 class="align-self-start">{{previousEdition.title}}</h3>
            <b class="align-self-start">{{previousEdition.year}}</b>
            <br/>
            <article class="text-justify">{{previousEdition.description}}</article>

        </RowContent>
    </div>
</template>

<script>
    import PREVIOUS_EDITIONS from '../mocks/previous-editions.js'
    import RowContent from '../components/RowContent'

  export default {
    name: 'PreviousEditions',
      data () {
          return {
              previousEditions: PREVIOUS_EDITIONS
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
