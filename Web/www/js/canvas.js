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

export class Canvas {
  #body;
  #ctx;
  #width;
  #height;

  constructor(canvasWidth, canvasHeight) {
    this.#body = document.getElementById('canvas');
    this.#ctx = this.#body.getContext('2d');
    this.#width = canvasWidth;
    this.#height = canvasHeight;
  }

  getBody() {
    return this.#body;
  }

  getCtx() {
    return this.#ctx;
  }

  build() {
    this.#ctx.lineWidth = 0.5;
    this.#ctx.fillStyle = 'white';
    this.#ctx.strokeStyle = '#999';
    this.#ctx.fillRect(0, 0, this.#width, this.#height);
  }

  update() {
    this.#ctx.clearRect(0, 0, this.#body.width, this.#body.height);
    this.build();
  }
}


/*const pixels = 20;
for (let i = 0; i < this.#width; i += pixels) {
  this.#ctx.beginPath();
  this.#ctx.moveTo(i, 0);
  this.#ctx.lineTo(i, this.#height);
  this.#ctx.stroke()
  this.#ctx.beginPath();
  this.#ctx.moveTo(0, i);
  this.#ctx.lineTo(this.#width, i);
  this.#ctx.stroke();
  this.#ctx.beginPath();
  this.#ctx.moveTo(i, 0);
  this.#ctx.lineTo(i, this.#height);
  this.#ctx.stroke();
}*/