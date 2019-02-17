<template>
    <b-row no-gutters>
        <b-col cols="12">
            <b-row no-gutters>
                <transition mode="out-in" name="fade">
                    <div :key="photo.id" :style="{ backgroundImage: `url(${photo.src})` }" class="main-photo" v-for="photo in images" v-if="photo.id === slide"></div>
                </transition>
            </b-row>
            <b-row class="mb-3" no-gutters>
                <b-col class="position-relative mx-auto mt-md-5 d-flex align-items-center justify-content-between" cols="11" xl="10">
                    <b-link @click="slide = slide - 3 > 0 ? slide - 3 : images.length - slide - 3" class="navigation">
                        <SVGLeft class="svg"/>
                    </b-link>
                    <b-link @click="slide = (slide + 3) % images.length" class="navigation">
                        <SVGRight class="svg mx-2"/>
                    </b-link>
                    <div class="w-100 border"></div>
                    <b-row class="position-absolute" no-gutters>
                        <b-col cols="9" offset="3">
                            <b-row no-gutters>
                                <transition :duration="600" mode="out-in" name="fade-scale">
                                    <b-col :key="`images-${photo.id + 1}`" :style="{ background: `rgba(0,0,0,0.3) url(${photo.src})` }" @click="slide = photo.id" class="img-images shadow"
                                           v-for="photo in images" v-if="photo.id === imagesPhotos.previous"></b-col>
                                </transition>
                                <transition :duration="700" mode="out-in" name="fade-scale">
                                    <b-col :key="`images-${photo.id + 1}`" :style="{ background: `rgba(0,0,0,0.3) url(${photo.src})` }" @click="slide = photo.id" class="img-images shadow"
                                           v-for="photo in images" v-if="photo.id === slide"></b-col>
                                </transition>
                                <transition :duration="800" mode="out-in" name="fade-scale">
                                    <b-col :key="`images-${photo.id + 1}`" :style="{ background: `rgba(0,0,0,0.3) url(${photo.src})` }" @click="slide = photo.id" class="img-images shadow"
                                           v-for="photo in images" v-if="photo.id === imagesPhotos.next"></b-col>
                                </transition>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
    import SVGLeft from '@/assets/icons/circle-chevron-left.svg'
    import SVGRight from '@/assets/icons/circle-chevron-right.svg'

    export default {
        name: 'Gallery',
        components: {
            SVGLeft,
            SVGRight,
        },
        data () {
            return {
                slide: 0,
                images: [...Array(10).keys()].map(x => {
                    return {
                        id: x,
                        src: require(`@/assets/images/slider/${x + 1}.jpg`),
                    }
                }),
            }
        },
        computed: {
            imagesPhotos () {
                let previous = this.slide > 0 ? this.slide - 1 : this.images.length - this.slide - 1
                let next = (this.slide + 1) % this.images.length
                return {
                    previous,
                    next,
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .main-photo {
        @include media-breakpoint-up(md) {
            @include aspect-ratio(25, 9);
        }
        @include media-breakpoint-up(sm) {
            @include aspect-ratio(25, 13);
        }
        @include aspect-ratio(25, 19);
        @include background();
    }

    .navigation {
        z-index: 50;
    }

    .row.position-absolute {
        @include media-breakpoint-up(sm) {
            bottom: -1rem;
        }
        bottom: 0;
        left: 0;
        right: 0;

        .img-images {
            cursor: pointer;
            @include aspect-ratio(9, 3);
            @include background();
            background-blend-mode: darken;
            opacity: 1;
            transform: translateX(0);

            &:not(:last-of-type) {
                @extend .mx-sm-2, .mx-1;
            }

            &:last-of-type {
                @extend .ml-sm-2, .ml-1;
            }
        }
    }
</style>
