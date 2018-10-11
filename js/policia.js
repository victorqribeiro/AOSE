/* policia */

let pl = {
	pos: {x:1, y:0},
	bandidoLoc: [],
	/* metodo que mantem as informacoes sobre a localizacao do bandido enviadas pelo bombeiro ou pelo civil */
	addLoc: function(loc){
		for(let i = 0; i < this.bandidoLoc.length; i++){
			if( loc[1] == this.bandidoLoc[i][1] && loc[0] == this.bandidoLoc[i][0])
				return;
		}
		this.bandidoLoc.push(loc);
	},
	/* implementa o modo de andar da policia */
	moveTo: function(x,y){
		/* se nao houver incendio onde deseja ir, ele anda, se não, chama o bombeiro */
		if( this.pos.x < x && this.pos.x + 1 < grid.x ){
			if( grid.fire[this.pos.y+''+(this.pos.x+1)] ){
				ft.addFire([this.pos.y,this.pos.x+1]);
			} else {
				this.pos.x += 1;
			}
			return;
		}
		if( this.pos.y < y && this.pos.y + 1 < grid.y ){
			if( grid.fire[(this.pos.y+1)+""+this.pos.x] ){
				ft.addFire([this.pos.y+1,this.pos.x]);
			}else{
				this.pos.y += 1;
			}
			return;
		}
		if( this.pos.x > x && this.pos.x - 1 > -1 ){
			if( grid.fire[this.pos.y+""+this.pos.x-1] ) {
				ft.addFire([this.pos.y,this.pos.x-1]);
			} else {
				this.pos.x -= 1;
			}
			return;
		}
		if( this.pos.y > y && this.pos.y - 1 > -1 ){
			if( grid.fire[(this.pos.y-1)+''+this.pos.x] ){
				ft.addFire([this.pos.y-1,this.pos.x]);
			}else{
				this.pos.y -= 1;
			}
			return;
		}
	},
	update: function(){
		/* se encontrar o bandido acaba a simulacao */
		if( this.pos.x == bandido.pos.x && this.pos.y == bandido.pos.y ){
			grid.simulation = false;
			return;
		}
		/* caminha ate a ultima localizacao do bandido informada pelo civil ou pelo bombeiro */
		if( this.bandidoLoc.length > 0 ){
			this.moveTo( this.bandidoLoc[0][1], this.bandidoLoc[0][0] );
			if (this.pos.x == this.bandidoLoc[0][1] && this.pos.y == this.bandidoLoc[0][0]){
				delete grid.fire[this.bandidoLoc.shift().join('')];
			}
		}
		
	},
	show: function(){
		c.drawImage(sprites.pl,this.pos.x*grid.cell,this.pos.y*grid.cell,grid.cell,grid.cell);
		this.update();
	}
}
