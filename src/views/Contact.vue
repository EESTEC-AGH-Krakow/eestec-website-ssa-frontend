<template>
    <div>
<!--        <RowContent photo="https://www.placecage.com/1920/1080">-->
        <RowContent :key="contact.id" :photo="contact.image" :class="{'contact.id % 2 == 0' : reverse}" v-for="contact in contacts">
            <span v-html="contact.description">
<!--        <RowContent :photo="require('@/assets/images/contact/ssa.png')">-->
<!--            <span>-->
<!--                <h5>Masz pytania?</h5>-->
<!--                Napisz do nas!<br/>-->
<!--                📧 kontakt@softskillsacademy.pl<br/>-->
<!--                <br/>-->
<!--                <br/>-->
<!--                <h5>Współpraca</h5>-->
<!--                Podoba ci się idea wydarzenia?<br/>-->
<!--                Chciałbyś z nami współpracować?<br/>-->
<!--                Skontaktuj się z nami!<br/>-->
<!--                📧 wspolpraca@softskillsacademy.pl-->
<!--            </span>-->
            </span>
        </RowContent>
<!--        <RowContent photo="https://www.placecage.com/1920/1080" reverse>-->
        <RowContent :photo="require('@/assets/images/contact/eestec.png')" reverse>
            <span>
                <h5>Chcesz współpracować z nami przy innych wydarzeniach?</h5>
                Nie zwlekaj i napisz do nas!<br/>
                📧 board@eestec.pl<br/>
                🌐 <a href="https://www.eestec.pl">www.eestec.pl</a>
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
