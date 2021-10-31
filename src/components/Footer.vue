<template>
    <b-row no-gutters>
        <b-col cols="12">
            <b-navbar type="light">
                <b-row no-gutters class="flex-fill flex-column align-items-center flex-sm-row align-items-sm-stretch">
                    <b-col cols="2" class="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <b-navbar-brand :href="eestecUrl" target="_blank" class="ml-3 ml-sm-0">
                            <img class="nav-logo" :src="require('@/assets/images/eestec_logo.png')"/>
                        </b-navbar-brand>
                    </b-col>
                    <b-col cols="8" class="d-flex justify-content-center align-items-center p-4 p-sm-0">
                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav class="mx-auto">
                                <b-nav-item class="text-uppercase" :to="{ name: 'contact' }">kontakt</b-nav-item>
                                <b-nav-item  :href="`${publicPath}regulamin.pdf`">REGULAMIN</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-col>
                    <b-col cols="2" class="d-flex justify-content-center justify-content-sm-end align-items-center">
                        <a :href="linkedinUrl" target="_blank">
                            <font-awesome-icon :icon="['fab', 'linkedin']" size="3x"/>
                        </a>
                        <a :href="facebookUrl" target="_blank" class="ml-3">
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
