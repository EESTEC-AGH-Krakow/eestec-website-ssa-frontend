<template>
    <div :style="{backgroundImage: 'url(' + require('@/assets/images/header-bg.jpg') + ')'}" class="background d-flex flex-column">
        <b-row no-gutters class="justify-content-center align-items-center flex-fill">
            <b-col cols="12">
                <div class="d-flex flex-column align-items-center">
                    <img class="img-fluid" :src="require('@/assets/images/header-logo.png')" alt="Hacknarök"/>
                    <h1 class="text-white mt-4 primary-font">23.03.19r. - Krakowski Park Technologiczny</h1>
                </div>
            </b-col>
        </b-row>
        <b-row no-gutters class="justify-content-center align-items-end">
            <b-col cols="12">
                <b-button>APLIKUJ</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
	export default {
		name: 'HelloWorld',
	}
</script>

<style scoped lang="scss">
    .background {
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>
