<template>
    <div>
        <b-row no-gutters class="baner position-relative align-items-center"
               :style="{ 'background-image': `url(${require('@/assets/images/home/baner.jpg')})`}">
            <b-col offset="1" cols="6" class="d-flex flex-column">
                <h1 class="text-white text-uppercase">
                    <span class="font-weight-bold display-4">10. edycja</span>
                    <br/>
                    darmowych warsztatów z
                    <br/>
                    umiejętności miękkich
                </h1>
                <span class="text-white">Kampus AGH, 29 listopada - 8 grudnia 2019 r.</span>
                <a href="http://bit.ly/aplikujnaSSA10">
                    <b-button class="mt-2 mr-auto px-4 py-2">Zapisy od 7 listopada</b-button>
                </a>
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
                            Soft Skills Academy powraca z jubileuszową dziesiątą edycją. W tym roku zaoferujemy jeszcze
                            więcej niż dotychczas. Na przestrzeni aż dziesięciu dni zorganizowane zostanie 40 treningów,
                            wśród których oprócz warsztatów i wykładów znajdzie się też miejsce dla weekendowych Soft
                            Maratonów – intensywnych całodniowych szkoleń dla najambitniejszych. Jako tegoroczną nowość
                            wprowadzamy również pogadanki w swobodnej atmosferze.
                        </p>
                        <span>A wszystko to zupełnie za darmo!</span>
                        <b-button :to="{ name: 'about' }" class="mt-2 ml-auto px-4 py-2">Dowiedz się więcej</b-button>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <RowContent :photo="require('@/assets/images/home/um-miekkie.jpg')">
            <h3 class="align-self-start mb-4">Umiejętności miękkie</h3>
            <p>
                Nasze wydarzenie skupia się wokół tematyki umiejętności miękkich, czyli wszystkich tych które potrzebne
                są nam do skutecznej interakcji z innymi ludźmi a także do swobodnego wyrażania siebie. Korzystamy z
                nich nieświadomie w każdej minucie naszego życia – na studiach, w pracy, podczas spotkań ze znajomymi
                czy rodziną, a także podczas nauki czy organizacji dnia. To “pierwiastek ludzki”, niezbędny w każdym
                procesie, niemożliwy do zastąpienia przez żadną maszynę czy program.
            </p>
        </RowContent>
        <RowContent :photo="require('@/assets/images/home/szkolenia.jpg')" reverse>
            <h3 class="align-self-start mb-4">Szkolenia</h3>
            <p>
                W tym roku obchodzimy jubileusz i na dziesiątą edycję wydarzenia przypada aż dziesięć dni szkoleń,
                podczas których poruszymy tematy takie jak:
            </p>
            <ul class="align-self-start">
                <li>zarządzanie czasem,</li>
                <li>negocjacje,</li>
                <li>skuteczna komunikacja,</li>
                <li>radzenie sobie ze stresem,</li>
                <li>sztuka improwizacji,</li>
                <li>wystąpienia publiczne,</li>
                <li>i wiele innych…</li>
            </ul>
            <b-button :to="{ name: 'timetable' }" class="mt-2 mr-auto px-4 py-2">Zobacz harmonogram</b-button>
        </RowContent>
        <RowContent :photo="require('@/assets/images/home/prelegenci.jpg')">
            <h3 class="align-self-start mb-4">Prelegenci</h3>
            <p>
                Do współpracy przy Soft Skills Academy zapraszamy ludzi, którzy umiejętności miękkie mają opanowane do
                perfekcji i chętnie dzielą się zdobytą wiedzą. Zarówno profesjonaliści, pracujący w znanych firmach, jak
                i niezrzeszeni mówcy, którzy po mistrzowsku opanowali zróżnicowane tematy od początku wspierali nasze
                wydarzenie chętnie prowadząc treningi czy wykłady. Nierzadko godzina czasu tych ludzi warta jest ogromne
                pieniądze i na ich wynajęcie mogą sobie pozwolić jedynie profesjonalne korporacje.
            </p>
            <b-button :to="{ name: 'speakers' }" class="mt-2 ml-auto px-4 py-2">Dowiedz się więcej o naszych prelegentach</b-button>
        </RowContent>
        <RowContent :photo="require('@/assets/images/home/partnerzy.jpg')" reverse>
            <h3 class="align-self-start mb-4">Partnerzy</h3>
            <p>
                Od 2011 roku nasze wydarzenie odbywa się pod honorowym patronatem Jego Magnificencji Rektora Akademii
                Górniczo-Hutniczej. Od czterech lat patronatem obejmuje nas również Miasto Kraków. Współpracujemy
                również z wieloma firmami i organizacjami, wśród których możemy wyróżnić takie marki jak Assa Abloy czy
                HID Global.
            </p>
            <b-button :to="{ name: 'partners' }" class="mt-2 mr-auto px-4 py-2">Dowiedz się więcej</b-button>
        </RowContent>
    </div>
</template>

<script>
    import SVGSSAFull from '@/assets/images/ssa_full.svg'
    import RowContent from "../components/RowContent";

    export default {
        name: 'home',
        data() {
            return {}
        },
        components: {
            SVGSSAFull,
            RowContent
        },
        methods: {},
        computed: {},
        watch: {},
    }
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
