import React from "react";
import logo from "../../assets/logo-meteora.png";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-md bg-black navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h1 class="m-0">
            <img
              class="d-block"
              src={logo} alt=""
            />
          </h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Lojas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Novidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Promoção</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2 rounded-0" type="search" placeholder="Digite o produto" aria-label="Search" />
            <button class="btn btn-outline-light rounded-0" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}