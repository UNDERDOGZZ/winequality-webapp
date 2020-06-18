import React, { Component } from "react";
import "./info.css";

class Info extends Component {
	render() {
		return (
			<React.Fragment>
				<h4 className="styleTitle">Smart-Wine-Taster</h4>
				<p className="stylePara">
					Esta es una aplicación web para predecir la calidad de un vino a
					partir de 11 parametros utilizando redes neuronales.</p>
				
				<p className="stylePara">
					Con la finalidad de encontrar la mejor arquitectura de la red
					neuronal, se realizaron 2 ciclos con diferentes learning rates y
					diferentes épocas. El ciclo 1 dio como resultado las 5 mejores
					redes neuronales, en base a las características que componían esas
					redes, se realizó el ciclo 2 con la finalidad de testear mejor
					esas características y encontrar la red neuronal con mejores
					métricas. Esta última red neuronal encontrada, es la que se utilizó
					para el desarrollo de esta aplicación. A continuación se muestra el
					detalle de cada ciclo:</p>
				<p className="stylePara">
					Ciclo 1:<br></br>
					Numero de Redes Testeadas: 2064<br></br>
					Tiempo de ejecuccion: 4120 segundos<br></br>
							epocas = [10, 100, 500, 1000]<br></br>
							learningRates = [0.05, 0.1, 0.3]<br></br>
							activations = ["identity", "logistic", "tanh", "relu"]<br></br>
						capa ocultas:<br></br>
							- 1: Hasta 5 neuronas<br></br>
							- 2: Hasta 4 neuronas<br></br>
							- 3: Hasta 3 neuronas<br></br>
					</p>
				<p className="stylePara">
					* Neural Network number 0 - value: 0.354 id: 396 <br></br>
					*Hidden Layers: [3, 3] Activation Func: identity <br></br>
					Learning Rate: 0.05 Epocas: 1000<br></br>
					* Neural Network number 1 - value: 0.349 id: 362 <br></br>
					Hidden Layers: [3, 2] Activation Func: tanh <br></br>
					Learning Rate: 0.05 Epocas: 500<br></br>
					* Neural Network number 2 - value: 0.349 id: 1176 <br></br>
					Hidden Layers: [2, 4, 3] Activation Func: identity <br></br>
					Learning Rate: 0.05 Epocas: 500<br></br>
					* Neural Network number 3 - value: 0.349 id: 1596 <br></br>
					Hidden Layers: [4, 2, 2] Activation Func: identity <br></br>
					Learning Rate: 0.05 Epocas: 1000<br></br>
					* Neural Network number 4 - value: 0.347 id: 18 <br></br>
					Hidden Layers: [] Activation Func: tanh <br></br>
					Learning Rate: 0.1 Epocas: 100<br></br>
					</p>
				<p className="stylePara">
					Ciclo 2:<br></br>
					Numero de Redes Testeadas: 4127<br></br>
					Tiempo de ejecuccion: 9829 segundos<br></br>
							epocas = [200, 500, 1000, 2000]<br></br>
							learningRates = [0.05, 0.06, 0.07, 0.1]<br></br>
							activations = ["identity", "logistic", "tanh", "relu"]<br></br>
						capa ocultas:<br></br>
							- 1: Hasta 5 neuronas<br></br>
							- 2: Hasta 4 neuronas<br></br>
							- 3: Hasta 4 neuronas<br></br>
					</p>
					<p className="stylePara">
					* Neural Network number 0 - value: 0.367 id: 664<br></br>
					Hidden Layers: [2, 4] Activation Func: identity <br></br>
					Learning Rate: 0.07 Epocas: 2000<br></br>
					* Neural Network number 1 - value: 0.366 id: 1169 <br></br>
					Hidden Layers: [5, 3] Activation Func: logistic <br></br>
					Learning Rate: 0.05 Epocas: 1000<br></br>
					* Neural Network number 2 - value: 0.364 id: 282 <br></br>
					Hidden Layers: [5] Activation Func: tanh <br></br>
					Learning Rate: 0.07 Epocas: 2000<br></br>
					* Neural Network number 3 - value: 0.362 id: 1173 <br></br>
					Hidden Layers: [5, 3] Activation Func: logistic <br></br>
					Learning Rate: 0.06 Epocas: 1000<br></br>
					* Neural Network number 4 - value: 0.361 id: 1154 <br></br>
					Hidden Layers: [5, 3] Activation Func: tanh <br></br>
					Learning Rate: 0.05 Epocas: 500<br></br>
					</p>
					<p className="stylePara">
					Arquitectura Elegida:<br></br>
					* Neural Network number 0 - value: 0.367 id: 664<br></br>
					Hidden Layers: [2, 4] Activation Func: identity <br></br>
					Learning Rate: 0.07 Epocas: 2000<br></br>




				</p>
				<p className="stylePara">
					Dataset utilizado (UCI) {" "}
					<a href="https://archive.ics.uci.edu/ml/datasets/Wine+Quality">
						Visitar dataset
					</a>
				</p>
				<p className="stylePara">Repositorios git:</p>
				<p className="stylePara2">
					-{" "}
					<a href="https://github.com/UNDERDOGZZ/winequality-webapp">
						Frontend
					</a>
				</p>
				<p className="stylePara2">
					- <a href="https://github.com/UNDERDOGZZ/winequality-restapi">Backend</a>
				</p>{" "}
				<p className="stylePara">
					El frontend consume el api rest desarrollada en python utilizando el
					framework Flask. El frontend está desarrollado en React js.
				</p>
			</React.Fragment>
		);
	}
}

export default Info;
