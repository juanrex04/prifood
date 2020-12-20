<template>
  <div class="my-4 container text-center">
    <b-card-group deck class="mx-2 my-4">
      <b-col md="3">
        <b-card align="center" style="max-width: 20rem" class="mx-2 my-4">
          <b-img
            id="img"
            :src="require(`@/assets/img/burger_callejera.jpg`)"
            fluid
          />
          <b-card-text>
            Nombre y descripción del producto
          </b-card-text>

          <b-button id="button">Mas info!</b-button>
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
            Nombre y descripción del producto
          </b-card-text>

          <b-button id="button">Mas info!</b-button>
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
            Nombre y descripción del producto
          </b-card-text>

          <b-button id="button">Mas info!</b-button>
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
            Nombre y descripción del producto
          </b-card-text>

          <b-button id="button">Mas info!</b-button>
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
            Nombre y descripción del producto
          </b-card-text>

          <b-button id="button">Mas info!</b-button>
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
            Nombre y descripción del producto
          </b-card-text>

          <b-button id="button">Mas info!</b-button>
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
            Nombre y descripción del producto
          </b-card-text>

          <b-button id="button">Mas info!</b-button>
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
            Nombre y descripción del producto
          </b-card-text>

          <b-button id="button">Mas info!</b-button>
        </b-card></b-col
      >
    </b-card-group>
  </div>
</template>

<style>
#img {
  height: 120px;
  width: auto;
}

#button{
appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right,rgba(81, 180, 88), rgba(232, 74, 42));
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

</style>