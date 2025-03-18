export const configurazione = {
  testo: "CC",
  dimensione: 1,
  interlinea: 0.01,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",
  mostraTestoSotto: true,
  mostraTestoSopra: false,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza
 * @property {number} unita - Unita' di misura di riferimento
 * @property {number} volume - Il volume del microfono
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation)
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt)
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt)
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  push();
  translate(x, y);
  rotate(frameCount * 0.1); // 让星星缓慢旋转

  // noFill();
  // stroke(0);

  //------------------------------------------------------------------------------
  // 利用方向数据影响颜色
  // Map alpha (z-rotation) to hue (0-360)
  //const hue = map(alpha, 0, 360, 0, 360);

  // Map beta (front-to-back tilt) to saturation (50-100)
  //const saturation = map(abs(beta), 0, 90, 50, 100);

  // Map gamma (left-to-right tilt) to brightness (50-100)
  //const brightness = map(abs(gamma), 0, 90, 50, 100);

  //内部填充矩形
  //colorMode(HSB, 360, 100, 100);
  //fill(hue, saturation, brightness);
  //noStroke()
  //rectMode(CENTER);
  //rotate(frameCount + indice);

  // 根据设备倾斜度增加轻微变化
  //scale(1 + volume * 10 + (abs(gamma) / 90) * 0.5);
  //rect(0, 0, unita / 4);
  //pop();

  //-------------------------------------------------------------------------------
  // 用星星代替矩形
  let starSize = unita * 0.5 * (1 + volume * 5 + abs(gamma) / 90); // 根据音量和设备角度变化
  angleMode(RADIANS);
  drawStar(0, 0, starSize, starSize * 0.5, 5);
  pop();
}

/**
 * Funzione per disegnare una stella a cinque punte
 * @param {number} x - Coordinata X del centro
 * @param {number} y - Coordinata Y del centro
 * @param {number} raggio1 - Raggio esterno della stella
 * @param {number} raggio2 - Raggio interno della stella
 * @param {number} nPunti - Numero di punte (default: 5)
 */
function drawStar(x, y, raggio1, raggio2, nPunti) {
  let angolo = TWO_PI / nPunti;
  let metaAngolo = angolo / 2.0;

  beginShape();
  for (let i = 0; i < TWO_PI; i += angolo) {
    let sx = x + cos(i) * raggio1;
    let sy = y + sin(i) * raggio1;
    vertex(sx, sy);
    sx = x + cos(i + metaAngolo) * raggio2;
    sy = y + sin(i + metaAngolo) * raggio2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//

export function caricamentoRisorse() {}

export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background(255);

  fill("deeppink");
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  //   stroke("white");
  //   noFill();
  //   disegnaTesto();
}
