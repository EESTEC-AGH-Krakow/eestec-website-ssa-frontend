<template>
    <b-row class="pb-5" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-4">Partnerzy</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <b-col :key="partner.id" class="my-4 d-flex align-items-center" cols="6" lg="3" sm="4" v-for="partner in partners">
                    <b-link :href="partner.href" target="_blank">
                        <img :alt="partner.name" :src="partner.image" class="img-fluid"/>
                    </b-link>
                </b-col>
            </b-row>
        </b-col>

        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-4">Partnerzy medialni</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <b-col :key="partner.id" class="my-4 d-flex align-items-center" cols="6" lg="3" sm="4" v-for="partner in partnersSocial">
                    <b-link :href="partner.href" target="_blank">
                        <img :alt="partner.name" :src="partner.image" class="img-fluid"/>
                    </b-link>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
  import PARTNERS from '../mock-partners'
  import PARTNERS_SOCIAL from '../mock-partners-social'

  export default {
		name: 'Partners',
		data () {
			return {
              partners: PARTNERS,
              partnersSocial: PARTNERS_SOCIAL,
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
