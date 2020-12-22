<template>
  <div class="my-4 container text-center">
    <b-card-group deck>
      <b-col md="3">
        <b-card id="card_products1" align="center" style="max-width: 20rem" class="cards_products mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/burger_callejera.jpg`)"
            fluid
          />
          <b-card-text> <h4>Hamburguesa Callejera</h4> </b-card-text>
          <b-button id="button" v-b-modal.burger_callejera>Mas info!</b-button>
          <transition>
          <b-modal
            id="burger_callejera"
            centered
            ok-only
            size="sm"
            title="Hamburguesa Callejera!"
          >
            <p class="my-4"></p>
          </b-modal>
          </transition>
        </b-card>
      </b-col>

      <b-col md="3">
        <b-card id="card_products2" align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/burger_gratinada.jpg`)"
            fluid
          />
          <b-card-text> <h4>Hamburguesa Gratinada</h4> </b-card-text>
          <b-button id="button" v-b-modal.burger_grati>Mas info!</b-button>
          <b-modal
            id="burger_grati"
            centered
            ok-only
            size="sm"
            title="Hamburguesa Gatrinada!"
          >
            <p class="my-4"></p>
          </b-modal>
        </b-card>
      </b-col>

      <b-col md="3"
        ><b-card id="card_products1" align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/burger_maicitos.jpg`)"
            fluid
          />
          <b-card-text> <h4>Hamburguesa con Maicitos</h4> </b-card-text>
          <b-button id="button" v-b-modal.burger_maicitos>Mas info!</b-button>
          <b-modal
            id="burger_maicitos"
            centered
            ok-only
            size="sm"
            title="Hamburguesa con Maicitos!"
          >
            <p class="my-4"></p>
          </b-modal>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card id="card_products2" align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/chori_perro.jpg`)"
            fluid
          />
          
          <b-card-text> <br /> <h4>Chori Perro</h4> </b-card-text>
          <b-button id="button" v-b-modal.chori_perro>Mas info!</b-button>
          <b-modal
            id="chori_perro"
            centered
            ok-only
            size="sm"
            title="Chori Perro!"
          >
            <p class="my-4"></p>
          </b-modal>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card id="card_products1" align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/salchipapa_contodo.jpg`)"
            fluid
          />
          <b-card-text> <h4>Salchipapa con todo</h4> </b-card-text>
          <b-button id="button" v-b-modal.salchi_contodo>Mas info!</b-button>
          <b-modal
            id="salchi_contodo"
            centered
            ok-only
            size="sm"
            title="Salchipapa con Todo!"
          >
            <p class="my-4"></p>
          </b-modal>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card id="card_products2" align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/salchipapa_maxima.jpg`)"
            fluid
          />
          <b-card-text> <h4>Salchipapa Maxima</h4> </b-card-text>
          <b-button id="button" v-b-modal.salchi_maxima>Mas info!</b-button>
          <b-modal
            id="salchi_maxima"
            centered
            ok-only
            size="sm"
            title="Salchipapa Maxima!"
          >
            <p class="my-4"></p>
          </b-modal>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card id="card_products1" align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/maicitos_rancheros.jpg`)"
            fluid
          />
          <b-card-text> <h4>Maicitos Rancheros</h4> </b-card-text>
          <b-button id="button" v-b-modal.maicitos_rancheros>Mas info!</b-button>
          <b-modal
            id="maicitos_rancheros"
            centered
            ok-only
            size="sm"
            title="Maicitos Rancheros!"
          >
            <p class="my-4"></p>
          </b-modal>
        </b-card></b-col
      >
      <b-col md="3"
        ><b-card id="card_products2" align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/maicitos_gratinados.jpg`)"
            fluid
          />
          <b-card-text> <h4>Maicitos gratinados</h4> </b-card-text>
          <b-button id="button" v-b-modal.maicitos_gratinados>Mas info!</b-button>
          <b-modal
            id="maicitos_gratinados"
            centered
            ok-only
            size="sm"
            title="Macitos gratinados!"
          >
            <p class="my-4"></p>
          </b-modal>
        </b-card></b-col
      >
    </b-card-group>
  </div>
</template>

<style>
#img {
  height: 200px;
  width: auto;
}

#button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(
    to right,
    rgba(81, 180, 88),
    rgba(232, 74, 42)
  );
  border-radius: 8px;

  color: #fff;
  font-size: 18px;
  font-weight: 600;

  box-shadow: 3px 3px rgba(233, 206, 80);
  transition: 0.4s ease-out;
}
#button:hover {
  box-shadow: 6px 6px rgba(233, 206, 81);
}
#card_products1{
  background: rgba(144, 118, 176);
}
#card_products2{
  background: rgba(31, 35, 83);
}
</style>