<template>
    <b-row no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-5 display-4">O projekcie</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <p class="text-justify mb-5">
                To już trzecia edycja hackatonu, którego nazwa bezpośrednio nawiązuje do z Ragnaroku- wielkiej bitwy pomiędzy bogami, a olbrzymami, w wyniku której siedzibę bogów trawi ogień, gwiazdy
                gasną, a z toni wyłania się nowy świat bez przemocy i wojen.
            </p>

            <h3>Chcesz stworzyć z nami Nowy Świat?</h3>
            <p class="text-justify mb-5">
                U nas walka odbywa się z wykorzystaniem siły linijek kodu, które napiszesz razem z Twoim zespołem. Na 24 godziny Krakowski Park Technologiczny zamieni się w arenę z atmosferą
                sprzyjającą niemal boskim, twórczym siłom. Razem z naszymi partnerami zadbaliśmy o to, by było o co walczyć, a obecni podczas wydarzenia mentorzy będą gotowi znaleźć wyjaśnienie na
                każdą wątpliwość.
            </p>

            <p class="text-justify mb-5">
                Zapisy trwają od 1go do 22go marca, w razie jakichkolwiek pytań zapraszamy na stronę wydarzenia lub do kontaktu mailowego.
                Widzimy się już 6 kwietnia w Krakowskim Parku Technologicznym!
            </p>
        </b-col>
        <b-col cols="12">
            <b-carousel :interval="4000"
                        @sliding-end="onSlideEnd"
                        @sliding-start="onSlideStart"
                        controls
                        id="carousel"
                        indicators
                        v-model="slide">

                <!-- Text slides with image -->
                <b-carousel-slide caption="First slide"
                                  img-src="https://picsum.photos/1024/480/?image=52"
                                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <img alt="image slot" class="d-block img-fluid w-100" height="480" slot="img"
                         src="https://picsum.photos/1024/480/?image=55" width="1024">
                </b-carousel-slide>
            </b-carousel>
        </b-col>
    </b-row>
</template>

<script>
	export default {
		name: 'About',
		data () {
			return {
				slide: 0,
				sliding: null,
			}
		},
		methods: {
			onSlideStart (slide) {
				this.sliding = true
			},
			onSlideEnd (slide) {
				this.sliding = false
			},
		},
	}
</script>

<style lang="scss" scoped>

</style>
