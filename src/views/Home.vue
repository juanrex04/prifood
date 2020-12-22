<template>
  <div class="container my-3">
    <h1 class="my-3">Bienvenido a PRIFOOD</h1>
    <h4 class="my-4">¡¡Un lugar al que seguro pensaras en volver!!</h4>
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
    <div class="my-4 container">
      <h1>Nuestros Servicios!!</h1>
      <b-card-group deck class="my-4">
        <b-col>
          <b-card
            title="Domicilio gratutio"
            :img-src="require('@/assets/img/delivery-man.svg')"
            img-alt="Image"
            img-top
            style="max-width: 20rem"
            class="mb-2"
            bg-variant="info"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>

        <b-col>
          <b-card
            title="Servicio al Cliente"
            :img-src="require('@/assets/img/customer-service.svg')"
            img-alt="Image"
            img-top
            style="max-width: 20rem"
            bg-variant="info"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Manipulación de alimentos"
            :img-src="require('@/assets/img/clean-hands.svg')"
            img-alt="Image"
            img-top
            style="max-width: 20rem"
            class="mb-2"
            bg-variant="info"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style>
#test {
  width: auto;
  min-height: 200px;
  max-height: 480px;
}
</style>
