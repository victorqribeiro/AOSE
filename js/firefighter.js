/* bombeiro */

let ft = {
	pos: {x:grid.x-1, y:grid.y-1},
	fireLocation: [],
	/* metodo que adiciona a posição de um incendio na lista apos ser comunicado pelo civil ou pela policia */
	addFire: function(fire){
		for(let i = 0; i < this.fireLocation.length; i++){
			if( fire[1] == this.fireLocation[i][1] && fire[0] == this.fireLocation[i][0])
				return;
		}
		this.fireLocation.push(fire);
	},
	/* metodo responsavel pela movimentaçao do bombeiro */
	moveTo: function(x,y){
		if( this.pos.x < x && this.pos.x + 1 < grid.x ){
			this.pos.x += 1;
			return;
		}
		if( this.pos.y < y && this.pos.y + 1 < grid.y ){
			this.pos.y += 1;
			return;
		}
		if( this.pos.x > x && this.pos.x - 1 > -1 ){
			this.pos.x -= 1;
			return;
		}
		if( this.pos.y > y && this.pos.y - 1 > -1 ){
			this.pos.y -= 1;
			return;
		}
	},
	/* mostra o bombeiro no mundo */
	show: function(){
		c.drawImage(sprites.ft,this.pos.x*grid.cell,this.pos.y*grid.cell,grid.cell,grid.cell);
		this.update();
	},
	update: function(){
		/* se achar o bandido aciona a policia */
		if( this.pos.x == bandido.pos.x && this.pos.y == bandido.pos.y ){
			pl.addLoc([this.pos.y,this.pos.x]);
		}
		/* anda ate o local informado do icendio, se achar um incendio no caminho apaga */
		if( this.fireLocation.length > 0 ){
			if( grid.fire[this.pos.y+''+this.pos.x] ){
				delete grid.fire[this.pos.y+''+this.pos.x];
			}
			this.moveTo( this.fireLocation[0][1], this.fireLocation[0][0] );
			if (this.pos.x == this.fireLocation[0][1] && this.pos.y == this.fireLocation[0][0]){
				delete grid.fire[this.fireLocation.shift().join('')];
			}
		}
	}
}
