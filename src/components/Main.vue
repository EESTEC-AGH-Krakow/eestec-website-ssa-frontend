<template>
    <div :style="{backgroundImage: `url(${require('@/assets/images/header-bg.jpg')})`}" class="background d-flex flex-column position-relative">
        <b-row class="justify-content-center align-items-center flex-fill" no-gutters>
            <b-col class="mx-auto" cols="10" lg="12" md="8">
                <div class="d-flex flex-column align-items-center">
                    <img :src="require('@/assets/images/header-logo.png')" alt="Hacknarök" class="img-fluid"/>
                    <h1 class="text-white text-center mt-4 primary-font">Krakowski Park Technologiczny<br/>6-7 kwietnia</h1>
                </div>
            </b-col>
        </b-row>
        <b-row class="justify-content-center align-items-end position-absolute" no-gutters v-if="applicable">
            <b-col class="mb-2 mb-lg-5 d-flex justify-content-center" cols="12">
                <b-button :to="applicationForm" class="apply" target="_blank">APLIKUJ</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    name: 'Main',
    data () {
      return {
        applicable: true,
        applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSfTQTz3Q6LM3ahQNiyipqFRX4vcOuxH8xUdVVXKuAAc5JLvvw/viewform',
      }
    },
  }
</script>

<style scoped lang="scss">
    .background {
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        .position-absolute {
            bottom: 0;
            left: 0;
            right: 0;

            .apply {
                @include media-breakpoint-up(md) {
                    font-size: 1.5rem;
                }
            }
        }
    }
</style>
