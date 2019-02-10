<template>
    <b-row class="bg-black text-white" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-5 display-4">Kontakt</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <b-col class="d-flex" cols="12" sm="6">
                    <b-link class="text-white d-flex align-items-center" href="mailto:hacknarok@eestec.pl" target="_blank">
                        <font-awesome-icon icon="envelope"></font-awesome-icon>
                        <span class="font-weight-bold ml-2">hacknarok@eestec.pl</span>
                    </b-link>
                </b-col>
                <b-col class="d-flex mt-2 mt-sm-0" cols="12" sm="6">
                    <b-link class="text-white ml-sm-auto d-flex align-items-center" href="https://www.facebook.com/EESTEC.AGH.Krakow/" target="_blank">
                        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
                        <span class="font-weight-bold ml-2">EESTEC AGH KRAKÓW</span>
                    </b-link>
                </b-col>
            </b-row>
            <b-row class="mt-sm-4">
                <b-col class="d-flex mt-2 mt-sm-0" cols="12" sm="6">
                    <b-link :href="`${publicPath}regulamin.pdf`" class="text-white d-flex align-items-end" target="_blank">
                        <span class="font-weight-bold">regulamin</span>
                    </b-link>
                </b-col>
                <b-col class="d-flex align-items-end mt-2 mt-sm-0" cols="12" sm="6">
                    <span class="font-weight-bold ml-sm-auto"><span class="copyright">&#169;</span> EESTEC AGH Kraków</span>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
	// import regulations from '@/assets/regulamin.pdf'

	export default {
		name: 'Contact',
		data () {
			return {
				publicPath: process.env.BASE_URL,
			}
		},
	}
</script>

<style lang="scss" scoped>
    .copyright {
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
</style>
