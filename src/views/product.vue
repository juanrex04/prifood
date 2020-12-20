<template>
  <div id="test" class="my-4 container text-center">
    <b-card-group deck class="mx-2 my-4">
      <b-col md="3">
        <b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/burger_callejera.jpg`)"
            fluid
          />
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>

      <b-col md="3">
        <b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/burger_gratinada.jpg`)"
            fluid
          />
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>

      <b-col md="3"
        ><b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/burger_maicitos.jpg`)"
            fluid
          />
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/chori_perro.jpg`)"
            fluid
          />
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/salchipapa_contodo.jpg`)"
            fluid
          />
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/salchipapa_maxima.jpg`)"
            fluid
          />
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/maicitos_rancheros.jpg`)"
            fluid
          />
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/maicitos_gratinados.jpg`)"
            fluid
          />
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card></b-col
      >
    </b-card-group>
  </div>
</template>

<style>
#test {
  color: black;
  min-height: 500vh;
  max-height: 500vh;
}
#img {
  height: 120px;
  width: auto;
}
</style>