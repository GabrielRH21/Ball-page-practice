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
import { Ball } from "./ball.js";

function ejecutar(width, height) {
  const board = new Canvas(width, height);
  board.build();

  const ball = new Ball();
  ball.draw();

  option(board, ball, 'down');
  option(board, ball, 'left');
  option(board, ball, 'up');
  option(board, ball, 'right');


  color.oninput = function() {
    bola.draw();
  };
}

const option = function(canvas, ball, opt) {
  const buttonNames = document.querySelectorAll('.' + opt);
  buttonNames.forEach((button) => {
    button.addEventListener('click', function () {
      const name = document.getElementById(opt);
      canvas.build();
      if (!ball.move(opt)) {
        ball.draw();
        name.style.backgroundColor = 'red';
      } else {
        name.style.backgroundColor = 'green';
      }
      
      /*if (opt === 'up') {
        const changeColor = document.getElementById('down');
        changeColor.style.backgroundColor = 'green';
      }
      if (opt === 'down') {
        const changeColor = document.getElementById('up');
        changeColor.style.backgroundColor = 'green';
      }
      if (opt === 'left') {
        const changeColor = document.getElementById('right');
        changeColor.style.backgroundColor = 'green';
      }
      if (opt === 'rigth') {
        const changeColor = document.getElementById('left');
        changeColor.style.backgroundColor = 'green';
      }*/
    });
  });
}

window.ejecutar = ejecutar;