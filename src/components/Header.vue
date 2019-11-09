<template>
    <b-row no-gutters class="elevate w-100 bg-white" :class="{'position-absolute': toggled}">
        <b-col cols="12">
            <b-navbar toggleable="lg" type="light">
                <b-row no-gutters class="flex-fill w-100">
                    <b-col cols="12" lg="2" class="d-flex align-items-center justify-content-between justify-content-lg-start">
                        <b-navbar-brand :to="{ name: 'home' }"><SVGSSAFull class="nav-logo"/></b-navbar-brand>
                        <b-navbar-toggle target="nav-collapse" @click="clicked = !clicked" />
                    </b-col>
                    <b-col lg="8" xl="8" class="d-none d-lg-flex justify-content-center align-items-center">
                        <HeaderNav class="mx-auto" />
                    </b-col>
                    <b-col lg="2" class="d-none d-lg-flex justify-content-end align-items-center">
                        <b-button size="lg">aplikuj</b-button>
                    </b-col>
                </b-row>

                <b-collapse id="nav-collapse" is-nav>
                    <HeaderNav class="d-lg-none"/>
                </b-collapse>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
  import SVGSSAFull from '@/assets/images/ssa_full.svg'
  import HeaderNav from './HeaderNav'

  export default {
    name: 'Header',
    components: {
      SVGSSAFull,
      HeaderNav
    },
    data () {
      return {
        clicked: false,
        links: [
          {
            name: 'start',
            href: {
              name: 'home',
            },
          },
          {
            name: 'o nas',
            href: {
              name: 'about',
            },
          },
          {
            name: 'kontakt',
            href: {
              name: 'contact',
            },
          },
        ],
      }
    },
    computed: {
      toggled() {
        return !this.$screen.lg && !this.$screen.xl && this.clicked
      }
    }
  }
</script>

<style lang="scss" scoped>
    .elevate {
        z-index: 90;
    }

    .nav-logo {
        .st0 {
            fill: #C0CE47;
        }

        .st1 {
            display: none;
        }

        .st2 {
            display: inline;
        }

        .st3 {
            display: inline;
            fill: #FFFFFF;
        }

        .st4 {
            display: inline;
            fill: #C0CE47;
        }

        .st5 {
            fill: #FFFFFF;
        }
    }
</style>
