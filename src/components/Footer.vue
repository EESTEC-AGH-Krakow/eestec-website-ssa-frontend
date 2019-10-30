<template>
    <b-row no-gutters class="flex-column flex-md-row">
        <b-col offset="3" cols="6" offset-lg="0" lg="3" xl="2" class="d-flex justify-content-center">
            <img class="img-fluid" :src="require('@/assets/images/eestec_logo.png')"/>
        </b-col>
        <b-col cols="12" lg="7" xl="8" class="d-flex justify-content-center">
            <b-nav class="align-items-center">
                <b-nav-item>KONTAKT</b-nav-item>
                <b-nav-item>REGULAMIN</b-nav-item>
            </b-nav>
        </b-col>
        <b-col cols="12" lg="2" class="d-flex align-items-lg-center justify-content-center mt-3 mb-3">
            <a :href=linkedinUrl>
                <font-awesome-icon :icon="['fab', 'linkedin']" size="4x" />
            </a>
            <a :href=facebookUrl class="ml-3">
                <font-awesome-icon :icon="['fab', 'facebook-square']" size="4x" />
            </a>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "Footer",
        data: function () {
          return {
              linkedinUrl: "https://www.linkedin.com/showcase/soft-skills-academy-poland/",
              facebookUrl: "https://www.facebook.com/SoftSkillsAcademy/"
          }
        },
        components: {},
        methods: {},
        watch: {},
        computed: {}
    }
</script>

<style scoped lang="scss">

    .img-fluid {
        margin-top: 2em;
        margin-bottom: 2em;
        max-width: 50%;
    }
    .fa-facebook, .fa-facebook-square {
        color: #3b5998
    }
    .fa-linkedin, .fa-linkedin-square {
        color: #007bb6
    }

</style>
