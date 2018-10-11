/* Civil */

let cv = {
	pos: {x: 0, y: 0},
	/* Faz toda ação referente ao civil */
	update: function(){
		/* se o civil encontrar o bandido, aciona a policia */
		if( this.pos.x == bandido.pos.x && this.pos.y == bandido.pos.y ){
			pl.addLoc([this.pos.y,this.pos.x]);
		}
		/* se o lugar onde o civil deseja ir conter um incendio, chama o bombeiro */
		if ( this.pos.x+1 == grid.x && grid.fire[(this.pos.y+1)+''+0] ){
			ft.addFire([this.pos.y+1,0]);
		}else	if ( grid.fire[this.pos.y+""+(this.pos.x+1)] ){
			ft.addFire([this.pos.y,this.pos.x+1]);
		}else{
			if( this.pos.x+1 < grid.x ){
				this.pos.x += 1;
			}else{
				if( this.pos.y+1 < grid.y){
					this.pos.x = 0;
					this.pos.y += 1;
				}
			}
			if(this.pos.x == grid.x-1 && this.pos.y == grid.y-1){
				if(!grid.fire['00']){
					this.pos.x = 0;
					this.pos.y = 0;
				}else{
					ft.addFire([0,0]);
				}
			}
		}
	},
	/* Desenha o civil no mapa */
	show: function(){
		c.drawImage(sprites.cv,this.pos.x*grid.cell,this.pos.y*grid.cell,grid.cell,grid.cell);
		this.update();
	}
}
