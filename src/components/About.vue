<template>
    <b-row no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-5 display-4">O projekcie</h1>
        </b-col>
        <b-col cols="8" offset="2">
            <p class="text-justify mb-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
        </b-col>
        <b-col cols="12">
            <b-carousel :interval="4000"
                        @sliding-end="onSlideEnd"
                        @sliding-start="onSlideStart"
                        controls
                        id="carousel"
                        indicators
                        v-model="slide">

                <!-- Text slides with image -->
                <b-carousel-slide caption="First slide"
                                  img-src="https://picsum.photos/1024/480/?image=52"
                                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <img alt="image slot" class="d-block img-fluid w-100" height="480" slot="img"
                         src="https://picsum.photos/1024/480/?image=55" width="1024">
                </b-carousel-slide>
            </b-carousel>
        </b-col>
    </b-row>
</template>

<script>
	export default {
		name: 'About',
		data () {
			return {
				slide: 0,
				sliding: null,
			}
		},
		methods: {
			onSlideStart (slide) {
				this.sliding = true
			},
			onSlideEnd (slide) {
				this.sliding = false
			},
		},
	}
</script>

<style lang="scss" scoped>

</style>
