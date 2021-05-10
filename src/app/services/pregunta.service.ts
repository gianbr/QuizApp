import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: Respuesta;
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta = null;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('¿Cual es la capital de Argentina?', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montevideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),
    new Pregunta('¿Cual es la capital de Francia?', [
      new Respuesta('Roma', 0),
      new Respuesta('Paris', 1),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('¿Cual es el orden de colores de la bandera de Francia?', [
      new Respuesta('Azul, blanco y rojo, de izquierda a derecha', 1),
      new Respuesta('Rojo, blanco y azul, de izquierda a derecha', 0),
      new Respuesta('Azul, blanco y rojo, de arriba para abajo', 0),
      new Respuesta('Rojo, blanco y azul, de arriba para abajo', 0),
    ]),
    new Pregunta('Cual es la capital de Egipto', [
        new Respuesta('Londres', 0),
        new Respuesta('Berlin', 0),
        new Respuesta('El Cairo', 1),
        new Respuesta('Casablanca', 0),
    ]),
      new Pregunta('¿Cuantas letras tiene el abecedario?', [
        new Respuesta('25', 0),
        new Respuesta('29', 0),
        new Respuesta('27', 1),
        new Respuesta('30', 0),
    ]),
  ];
  constructor() { }

  getPreguntas() {
    return this.preguntas.slice();
  }
}
