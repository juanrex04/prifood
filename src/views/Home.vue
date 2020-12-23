<template>
  <div class="container my-3">
    <h1 class="my-3">¡¡BIENVENIDO A PRIFOOD!!</h1>
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
            id="carousel"
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
            id="carousel"
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
            id="carousel"
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
            id="carousel"
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
            id="carousel"
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
        <b-col md="4">
          <b-card
            id="color-card"
            text-variant="white"
            title="Domicilios"
            style="max-width: 20rem"
          >
            <b-img
              id="services"
              :src="require('@/assets/img/delivery-man.svg')"
              fluid
            ></b-img>
            <b-card-text class="my-4">
              Estamos totalmente comprometidos con el cliente, por ende
              realizamos nuestros pedidos de la manera más rápida, segura y de
              forma gratuita para que el cliente este satisfecho con nuestro
              servicio, tambien manejando siempre todos los protocolos de 
              bioseguridad dictados por el gobierno
            </b-card-text>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card
            id="color-card"
            text-variant="white"
            title="Atención al Cliente"
            style="max-width: 20rem"
          >
            <b-img
              id="services"
              :src="require('@/assets/img/customer-service.svg')"
            ></b-img>
            <b-card-text class="my-4">
              Contamos con un excelente servicio al cliente el cual nos permite
              gestionar de manera ágil y ordena todos los pedidos que se nos
              realizan a lo largo de la jornada laboral
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card
            id="color-card"
            text-variant="white"
            title="Manipulación de alimentos y medidas de bioseguridad"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-img
              id="services"
              :src="require('@/assets/img/clean-hands.svg')"
            ></b-img>
            <b-card-text class="my-4">
              Manejamos todos los protocolos que se requieren para la
              manipulación de alimentos con el fin de nuestros clientes sé
              sientan totalmente seguros a la hora de consumir nuestros productos
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
#carousel {
  width: auto;
  min-height: 200px;
  max-height: 480px;
}
#services {
  width: 100px;
}
#img {
  height: 100%;
}
#color-card {
  background: linear-gradient(to right, rgba(81, 180, 88), rgba(144, 118, 176))
    no-repeat center center fixed;
}
</style>
