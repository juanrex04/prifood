<template>
  <div class="about">
    <footer class="footer">
      <div class="mt-5">
        <div class="row">
          <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 class="text-uppercase font-weight-bold">
              <strong>¿Quiénes Somos?</strong>
            </h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px"
            />
            <p>
              <strong>PRIFOOD</strong> estamos comprometidos con darte el mejor
              servicio que puedas llegar a desear; danto un excelente servicio
              al cliente,  entrega a domicilio rápido y de manera gratuita para
              toda la comunidad campestre y a la ciudad de Cali
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">
              <strong>Redes sociales</strong>
            </h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px"
            />
            <p>
              <a
                href="https://www.facebook.com/Prifood-102579611596406"
                target="_BLANK"
              >
                <b-img
                  id="social"
                  fluid
                  :src="require('@/assets/img/facebook.svg')"
                ></b-img>
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/prifood1/" target="_BLANK">
                <b-img
                  id="social"
                  fluid
                  :src="require('@/assets/img/instagram.svg')"
                ></b-img
              ></a>
            </p>
            <p>
              <a
                href="https://api.whatsapp.com/send?phone=573226101113&fbclid=IwAR3w0o0p1Q7V1NSf9dDHFXWL1b33XMSwJRbXIxX95Ra2WVJa1nu0J5iZjrQ"
                target="_BLANK"
                ><b-img
                  id="social"
                  fluid
                  :src="require('@/assets/img/whatsapp.svg')"
                ></b-img
              ></a>
            </p>
          </div>

          <div class="col-md-3 col-lg-3 col-xl-3">
            <h6 class="text-uppercase font-weight-bold">
              <strong>Contacto</strong>
            </h6>
            <hr class="mt-0 d-inline-block mx-auto" style="width: 60px" />
            <p>
              <i class=""></i>
              <b-img
                id="social"
                fluid
                :src="require('@/assets/img/maps.svg')"
              ></b-img>
              Poblado Campestre
            </p>
            <p>
              <i class="">
                <b-img
                  id="social"
                  fluid
                  :src="require('@/assets/img/phone-call.svg')"
                ></b-img>
              </i>
              + 57 322 610 1113
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>
<style>
#social {
  height: 40px;
  width: auto;
}
</style>
