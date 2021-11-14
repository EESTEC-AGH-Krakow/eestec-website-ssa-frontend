<template>
  <div>
    <b-row no-gutters class="baner position-relative align-items-center"
           :style="{ 'background-image': `url(${require('@/assets/images/home/ssa12_baner.jpg')})`}">
      <b-col offset="1" cols="6" class="d-flex flex-column">
        <h1 class="text-white text-uppercase">
          <span class="font-weight-bold display-4">12. edycja</span>
          <br/>
          darmowych warsztatów
          <br/>
          z umiejętności miękkich
        </h1>
        <span class="text-white">6 - 12 grudnia 2021 r. <br/> Akademia Górniczo Hutnicza w Krakowie </span>
        <b-button class="mt-2 mr-auto px-4 py-2 text-uppercase"
        href="https://forms.gle/mRgEjxCq6FqFncFN7"
        target="_blank">Sign up
        </b-button>
      </b-col>
    </b-row>
    <b-row no-gutters class="flex-wrap-reverse flex-lg-nowrap align-items-stretch py-5">
      <b-col offset="2" cols="8">
        <b-row class="py-5">
          <b-col cols="12" class="pb-5 text-center text-justify">
            <h2>{{home.welcome.title}}</h2>
          </b-col>
          <b-col md="12" lg="6" class="order-1 order-lg-1 d-flex align-items-center px-4">
            <SVGSSAFull class="ssa-logo flex-fill"></SVGSSAFull>
          </b-col>
          <b-col md="12" lg="6" class="order-2 order-lg-2 d-flex flex-column py-3 py-lg-0">
            <span class="text-justify" v-html="home.welcome.description"></span>
            <b-button :to="{ name: 'about' }" class="mt-2 ml-auto px-4 py-2 text-uppercase">Dowiedz
              się więcej
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <RowContent :photo="home.aboutUs.image">
      <h3 class="align-self-start mb-4">{{ home.aboutUs.title }}</h3>
      <p class="text-justify">{{ home.aboutUs.description }}</p>
    </RowContent>
    <RowContent :photo="home.trainings.image" reverse>
      <h3 class="align-self-start mb-4">{{ home.trainings.title }}</h3>
      <span class="align-self-start text-justify" v-html="home.trainings.description"></span>
      <b-button :to="{ name: 'timetable' }"
                class="mt-2 mr-auto px-4 py-2 text-uppercase bg-primary">Zobacz harmonogram
      </b-button>
    </RowContent>
    <RowContent :photo="home.speakers.image">
      <h3 class="align-self-start mb-4">{{ home.speakers.title }}</h3>
      <p class="align-self-start text-justify pb-3"> {{ home.speakers.description }}</p>
      <b-button :to="{ name: 'speakers' }" class="mt-2 mr-auto px-4 py-2 text-uppercase bg-primary">
        Dowiedz się więcej o naszych prelegentach
      </b-button>
    </RowContent>
    <RowContent :photo="home.partners.image" reverse>
      <h3 class="align-self-start mb-4">{{ home.partners.title }}</h3>
      <p class="align-self-start text-justify pb-3"> {{ home.partners.description }}</p>
      <b-button :to="{ name: 'partners' }" class="mt-2 mr-auto px-4 py-2 text-uppercase bg-primary">
        Dowiedz się więcej
      </b-button>
    </RowContent>
  </div>
</template>

<script>
import SVGSSAFull from '@/assets/images/ssa_full.svg';
import RowContent from '../components/RowContent';
import HOME from '../mocks/home.js'

export default {
  name: 'home',
  data() {
    return {
      home: HOME
    };
  },
  components: {
    SVGSSAFull,
    RowContent,
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.baner {
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:after {
    content: "";
    @extend .position-absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1) 50%);
  }

  > div {
    z-index: 3;
  }
}

</style>
