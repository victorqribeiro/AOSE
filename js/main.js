/* carrega as sprites (imagens) da simulacao */
sprites.load();

/* cria elementos html para exibição da simulação */
let div = document.createElement('div');
div.id = "main";
let canvas = document.createElement('canvas');
canvas.width = w = grid.x * grid.cell;
canvas.height = h = grid.y * grid.cell;
let c = canvas.getContext('2d');
div.appendChild( canvas );
document.body.appendChild( div );

/* inicia a simulaçao - esse metodo eh chamado pela classe sprites, apos load das imagens */
function simulation(){
	c.clearRect(0,0,w,h);
	grid.show();
	cv.show();
	ft.show();
	pl.show();
	bandido.show();
	/* enquanto o bandido nao for pego, execute a simulacao */
	if(grid.simulation)
		setTimeout(simulation,grid.time);
}
