<template>
     <b-row no-gutters>
        <!-- <b-row no-gutters class="d-flex justify-content-center">
            <b-col cols="12" class="mt-5 mb-3">
                <h2 class="text-center text-uppercase font-weight-normal">partner główny</h2>
            </b-col>
            <Partner
                    :key="partner.id"
                    :partner="partner"
                    v-for="partner in filteredPartners('main')"
            /> 
        </b-row> -->
        <b-row no-gutters class="d-flex justify-content-center">
            <b-col cols="12" class="mt-5">
                <h2 class="text-center text-uppercase font-weight-normal">partnerzy</h2>
            </b-col>
            <Partner
                    :key="partner.id"
                    :partner="partner"
                    v-for="partner in filteredPartners('regular')"
            />
        </b-row>
        <b-row no-gutters class="d-flex justify-content-center">
            <b-col cols="12" class="mt-5">
                <h2 class="text-center text-uppercase font-weight-normal">partnerzy medialny</h2>
            </b-col>
            <Partner
                    :key="partner.id"
                    :partner="partner"
                    v-for="partner in filteredPartners('media')"
            />
        </b-row>
    </b-row>
</template>

<script>
    import Partner from '../components/Partner.vue'
    import PARTNERS from '../mocks/partners.js'

    export default {
        name: 'Partners',
        data() {
            return {
                partners: PARTNERS
            }
        },
        components: {
            Partner
        },
        methods: {
            filteredPartners(filter) {
                return this.partners.filter(partner => partner.type === filter)
            }
        },
        computed: {},
        watch: {},
    }
</script>

<style scoped lang="scss">

</style>
