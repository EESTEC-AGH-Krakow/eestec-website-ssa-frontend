<template>
    <b-navbar-nav>
        <b-nav-item class="text-uppercase" :to="{ name: 'home' }">strona główna</b-nav-item>
        <b-nav-item class="text-uppercase" :to="{ name: 'about' }">o nas</b-nav-item>
        <b-nav-item class="text-uppercase" :to="{ name: 'timetable' }">harmonogram</b-nav-item>
        <b-nav-item class="text-uppercase" :to="{ name: 'speakers' }">prelegenci</b-nav-item>
        <b-nav-item class="text-uppercase" :to="{ name: 'partners' }">partnerzy</b-nav-item>
        <b-nav-item class="text-uppercase" :to="{ name: 'previousEditions' }">poprzednie edycje</b-nav-item>
        <b-nav-item class="text-uppercase mb-2" href="" target="_blank">
           <span class="text-secondary font-weight-bold d-lg-none">
               Zapisy
            </span>
        </b-nav-item>
    </b-navbar-nav>
</template>

<script>
  export default {
    name: 'HeaderNav',
    data () {
      return {}
    },
    components: {},
    methods: {},
    computed: {},
    watch: {},
  }
</script>

<style scoped lang="scss">
    .text-uppercase {
        @extend .d-flex, .align-items-center, .justify-content-center, .text-center;
    }
</style>
