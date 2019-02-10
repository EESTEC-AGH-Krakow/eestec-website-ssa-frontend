<template>
    <b-row class="pb-5" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-4">Partnerzy</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <b-row>
                <b-col :key="partner.id" class="my-4" cols="6" lg="3" sm="4" v-for="partner in partners">
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
