const rota  = document.getElementById('rota');
rota.height = window.innerHeight;
rota.width  = 1400;

const ctx = rota.getContext('2d');
const car = new Car(100, 100, 70, 120);
car.createStructure(ctx);

animate();


function animate()
{
	car.update();
	
	rota.height = window.innerHeight;
	
	car.createStructure(ctx);

	requestAnimationFrame(animate);
}
