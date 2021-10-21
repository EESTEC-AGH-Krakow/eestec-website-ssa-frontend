<template>
    <b-container fluid id="app" class="p-0">
        <!--        <headroom>-->
        <header class="sticky-top">
            <Header/>
        </header>
        <!--        </headroom>-->
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <Footer/>
        </footer>
        <SpeakerModal></SpeakerModal>
        <PartnerModal></PartnerModal>
    </b-container>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import SpeakerModal from "./components/SpeakerModal";
  import PartnerModal from "./components/PartnerModal";
  // import headroom from 'vue-headroom'

  export default {
    name: 'app',
    components: {
        PartnerModal,
        SpeakerModal,
      Header,
      Footer,
      // headroom
    },
  }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Francois+One|Lato:400,700&display=swap');

    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    #app {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        position: relative;
    }

    main {
        flex: 1 0 auto;
    }

    .clickable {
        &, & h6 {
            transition: $transition-base;
        }

        &:focus, &:active, &:hover, &.active {
            @extend .font-weight-bold, .shadow;
            cursor: pointer;
            transform: scale(1.1);

            &:not(.clickable-dark) {
                @extend .bg-secondary;
            }

            &.clickable-dark {
                background-color: darken($secondary, 15%);
                &, & h6 {
                    @extend .text-light;
                }
            }
        }
    }
</style>
