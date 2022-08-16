const rota  = document.getElementById('rota');
rota.height = window.innerHeight;
rota.width  = window.innerWidth;

let width  = window.innerWidth;
let height = window.innerHeight;

const ctx = rota.getContext('2d');
const car = new Car(width -(width*0.17), height-(height*0.22), 50, 80);
car.createStructure(ctx);

animate();

function animate()
{
	car.update();
	
	rota.height = window.innerHeight;
	
	car.createStructure(ctx);

	requestAnimationFrame(animate);
}

function restart() 
{
	document.location.reload(true);
}
