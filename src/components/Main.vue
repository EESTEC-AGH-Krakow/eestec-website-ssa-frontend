<template>
    <div :style="{backgroundImage: 'url(' + require('@/assets/images/header-bg.jpg') + ')'}" class="background d-flex flex-column">
        <b-row class="justify-content-center align-items-center flex-fill" no-gutters>
            <b-col cols="12">
                <div class="d-flex flex-column align-items-center">
                    <img :src="require('@/assets/images/header-logo.png')" alt="Hacknarök" class="img-fluid"/>
                    <h1 class="text-white text-center mt-4 primary-font whereabouts">Krakowski Park Technologiczny<br/>23.03.19r.</h1>
                </div>
            </b-col>
        </b-row>
        <b-row class="justify-content-center align-items-end position-absolute" no-gutters v-if="applicable">
            <b-col class="mb-5 d-flex justify-content-center" cols="12">
                <b-button class="apply">APLIKUJ</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				applicable: false,
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

        .whereabouts {
            font-size: 2rem;
        }

        .position-absolute {
            bottom: 0;
            left: 0;
            right: 0;

            .apply {
                font-size: 1.5rem;
            }
        }
    }
</style>
