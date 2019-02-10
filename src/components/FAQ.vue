<template>
    <b-row class="bg-blue-dark text-white" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-5 display-4">Najczęstsze pytania</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <b-col :key="object.id" class="my-4 d-flex" cols="12" sm="6" v-for="object in faq">
                    <div class="mx-auto d-flex flex-column">
                        <h4 class="text-center">{{ object.question }}</h4>
                        <p class="text-center">{{ object.answer }}</p>
                    </div>
                </b-col>
            </b-row>
        </b-col>
        <b-col class="bg-white d-flex" cols="12">
            <img alt="mountains" class="img-fluid w-100" src="@/assets/images/mountains-bottom.png"/>
        </b-col>
    </b-row>
</template>

<script>
  import FAQ from '../mock-faq'

  export default {
    name: 'FAQ',
    data () {
      return {
        faq: FAQ,
      }
    },
  }
</script>

<style lang="scss" scoped>
    .img-fluid {
        transform: rotate(180deg);
    }
</style>
