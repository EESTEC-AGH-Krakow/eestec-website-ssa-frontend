<template>
    <div>
        <RowContent :key="contact.id" :photo="contact.image" :reverse="contact.id % 2 === 0" v-for="contact in contacts">
            <span v-html="contact.description">
            </span>
        </RowContent>
    </div>
</template>

<script>
    import RowContent from '../components/RowContent'
    import CONTACTS from '../mocks/contacts.js'
  export default {
    name: 'Contact',
    data () {
      return {
         contacts: CONTACTS
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
    a {
        color: black;
    }
</style>
