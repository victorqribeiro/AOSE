/* mundo ou grid */

let grid = {
	/* quantidade de tiles x e y (tamanho do mundo) */
	x: 10,
	y: 10,
	/* tamanho dos tiles - 10x10 tiles de 48 pixels */
	cell: 48,
	/* tempo da simulcao - 1 frame a cada meio segundo - 500 milisegundos */
	time: 500,
	simulation: true,
	/* dicionario de locais de incendio */
	fire: {},
	show: function(){
		for(let i = 0; i < grid.y; i++){
			for(let j = 0; j < grid.x; j++){
				c.drawImage(sprites.city,j*grid.cell,i*grid.cell,grid.cell,grid.cell);
				/* se houver um incendio no local yx desenha o fogo */
				if(this.fire[i+''+j]){
					c.drawImage(sprites.fire,j*grid.cell,i*grid.cell,grid.cell,grid.cell);
				}
			}
		}
	}
}
