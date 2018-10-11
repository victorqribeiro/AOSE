/* sprites ou imagens */

let sprites = {
	fire: new Image(),
	ft: new Image(),
	pl: new Image(),
	cv: new Image(),
	bandido: new Image(),
	city: new Image(),
	loaded: 0,
	/* carrega a imagem e confere se as outras já estao carregadas */
	load: function(){
		this.fire.src = 'img/fire.png';
		this.fire.onload = () => { this.loaded+=1; this.check(); }
		this.ft.src = 'img/bombeiro.png';
		this.ft.onload = () => { this.loaded+=1; this.check(); }
		this.pl.src = 'img/policia.png';
		this.pl.onload = () => { this.loaded+=1; this.check(); }
		this.cv.src = 'img/civil.png';
		this.cv.onload = () => { this.loaded+=1; this.check(); }
		this.bandido.src = 'img/bandido.png';
		this.bandido.onload = () => { this.loaded+=1; this.check(); }
		this.city.src = 'img/city.png';
		this.city.onload = () => { this.loaded+=1; this.check(); }
	},
	/* se todas as imagens foram carregadas inicia a simulação */
	check: function(){
		if(this.loaded == 6){
			simulation();
		}
	}
}
