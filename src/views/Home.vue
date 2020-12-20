<template>
  <div class=" container my-3">
    <b-carousel
      v-model="slide"
      indicators
      style="text-shadow: 0px 0px 2px #000"
      fade
      :interval="4000"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <b-img
            id="test"
            class="d-block img-fluid"
            fluid
            :src="require('@/assets/img/menu1.jpg')"
            alt="Fluid"
            center
            >Hola</b-img
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <b-img
            id="test"
            class="d-block img-fluid"
            fluid
            :src="require('@/assets/img/menu2.jpg')"
            alt="Fluid"
            center
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <b-img
            id="test"
            class="d-block img-fluid"
            fluid
            :src="require('@/assets/img/menu3.jpg')"
            alt="Fluid"
            center
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <b-img
            id="test"
            class="d-block img-fluid"
            fluid
            :src="require('@/assets/img/menu4.jpg')"
            alt="Fluid"
            center
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <b-img
            id="test"
            class="d-block img-fluid"
            fluid
            :src="require('@/assets/img/menu5.jpg')"
            alt="Fluid"
            center
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
};
</script>

<style>
#test {
  width: auto;
  min-height: 200px;
  max-height: 480px;
}
</style>
