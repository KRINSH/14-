// Генерация падающих звезд
function generateStars() {
	const starCount = 100; // Количество звезд
	const body = document.body;

	for (let i = 0; i < starCount; i++) {
			const star = document.createElement('div');
			star.classList.add('star');
			
			// Случайные начальные позиции
			star.style.left = `${Math.random() * 100}vw`;  // Случайная позиция по горизонтали
			star.style.top = `-${Math.random() * 50 + 20}vh`; // Начало сверху, за пределами экрана

			// Случайные параметры анимации
			star.style.animationDuration = `${Math.random() * 4 + 4}s`; // Падающие звезды от 4 до 8 секунд
			star.style.animationDelay = `${Math.random() * 3}s`; // Случайная задержка

			body.appendChild(star);
	}
}

// Генерация падающих сердечек
function generateHearts() {
	const heartCount = 50; // Количество сердечек
	const body = document.body;

	for (let i = 0; i < heartCount; i++) {
			const heart = document.createElement('div');
			heart.classList.add('heart');
			heart.textContent = '❤️';

			// Случайные начальные позиции
			heart.style.left = `${Math.random() * 100}vw`;  // Случайная позиция по горизонтали
			heart.style.top = `-${Math.random() * 50 + 20}vh`; // Начало сверху, за пределами экрана

			// Случайные параметры анимации
			heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Падение от 5 до 10 секунд
			heart.style.animationDelay = `${Math.random() * 3}s`; // Случайная задержка

			
			body.appendChild(heart);
	}
}

// Вызов функций для генерации элементов
generateStars();
generateHearts();
