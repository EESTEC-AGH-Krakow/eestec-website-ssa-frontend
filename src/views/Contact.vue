<template>
    <div>
        <RowContent :photo="'https://www.placecage.com/c/1920/1080'">
            <h1>Nagłówek</h1>
            <p>paragraf z tekstem o SSA</p>
        </RowContent>
        <RowContent :photo="'https://www.placecage.com/c/1920/1080'" reverse>
            <h1>Nagłówek</h1>
            <p>paragraf z tekstem o SSA</p>
        </RowContent>
        <RowContent :photo="'https://www.placecage.com/c/1920/1080'">
            <h1>Nagłówek</h1>
            <p>paragraf z tekstem o SSA</p>
        </RowContent>
        <RowContent :photo="'https://www.placecage.com/c/1920/1080'" reverse>
            <h1>Nagłówek</h1>
            <p>paragraf z tekstem o SSA</p>
        </RowContent>
    </div>
</template>

<script>
    import RowContent from '../components/RowContent'
  export default {
    name: 'Contact',
    data () {
      return {}
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
