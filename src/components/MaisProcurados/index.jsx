import React from "react";

import Cmobile1 from "../../assets/Mobile/produtos/camiseta.png";
import Ctablet1 from "../../assets/Tablet/produtos/camiseta.png";
import Cdesktop1 from "../../assets/Desktop/produtos/camiseta.png";

import Cmobile2 from "../../assets/Mobile/produtos/tenis.png";
import Ctablet2 from "../../assets/Tablet/produtos/tenis.png";
import Cdesktop2 from "../../assets/Desktop/produtos/tenis.png";

import Cmobile3 from "../../assets/Mobile/produtos/calca.png";
import Ctablet3 from "../../assets/Tablet/produtos/calca.png";
import Cdesktop3 from "../../assets/Desktop/produtos/calca.png";

import Cmobile4 from "../../assets/Mobile/produtos/bolsa.png";
import Ctablet4 from "../../assets/Tablet/produtos/bolsa.png";
import Cdesktop4 from "../../assets/Desktop/produtos/bolsa.png";

import Cmobile5 from "../../assets/Mobile/produtos/jaqueta-jeans.png";
import Ctablet5 from "../../assets/Tablet/produtos/jaqueta-jeans.png";
import Cdesktop5 from "../../assets/Desktop/produtos/jaqueta-jeans.png";

import Cmobile6 from "../../assets/Mobile/produtos/oculos.png";
import Ctablet6 from "../../assets/Tablet/produtos/oculos.png";
import Cdesktop6 from "../../assets/Desktop/produtos/oculos.png";

export default function MaisProcurados() {
  return (
    <>
      <h2 class="container text-center my-3">Produtos que estão bombando</h2>
      <div class="container row mx-auto">

        <div class="col-12 col-md-6 col-xxl4 pb-4">
          <div class="card">
            <img class="d-md-none d-block" src={Cmobile1} alt="" />
            <img class="d-none d-md-block d-xl-none" src={Ctablet1} alt="" />
            <img class="d-none d-xl-block" src={Cdesktop1} alt="" />
            <div class="card-body">
              <h5 class="card-title">Produto</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>R$30,00</p>
              <a href="#" class="btn btn-primary botao-lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xxl4 pb-4">
          <div class="card">
            <img class="d-md-none d-block" src={Cmobile2} alt="" />
            <img class="d-none d-md-block d-xl-none" src={Ctablet2} alt="" />
            <img class="d-none d-xl-block" src={Cdesktop2} alt="" />
            <div class="card-body">
              <h5 class="card-title">Produto</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>R$30,00</p>
              <a href="#" class="btn btn-primary botao-lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xxl4 pb-4">
          <div class="card">
            <img class="d-md-none d-block" src={Cmobile3} alt="" />
            <img class="d-none d-md-block d-xl-none" src={Ctablet3} alt="" />
            <img class="d-none d-xl-block" src={Cdesktop3} alt="" />
            <div class="card-body">
              <h5 class="card-title">Produto</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>R$30,00</p>
              <a href="#" class="btn btn-primary botao-lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xxl4 pb-4">
          <div class="card">
            <img class="d-md-none d-block" src={Cmobile4} alt="" />
            <img class="d-none d-md-block d-xl-none" src={Ctablet4} alt="" />
            <img class="d-none d-xl-block" src={Cdesktop4} alt="" />
            <div class="card-body">
              <h5 class="card-title">Produto</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>R$30,00</p>
              <a href="#" class="btn btn-primary botao-lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xxl4 pb-4">
          <div class="card">
            <img class="d-md-none d-block" src={Cmobile5} alt="" />
            <img class="d-none d-md-block d-xl-none" src={Ctablet5} alt="" />
            <img class="d-none d-xl-block" src={Cdesktop5} alt="" />
            <div class="card-body">
              <h5 class="card-title">Produto</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>R$30,00</p>
              <a href="#" class="btn btn-primary botao-lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xxl4 pb-4">
          <div class="card">
            <img class="d-md-none d-block" src={Cmobile6} alt="" />
            <img class="d-none d-md-block d-xl-none" src={Ctablet6} alt="" />
            <img class="d-none d-xl-block" src={Cdesktop6} alt="" />
            <div class="card-body">
              <h5 class="card-title">Produto</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>R$30,00</p>
              <a href="#" class="btn btn-primary botao-lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}