<template>
    <b-container class="p-0" fluid id="app">
        <header>
            <Aside/>
        </header>
        <main>
            <Main id="main"/>
            <Timer id="timer"/>
            <AboutProject id="about-project"/>
            <AboutUs id="about-us"/>
            <Place id="place"/>
            <FAQ id="faq"/>
            <Partners id="partners"/>
        </main>
        <footer>
            <Contact id="contact"/>
        </footer>
    </b-container>
</template>

<script>
  import Main from './components/Main'
  import Aside from './components/Aside'
  import AboutProject from './components/AboutProject'
  import AboutUs from './components/AboutUs'
  import Contact from './components/Contact'
  import FAQ from './components/FAQ'
  import Partners from './components/Partners'
  import Place from './components/Place'
  import Timer from './components/Timer'

  export default {
    name: 'app',
    components: {
      Aside,
      Main,
      AboutProject,
      AboutUs,
      Contact,
      FAQ,
      Partners,
      Place,
      Timer,
    },
  }
</script>

<style lang="scss">
    @font-face {
        font-family: 'Norse';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("assets/fonts/Norse.otf");
    }

    @font-face {
        font-family: 'Futhark';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("assets/fonts/BabelStoneRunicElderFuthark.ttf");
    }

    @font-face {
        font-family: 'Elegant';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("assets/fonts/ElegantLux.otf");
    }

    * {
        box-sizing: border-box;
        @extend .primary-font;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 30px;
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

    .btn {
        @extend .rounded-0, .font-weight-bold, .bg-transparent, .border, .border-white, .px-4, .py-2;
        border-width: 5px !important;

        &:hover {
            @extend .bg-white, .text-black;
        }

        &:focus {
            box-shadow: none !important;
        }
    }

    a {
        &:hover {
            text-decoration: none;
        }
    }

    @for $i from 1 through 6 {
        h#{$i} {
            @extend .font-weight-bold;
        }
    }
</style>
