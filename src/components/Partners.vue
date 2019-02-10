<template>
    <b-row class="pb-5" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-5 display-4">Partnerzy</h1>
        </b-col>
        <b-col lg="8" md="10" offset="1" offset-lg="2">
            <b-row>
                <b-col :key="partner.id" class="my-4" cols="4" lg="3" v-for="partner in partners">
                    <img :alt="partner.name" :src="partner.image" class="img-fluid"/>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
	export default {
		name: 'Partners',
		data () {
			return {
				partners: [
					{
						id: 1,
						name: 'AGH',
						image: require('@/assets/images/agh_logo.jpg'),
					},
					{
						id: 2,
						name: 'AGH',
						image: require('@/assets/images/agh_logo.jpg'),
					},
					{
						id: 3,
						name: 'AGH',
						image: require('@/assets/images/agh_logo.jpg'),
					},
					{
						id: 4,
						name: 'AGH',
						image: require('@/assets/images/agh_logo.jpg'),
					},
					{
						id: 5,
						name: 'AGH',
						image: require('@/assets/images/agh_logo.jpg'),
					},
					{
						id: 6,
						name: 'AGH',
						image: require('@/assets/images/agh_logo.jpg'),
					},
					{
						id: 7,
						name: 'AGH',
						image: require('@/assets/images/agh_logo.jpg'),
					},
				],
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
