/* bandido ou piromaniaco */
let bandido = {
	pos: {x: Math.floor(grid.x/2), y: Math.floor(grid.y/2)},
	/* faz as açoes do bandido */
	update: function(){
		if(!grid.simulation)
			return
		/* escolhe uma posição aleatoria para andar */
		let r = Math.random();
		/* escolhe uma chance de causar um incendio */
		let f = Math.random();
		/* o bandido tem a mesma probabilidade de ir pro norte, sul, leste o ou oeste */
		if( r < 0.25 ){
			if( this.pos.x+1 < grid.x && !grid.fire[this.pos.y+''+(this.pos.x+1)] )
				this.pos.x += 1;
				/* apos escolher para que lado vai andar, veririca a probabilidade (1/6) ~= 0.17 de causar um incendio */
				if( f < 0.17 )
					/* adiciona um incedio no mundo (grid) */
					grid.fire[this.pos.y+''+this.pos.x-1] = true;
		}else if(r < 0.5){
			if( this.pos.x-1 > -1 && !grid.fire[this.pos.y+''+(this.pos.x-1)] )
				this.pos.x -= 1;
				if( f < 0.17 )
					grid.fire[this.pos.y+''+this.pos.x+1] = true;
		}else if(r < 0.75){
			if( this.pos.y + 1 < grid.y && !grid.fire[(this.pos.y+1)+''+this.pos.x] )
				this.pos.y += 1;
				if( f < 0.17 )
					grid.fire[this.pos.y-1+''+this.pos.x] = true;
		}else{
			if( this.pos.y - 1 > -1 && !grid.fire[(this.pos.y-1)+''+this.pos.x] ) 
				this.pos.y -= 1;
				if( f < 0.17 )
					grid.fire[this.pos.y+1+''+this.pos.x] = true;
		}
	},
	show: function(){
		c.drawImage(sprites.bandido,this.pos.x*grid.cell,this.pos.y*grid.cell,grid.cell,grid.cell);
		this.update();
	}
}
