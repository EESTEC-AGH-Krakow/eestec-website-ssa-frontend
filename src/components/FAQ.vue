<template>
    <b-row class="bg-blue-dark text-white" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-4">Najczęściej zadawane pytania</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <b-col :key="object.id" class="my-2 my-sm-4 d-flex" cols="12" sm="6" v-for="object in faq">
                    <div class="flex-fill d-flex flex-column align-items-stretch">
                        <b-button class="h6 text-center" size="sm" v-b-toggle="`collapse${object.id}`">{{ object.question }}</b-button>
                        <b-collapse :id="`collapse${object.id}`" class="text-center secondary-font" tag="p">
                            {{ object.answer }}
                        </b-collapse>
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
