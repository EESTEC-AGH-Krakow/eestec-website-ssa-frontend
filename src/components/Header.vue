<template>
    <b-row no-gutters>
        <b-col cols="12">
            <b-navbar toggleable="lg" type="light">
                <b-row no-gutters class="flex-fill">
                    <b-col cols="2" class="d-flex align-items-center">
                        <b-navbar-brand :to="{ name: 'home' }"><SVGSSAFull class="nav-logo"/></b-navbar-brand>
                    </b-col>
                    <b-col cols="12" md="8" class="order-2 d-flex justify-content-center align-items-center">
                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav class="mx-auto">
                                <b-nav-item class="text-uppercase" :to="{ name: 'about' }">o nas</b-nav-item>
                                <b-nav-item class="text-uppercase" :to="{ name: 'timetable' }">harmonogram</b-nav-item>
                                <b-nav-item class="text-uppercase" :to="{ name: 'speakers' }">prelegenci</b-nav-item>
                                <b-nav-item class="text-uppercase" :to="{ name: 'partners' }">partnerzy</b-nav-item>
                                <b-nav-item class="text-uppercase" :to="{ name: 'previousEditions' }">poprzednie edycje</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-col>
                    <b-col cols="2" class="order-3 d-none d-md-flex justify-content-end align-items-center">
                        <b-button>aplikuj</b-button>
                    </b-col>
                </b-row>

                <b-navbar-toggle target="nav-collapse" />
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
  import SVGSSAFull from '@/assets/images/ssa_full.svg'

  export default {
    name: 'Header',
    components: {
      SVGSSAFull,
    },
    data () {
      return {
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
  }
</script>

<style lang="scss" scoped>
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
