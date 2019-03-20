<template>
    <b-row class="pb-5" no-gutters>
        <b-modal :header-class="['py-2', 'd-flex', 'align-items-center', 'justify-content-between']" centered footer-class="py-2" id="partner" lazy size="lg">
            <template slot="modal-title">
                <h2 class="secondary-font text-uppercase m-0">{{ currentPartner.name }}</h2>
            </template>
            <p class="secondary-font m-0">
                {{ currentPartner.text }}
            </p>
            <template slot="modal-footer">
                <div class="d-flex justify-content-end align-items-center">
                    <b-link :to="currentPartner.href" class="secondary-font" target="_blank">Więcej</b-link>
                </div>
            </template>
        </b-modal>
        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-3">Partnerzy</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <Partner :partner="partners.first" @choose-partner="choosePartner($event)"/>
            </b-row>
        </b-col>

        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <Partner :key="index" :partner="partner" @choose-partner="choosePartner($event)" v-for="(partner, index) in partners.second"/>
            </b-row>
        </b-col>

        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <Partner :key="index" :partner="partner" @choose-partner="choosePartner($event)" v-for="(partner, index) in partners.third"/>
            </b-row>
        </b-col>

        <!--<b-col class="mx-auto" cols="11" lg="8" md="10">-->
        <!--<b-row>-->
        <!--<Partner :key="index" :partner="partner" v-for="(partner, index) in partners.rest"/>-->
        <!--</b-row>-->
        <!--</b-col>-->

        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-3">Partnerzy medialni</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <b-col :key="partner.id" class="my-4 d-flex align-items-center" cols="6" lg="3" sm="4" v-for="partner in partnersSocial">
                    <b-link :href="partner.href" target="_blank" class="flex-fill d-flex align-items-center">
                        <img :alt="partner.name" :src="partner.image" class="img-fluid mx-auto"/>
                    </b-link>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
  import Partner from './Partner'
  import PARTNERS from '../mock-partners'
  import PARTNERS_SOCIAL from '../mock-partners-social'

  export default {
    name: 'Partners',
    data () {
      return {
        partners: PARTNERS,
        partnersSocial: PARTNERS_SOCIAL,
        currentPartner: {
          image: '',
          href: '',
          name: '',
          text: '',
        },
      }
    },
    components: {
      Partner,
    },
    methods: {
      choosePartner (partner) {
        this.currentPartner = partner
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
