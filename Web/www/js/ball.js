/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Gabriel Rodríguez Hernández
 * @since may 2 2022
 * @desc mandelBrot.js
 *       This file contains the Dates class, this class is responsible for managing 
 *       dates and calculating the day following the current one.
 * @see {@link https://app.codecov.io/gh}
 * @see {@link https://docs.google.com/presentation/d/1wrqfNeeNbbEwbAD1bAMqA4CfL2jINrtJ4YWzStd5MjM/edit#slide=id.g814cc5b720_1_0}
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-p08-oop-alu0101216829}
 *
**/

'use strict';

import { Canvas } from "./canvas.js";

export class Ball extends Canvas {
  #body;
  #ctx;
  #coordinateX;
  #coordinateY;
  #radio;
  #movement;

  constructor() {
    super();
    this.#body = this.getBody();
    this.#ctx = this.getCtx();
    this.#coordinateX = this.#body.width / 2;
    this.#coordinateY = this.#body.height / 2;
    this.#radio = 20;
    this.#movement = 10;
  }

  draw() {
    this.#ctx.beginPath();
    this.#ctx.arc(this.#coordinateX, this.#coordinateY, this.#radio, 0, 2 * Math.PI);
    this.#ctx.fillStyle = 'red';
    this.#ctx.fill();
    this.#ctx.stroke();
  }

  move(nextStep) {
    console.log(nextStep);
    switch (nextStep) {
      case 'left':
        if (this.#coordinateX <= 0 + this.#radio) {
          
          return false;
        } else {
          console.log(this.#coordinateX)
          this.#coordinateX -= this.#movement;
        }
        break;
      case 'right':
        if (this.#coordinateX >= this.#body.height - this.#radio) {
          return false;
        } else {
          this.#coordinateX += this.#movement;
        }
        break;
      case 'up':
        if (this.#coordinateY <= 0 + this.#radio) {
          return false;
        } else {
          this.#coordinateY -= this.#movement;
        }
        break;
      case 'down':
        if (this.#coordinateY >= this.#body.height - this.#radio) {
          return false;
        } else {
          this.#coordinateY += this.#movement;
        }
        break;
      default:
        break;
    }
    this.draw();
    return true;
  }
}