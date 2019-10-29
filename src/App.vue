<template>
    <b-container class="p-0" fluid id="app">
        <header>
            <Header/>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <Footer/>
        </footer>
    </b-container>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'app',
    components: {
      Header,
      Footer,
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

    @for $i from 1 through 6 {
        h#{$i} {
            @extend .font-weight-bold;
        }
    }
</style>
