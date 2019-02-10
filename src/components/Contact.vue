<template>
    <b-row class="bg-black text-white" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-5 display-4">Kontakt</h1>
        </b-col>
        <b-col cols="10" lg="8" offset="1" offset-lg="2">
            <b-row>
                <b-col class="d-flex" cols="6">
                    <b-link class="text-white" href="mailto:hacknarok@eestec.pl" target="_blank">
                        <font-awesome-icon icon="envelope"></font-awesome-icon>
                        <span class="font-weight-bold ml-2">hacknarok@eestec.pl</span>
                    </b-link>
                </b-col>
                <b-col class="d-flex" cols="6">
                    <b-link class="text-white ml-auto" href="https://www.facebook.com/EESTEC.AGH.Krakow/" target="_blank">
                        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
                        <span class="font-weight-bold ml-2">EESTEC AGH KRAKÓW</span>
                    </b-link>
                </b-col>
            </b-row>
            <b-row class="mt-4">
                <b-col class="d-flex" cols="6">
                    <b-link :href="`${publicPath}regulamin.pdf`" class="text-white" target="_blank">
                        <span class="font-weight-bold">regulamin</span>
                    </b-link>
                </b-col>
                <b-col class="d-flex" cols="6">
                    <span class="font-weight-bold ml-auto"><span class="copyright">&#169;</span> EESTEC AGH Kraków</span>
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
