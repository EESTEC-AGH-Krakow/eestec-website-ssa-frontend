<template>
    <b-row no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-4">O projekcie</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <p class="text-justify mb-4 mb-sm-5">
                To już trzecia edycja hackatonu, którego nazwa bezpośrednio nawiązuje do z Ragnaroku- wielkiej bitwy pomiędzy bogami, a olbrzymami, w wyniku której siedzibę bogów trawi ogień, gwiazdy
                gasną, a z toni wyłania się nowy świat bez przemocy i wojen.
            </p>

            <h3>Chcesz stworzyć z nami Nowy Świat?</h3>
            <p class="text-justify mb-4 mb-sm-5">
                U nas walka odbywa się z wykorzystaniem siły linijek kodu, które napiszesz razem z Twoim zespołem. Na 24 godziny Krakowski Park Technologiczny zamieni się w arenę z atmosferą
                sprzyjającą niemal boskim, twórczym siłom. Razem z naszymi partnerami zadbaliśmy o to, by było o co walczyć, a obecni podczas wydarzenia mentorzy będą gotowi znaleźć wyjaśnienie na
                każdą wątpliwość.
            </p>

            <p class="text-justify mb-4 mb-sm-5">
                Zapisy trwają od 1 do 22 marca, w razie jakichkolwiek pytań zapraszamy na stronę wydarzenia lub do kontaktu mailowego.
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
                <b-carousel-slide :img-src="image" :key="`image-${images.indexOf(image)}`" v-for="image in images"></b-carousel-slide>
            </b-carousel>
        </b-col>
    </b-row>
</template>

<script>
  export default {
    name: 'AboutProject',
    data () {
      return {
        slide: 0,
        sliding: null,
        images: [...Array(10).keys()].map(x => require(`@/assets/images/slider/${x + 1}.jpg`)),
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
    /*.carousel-inner {
        @include media-breakpoint-up(sm) {
            @include aspect-ratio(16, 9, carousel-item);
        }
        @include aspect-ratio(1, 1, carousel-item);
    }*/
    .carousel-item {
        img {
            height: 10rem !important;
        }
    }
</style>
