import React from "react";
import { NavBar } from "../utils/NavBar";
import { Banner } from "./Banner";
import { Servicios } from "./Servicios";
import { ImgText } from "./ImgText";
import { ListaPizzasLanding } from "./ListaPizzasLanding";

export const Inicio = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Servicios />
      <ImgText />
      <ListaPizzasLanding />
    </>
  );
};