<template>
    <b-container class="p-0 position-relative" fluid>
        <b-button @click.stop="showCollapse = !showCollapse" class="position-fixed p-2 p-sm-3 align-self-center menu d-flex" size="sm" variant="outline-secondary">
            <font-awesome-icon icon="bars" size="lg"></font-awesome-icon>
        </b-button>
        <b-row :class="{ active: showCollapse }" @click="blankClick" class="position-fixed" id="container" no-gutters ref="container">
            <b-col class="position-fixed d-flex flex-column align-items-stretch" cols="11" lg="4" md="6" sm="8">
                <b-navbar class="p-0 flex-fill d-flex align-items-stretch" toggleable="true" type="light" variant="faded">
                    <div class="bg-white py-3 horizontal flex-fill d-flex flex-column align-items-center" ref="collapse">
                        <b-navbar-brand class="m-0">
                            <img alt="logo" class="img-fluid" src="@/assets/images/hackathon-logo2.png"/>
                        </b-navbar-brand>

                        <b-navbar-nav class="mt-4 font-weight-bold w-100 bg-white h-100">
                            <b-nav-item :key="link.id" @click="scrollTo(link)" class="text-center" href="#" v-for="link in links">{{ link.name }}</b-nav-item>
                        </b-navbar-nav>
                    </div>
                </b-navbar>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    name: 'Aside',
    data () {
      return {
        showCollapse: false,
        links: [
          {
            id: 1,
            name: 'start',
            href: 'main',
          },
          // {
          //   id: 2,
          //   name: 'czas',
          //   href: 'timer',
          // },
          {
            id: 3,
            name: 'o projekcie',
            href: 'about-project',
          },
          {
            id: 4,
            name: 'o nas',
            href: 'about-us',
          },
          {
            id: 5,
            name: 'jak dojechać',
            href: 'place',
          },
          {
            id: 6,
            name: 'najczęstsze pytania',
            href: 'faq',
          },
          {
            id: 7,
            name: 'partnerzy',
            href: 'partners',
          },
          {
            id: 8,
            name: 'kontakt',
            href: 'contact',
          },
        ],
      }
    },
    methods: {
      blankClick (e) {
        if (e.target.isSameNode(this.$refs.container)) this.showCollapse = false
      },
      scrollTo (link) {
        this.showCollapse = false
        this.$scrollTo(`#${link.href}`, 700)
      },
    },
    watch: {
      showCollapse () {
        document.querySelector('body').style.overflowY = this.showCollapse ? 'hidden' : 'auto'
      },
    },
  }
</script>

<style lang="scss" scoped>
    #container {
        user-select: none;
        width: 100vw;
        height: 100vh;
        background: transparent;
        transition: $transition-base;
    }

    #container.active {
        background: transparentize($black, 0.4);
        z-index: $aside-index;

        nav.navbar {
            overflow-y: auto;
        }

        .horizontal {
            transform: translateX(0);
        }
    }

    div.position-fixed.d-flex {
        height: 100vh;
        z-index: $aside-index + 1;

        .horizontal {
            transform: translateX(-100%);
            transform-origin: left;
            transition: $transition-base;
        }
    }

    .menu {
        z-index: $aside-index + 2;
        @include media-breakpoint-down(md) {
            &:hover, &:focus {
                background-color: transparent !important;
                color: $secondary !important;
            }
        }
    }

    .img-fluid {
        width: 5rem;
        height: auto;
    }
</style>
