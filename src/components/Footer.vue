<template>
    <b-row no-gutters>
        <b-col cols="12">
            <b-navbar type="light">
                <b-row no-gutters class="flex-fill">
                    <b-col cols="2" class="d-flex align-items-center">
                        <b-navbar-brand :href="eestecUrl" target="_blank"><img class="img-fluid nav-logo" :src="require('@/assets/images/eestec_logo.png')"/></b-navbar-brand>
                    </b-col>
                    <b-col cols="8" class="d-flex justify-content-center align-items-center">
                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav class="mx-auto">
                                <b-nav-item class="text-uppercase" :to="{ name: 'contact' }">kontakt</b-nav-item>
                                <b-nav-item class="text-uppercase" :href="`${publicPath}regulamin.pdf`">regulamin</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-col>
                    <b-col cols="2" class="d-flex justify-content-end align-items-center">
                        <a :href="linkedinUrl">
                            <font-awesome-icon :icon="['fab', 'linkedin']" size="3x"/>
                        </a>
                        <a :href="facebookUrl" class="ml-3">
                            <font-awesome-icon :icon="['fab', 'facebook-square']" size="3x"/>
                        </a>
                    </b-col>
                </b-row>

                <b-navbar-toggle target="nav-collapse"/>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
  export default {
    name: 'Footer',
    data: function () {
      return {
        linkedinUrl: 'https://www.linkedin.com/showcase/soft-skills-academy-poland/',
        facebookUrl: 'https://www.facebook.com/SoftSkillsAcademy/',
        eestecUrl: 'http://eestec.agh.edu.pl/',
        publicPath: process.env.BASE_URL,
      }
    },
    components: {},
    methods: {},
    watch: {},
    computed: {},
  }
</script>

<style scoped lang="scss">

    .fa-facebook, .fa-facebook-square {
        color: #3B5998
    }

    .fa-linkedin, .fa-linkedin-square {
        color: #007BB6
    }

</style>
