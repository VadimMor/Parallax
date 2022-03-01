window.onload = function() {
	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const bg = document.getElementById('bg');
		const text = document.getElementById('text');
		const man = document.getElementById('man');
		const clouds_1 = document.getElementById('clouds_1');
		const clouds_2 = document.getElementById('clouds_2');
		const mountain_left = document.getElementById('mountain_left');
		const mountain_right = document.getElementById('mountain_right');

		const speedMouse = 0.4;

		let positionX = 0, positionY = 0;
		let cordXprocent = 0, cordYprocent = 0;

		// Parallax при введение мыши
		function setMouseParallaxStyle() {
			const distX = cordXprocent - positionX;
			const distY = cordYprocent - positionY;

			positionX = positionX + (distX * speedMouse);
			positionY = positionY + (distY * speedMouse);

		requestAnimationFrame(setMouseParallaxStyle);
		}

		setMouseParallaxStyle();

		parallax.addEventListener('mousemove', function mousemove(e) {
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const cordX = e.pageX - parallaxWidth / 2;
			const cordY = e.pageX - parallaxHeight / 2;

			cordXprocent = cordX / parallaxWidth * 100;
			cordYprocent = cordY / parallaxHeight * 100;
		});

		// Parallax при скролле
		window.addEventListener('scroll', () => {
			let windowScrollY = window.pageYOffset;
			let windowWidth = window.innerWidth;
			let parallaxHeight = parallax.clientHeight;
			let p = windowScrollY / parallaxHeight;

			text.style.cssText = `transform: translateY(${-p*350}px)`
			man.style.cssText = `transform: scale(${1-p*0.2}) translateY(${p*100}px)`;
			mountain_left.style.cssText = `left: ${-windowScrollY / 1.7}px`;
			mountain_right.style.cssText = `left: ${windowScrollY / 1.7}px`;
		})


	}
}