<template>
    <b-row class="flex-column flex-md-row">
        <b-col offset="3" cols="6" offset-lg="0" lg="3" xl="2" class="d-flex justify-content-center justify-content-lg-start">
            <img class="img-fluid m-2" :src="require('@/assets/images/eestec_logo.png')"/>
        </b-col>
        <b-col cols="12" lg="7" xl="8" class="d-flex justify-content-center">
            <b-nav class="align-items-center">
                <b-nav-item>KONTAKT</b-nav-item>
                <b-nav-item>REGULAMIN</b-nav-item>
            </b-nav>
        </b-col>
        <b-col cols="12" lg="2" class="d-flex align-items-lg-center justify-content-center">
            <a href="https://www.linkedin.com/showcase/soft-skills-academy-poland/">
                <font-awesome-icon :icon="['fab','linkedin']" size="lg" class="m-1" />
            </a>
            <a href="https://www.facebook.com/SoftSkillsAcademy/">
                <font-awesome-icon :icon="['fab','facebook-square']" size="lg" class="m-1"/>
            </a>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "Footer",
        components: {},
        methods: {},
        watch: {},
        computed: {}
    }
</script>

<style scoped lang="scss">

</style>