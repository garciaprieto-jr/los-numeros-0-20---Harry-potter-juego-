document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const gameContainer = document.getElementById('game-container');
    const startButton = document.getElementById('startButton');

    const playAudioBtn = document.getElementById('playAudioBtn');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');

    // Datos del juego: números, imágenes y audios del 0 al 20
    // NOTA: Reemplaza las URL de las imágenes y audios con tus propios archivos.
    const gameData = [
        { number: 0, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/00.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/00.png' },
        { number: 1, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/01.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/01.png' },
        { number: 2, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/02.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/02.png' },
        { number: 3, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/03.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/03.png' },
        { number: 4, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/04.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/04.png' },
        { number: 5, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/05.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/05.png' },
        { number: 6, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/06.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/06.png' },
        { number: 7, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/07.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/07.png' },
        { number: 8, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/08.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/08.png' },
        { number: 9, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/09.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/09.png' },
        { number: 10, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/10.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/refs/heads/garciaprieto-jr-img/10.png' },
        { number: 11, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/11.mp3', image: 'https://via.placeholder.com/150/4B0082?text=11' },
        { number: 12, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/12.mp3', image: 'https://via.placeholder.com/150/00FF7F?text=12' },
        { number: 13, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/13.mp3', image: 'https://via.placeholder.com/150/DC143C?text=13' },
        { number: 14, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/14.mp3', image: 'https://via.placeholder.com/150/0000FF?text=14' },
        { number: 15, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/15.mp3', image: 'https://via.placeholder.com/150/808000?text=15' },
        { number: 16, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/16.mp3', image: 'https://via.placeholder.com/150/FF1493?text=16' },
        { number: 17, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/17.mp3', image: 'https://via.placeholder.com/150/1E90FF?text=17' },
        { number: 18, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/18.mp3', image: 'https://via.placeholder.com/150/B22222?text=18' },
        { number: 19, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/19.mp3', image: 'https://via.placeholder.com/150/20B2AA?text=19' },
        { number: 20, audio: 'https://github.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/raw/refs/heads/garciaprieto-jr-audio/20.mp3', image: 'https://via.placeholder.com/150/483D8B?text=20' },
    ];
    
    let currentRoundData = {};
    let isClickable = false;

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const generateRound = () => {
        isClickable = true;
        feedback.textContent = '';
        nextBtn.style.display = 'none';
        optionsContainer.innerHTML = '';

        // Selecciona un número al azar de la lista completa
        const correctItem = gameData[Math.floor(Math.random() * gameData.length)];
        currentRoundData.correct = correctItem.number;
        currentRoundData.audio = new Audio(correctItem.audio);

        // Selecciona 3 opciones incorrectas
        const incorrectItems = gameData.filter(item => item.number !== correctItem.number);
        const shuffledIncorrects = shuffleArray(incorrectItems).slice(0, 3);
        
        const allOptions = [correctItem, ...shuffledIncorrects];
        const shuffledOptions = shuffleArray(allOptions);

        shuffledOptions.forEach(item => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.innerHTML = `<img src="${item.image}" alt="Opción ${item.number}" data-number="${item.number}">`;
            button.addEventListener('click', () => handleChoice(item.number, button));
            optionsContainer.appendChild(button);
        });

        playAudioBtn.onclick = () => {
            currentRoundData.audio.play();
        };

        setTimeout(() => {
            currentRoundData.audio.play();
        }, 500);
    };

    const handleChoice = (selectedNumber, selectedButton) => {
        if (!isClickable) return;

        isClickable = false;
        
        const isCorrect = selectedNumber === currentRoundData.correct;
        
        if (isCorrect) {
            feedback.textContent = '¡Correcto!';
            feedback.style.color = '#4CAF50';
            selectedButton.classList.add('correct');
        } else {
            feedback.textContent = '¡Incorrecto! Intenta de nuevo.';
            feedback.style.color = '#E53935';
            selectedButton.classList.add('incorrect');
            document.querySelector(`.option-btn img[data-number="${currentRoundData.correct}"]`).parentNode.classList.add('correct');
        }
        
        nextBtn.style.display = 'block';
    };

    const startGame = () => {
        startScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        generateRound(); 
    };

    startButton.addEventListener('click', startGame);
    nextBtn.addEventListener('click', generateRound);
});
