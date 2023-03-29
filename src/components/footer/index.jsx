import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section class="pb-4">
        <h2 class="text-center">Conheça todas as nossas facilidades</h2>
        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 px-3">
          <div class="divs-facilidades d-flex align-items-center">
            <div>
              <i class="bi bi-x-diamond fs-1"></i>
            </div>
            <div>
              <div class="ms-3 mb-1">PAGUE PELO PIX</div>
              <div class="texto-menor ms-3">
                Ganhe 5% OFF em pagamentos via PIX
              </div>
            </div>
          </div>
          <div class="divs-facilidades d-flex align-items-center">
            <div>
              <i class="bi bi-arrow-repeat fs-1"></i>
            </div>
            <div>
              <div class="ms-3 mb-1">TROCA GRÁTIS</div>
              <div class="texto-menor ms-3">
                Fique livre para trocar em até 30 dias.
              </div>
            </div>
          </div>
          <div class="divs-facilidades d-flex align-items-center">
            <div>
              <i class="bi bi-flower1 fs-1"></i>
            </div>
            <div>
              <div class="ms-3 mb-1">SUSTENTABILIDADE</div>
              <div class="texto-menor ms-3">
                Moda responsável, que respeita o meio ambiente.
              </div>
            </div>
          </div>
        </div>
      </section>

      <form class="border border-secondary m-3 p-3 text-center">
        <h5>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </h5>
        <div class="input-group my-3">
          <input
            type="email"
            class="form-control border-secondary rounded-0"
            placeholder="Digite seu e-mail"
            aria-label="Digite seu e-mail"
            aria-describedby="button-addon2"
          />
          <button type="button" id="button-addon2">
            Enviar
          </button>
        </div>
      </form>

      <footer class="text-center">
        <p class="py-3">2023 <i class="bi bi-c-circle"></i> Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
      </footer>
    </>
  );
}