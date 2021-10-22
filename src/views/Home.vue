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
         

<!--        <b-button class="mt-2 mr-auto px-4 py-2 text-uppercase"-->
<!--                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0KDgpu6-cW1n7I7lWZBc1ZYbZ10ElP680KFYlQrPAUBUu4w/viewform"-->
<!--                  target="_blank">Sign up-->
<!--        </b-button>-->
      </b-col>
    </b-row>
    <b-row no-gutters class="flex-wrap-reverse flex-lg-nowrap align-items-stretch py-5">
      <b-col offset="2" cols="8">
        <b-row class="py-5">
          <b-col cols="12" class="pb-5 text-center text-justify">
            <h2>Największy w Małopolsce cykl darmowych szkoleń z zakresu umiejętności miękkich!</h2>
          </b-col>
          <b-col md="12" lg="6" class="order-1 order-lg-1 d-flex align-items-center px-4">
            <SVGSSAFull class="ssa-logo flex-fill"></SVGSSAFull>
          </b-col>
          <b-col md="12" lg="6" class="order-2 order-lg-2 d-flex flex-column py-3 py-lg-0">
            <p class="text-justify">
             6 grudnia odbędzie się już 12 edycja największych warsztatów 
             umiejętności w Małopolsce. Podczas tej wyjątkowej edycji weźmiesz 
             udział w warsztatach i wykładach, które ułatwią ci podejmowanie 
             dalszych kroków w karierze jak i w życiu prywatnym. Podczas 
             wydarzenia poruszone zostaną tematy z zakresu komunikacji, 
             autoprezentacji czy psychologii. Jest to idealna okazja i czas do 
             zainwestowania w siebie. Szkolenia są prowadzone przez 
             doświadczonych trenerów, a uczestnicy warsztatów otrzymają 
             certyfikat uczestnictwa.
            </p>
            <span>A wszystko to zupełnie za darmo!</span>
            <b-button :to="{ name: 'about' }" class="mt-2 ml-auto px-4 py-2 text-uppercase">Dowiedz się więcej
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <RowContent :photo="require('@/assets/images/home/um-miekkie.jpg')">
      <h3 class="align-self-start mb-4">Umiejętności miękkie</h3>
      <p class="text-justify">
        Nasze wydarzenie skupia się&nbsp;wokół tematyki umiejętności miękkich, czyli wszystkich tych które potrzebne
        są&nbsp;nam&nbsp;do&nbsp;skutecznej interakcji z&nbsp;innymi ludźmi a&nbsp;także do&nbsp;swobodnego wyrażania
        siebie. Korzystamy z&nbsp;nich nieświadomie w&nbsp;każdej minucie naszego życia – na&nbsp;studiach,
        w&nbsp;pracy, podczas spotkań ze&nbsp;znajomymi czy&nbsp;rodziną, a&nbsp;także podczas nauki
        czy&nbsp;organizacji dnia. To&nbsp;“pierwiastek ludzki”, niezbędny w&nbsp;każdym procesie, niemożliwy
        do&nbsp;zastąpienia przez żadną maszynę czy&nbsp;program.
      </p>
    </RowContent>
    <RowContent :photo="require('@/assets/images/home/ssa12_szkolenia.jpg')" reverse>
      <h3 class="align-self-start mb-4">Szkolenia</h3>
      <p>
        Na dwunastą edycję wydarzenia przypada 7 dni szkoleń, podczas których poruszymy tematy takie jak:
      </p>
      <ul class="align-self-start">
        <li>personal branding</li>
        <li>pewność siebie</li>
        <li>negocjacje</li>
        <li>radzenie sobie ze stresem</li>
        <li>sztuka prezentacji</li>
        <li>skuteczna komunikacja</li>
        <li>i wiele innych…</li>
      </ul>
      <b-button :to="{ name: 'timetable' }" class="mt-2 mr-auto px-4 py-2 text-uppercase bg-primary">Zobacz
        harmonogram
      </b-button>
    </RowContent>
    <RowContent :photo="require('@/assets/images/home/prelegenci.jpg')">
      <h3 class="align-self-start mb-4">Prelegenci</h3>
      <p class="text-justify">
        Do współpracy przy Soft Skills Academy zapraszamy ludzi, którzy umiejętności miękkie mają opanowane
        do&nbsp;perfekcji i&nbsp;chętnie dzielą się&nbsp;zdobytą wiedzą. Zarówno profesjonaliści, pracujący
        w&nbsp;znanych firmach, jak&nbsp;i&nbsp;niezrzeszeni mówcy, którzy po&nbsp;mistrzowsku opanowali
        zróżnicowane tematy od&nbsp;początku wspierali nasze wydarzenie chętnie prowadząc treningi czy&nbsp;wykłady.
        Nierzadko godzina czasu tych ludzi warta jest ogromne pieniądze i&nbsp;na&nbsp;ich&nbsp;wynajęcie
        mogą sobie pozwolić jedynie profesjonalne korporacje.
      </p>
      <b-button :to="{ name: 'speakers' }" class="mt-2 ml-auto px-4 py-2 text-uppercase bg-primary">Dowiedz się więcej o
        naszych prelegentach
      </b-button>
    </RowContent>
    <RowContent :photo="require('@/assets/images/home/partnerzy.jpg')" reverse>
      <h3 class="align-self-start mb-4">Partnerzy</h3>
      <p class="text-justify">
        Od 12 lat Soft Skills Academy współpracuje z wieloma firmami 
        cieszącymi się uznaniem na rynku pracy. W ramach 
        wydarzenia nasi Partnerzy poprowadzą dedykowane 
        warsztaty. Wśród firm, z którymi współpracujemy możemy 
        wyróżnić takie marki jak&nbsp;Assa Abloy czy&nbsp;HID Global.
      </p>
      <b-button :to="{ name: 'partners' }" class="mt-2 mr-auto px-4 py-2 text-uppercase bg-primary">Dowiedz się więcej
      </b-button>
    </RowContent>
  </div>
</template>

<script>
import SVGSSAFull from '@/assets/images/ssa_full.svg';
import RowContent from '../components/RowContent';

export default {
  name: 'home',
  data() {
    return {};
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
