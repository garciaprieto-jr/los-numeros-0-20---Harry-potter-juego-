document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const gameContainer = document.getElementById('game-container');
    const startButton = document.getElementById('startButton');
    const playAudioBtn = document.getElementById('playAudioBtn');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');
    const character = document.getElementById('character');
    const chessboard = document.getElementById('chessboard');

    // URLs de los efectos de sonido y videos de "muerte"
    const soundEffectCorrect = 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/Right%20Answer.mp3';
    const soundEffectIncorrect = 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/Wrong%20Answer.mp3';
    
    const chessDeathVideos = [
        "https://youtu.be/J6qBwW01H1Y?si=L8Wj2k5y0d42lWk0",
        "https://youtu.be/J6qBwW01H1Y?si=L8Wj2k5y0d42lWk0",
        "https://youtu.be/J6qBwW01H1Y?si=L8Wj2k5y0d42lWk0"
    ];

    const gameData = [
        { number: 0, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/00.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/00.png' },
        { number: 1, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/01.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/01.png' },
        { number: 2, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/02.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/02.png' },
        { number: 3, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/03.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/03.png' },
        { number: 4, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/04.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/04.png' },
        { number: 5, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/05.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/05.png' },
        { number: 6, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/06.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/06.png' },
        { number: 7, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/07.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/07.png' },
        { number: 8, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/08.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/08.png' },
        { number: 9, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/09.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/09.png' },
        { number: 10, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/10.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/10.png' },
        { number: 11, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/11.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/11.png' },
        { number: 12, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/12.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/12.png' },
        { number: 13, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/13.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/13.png' },
        { number: 14, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/14.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/14.png' },
        { number: 15, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/15.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/15.png' },
        { number: 16, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/16.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/16.png' },
        { number: 17, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/17.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/17.png' },
        { number: 18, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/18.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/18.png' },
        { number: 19, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/19.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/19.png' },
        { number: 20, audio: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-audio/20.mp3', image: 'https://raw.githubusercontent.com/garciaprieto-jr/los-numeros-0-20---Harry-potter-juego-/garciaprieto-jr-img/20.png' },
    ];
    
    let currentRoundData = {};
    let isClickable = false;
    let characterPosition = { row: 7, col: 0 };
    const rows = 8;
    const cols = 8;
    let errorsCount = 0;

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
        chessboard.innerHTML = '';

        for (let i = 0; i < rows * cols; i++) {
            const square = document.createElement('div');
            chessboard.appendChild(square);
        }
        chessboard.appendChild(character);
        
        const correctItem = gameData[Math.floor(Math.random() * gameData.length)];
        currentRoundData.correct = correctItem.number;
        currentRoundData.audio = new Audio(correctItem.audio);

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
            feedback.textContent = '¡Correcto! ¡Avanza una casilla!';
            feedback.style.color = '#4CAF50';
            selectedButton.classList.add('correct');
            new Audio(soundEffectCorrect).play();

            characterPosition.col++;
            if (characterPosition.col >= cols) {
                characterPosition.col = 0;
                characterPosition.row--;
            }
            
            character.style.setProperty('--col', characterPosition.col);
            character.style.setProperty('--row', characterPosition.row);
        } else {
            feedback.textContent = '¡Incorrecto! ¡Ron es golpeado!';
            feedback.style.color = '#E53935';
            selectedButton.classList.add('incorrect');
            new Audio(soundEffectIncorrect).play();

            errorsCount++;

            if (errorsCount >= 3) {
                endGame("¡Game Over! La Reina Roja ha acabado con tu partida.");
                return;
            } else {
                const videoUrl = chessDeathVideos[errorsCount - 1];
                window.open(videoUrl, '_blank');
            }
            
            character.classList.add('hit');
            setTimeout(() => {
                character.classList.remove('hit');
            }, 500);
            
            document.querySelector(`.option-btn img[data-number="${currentRoundData.correct}"]`).parentNode.classList.add('correct');
        }
        
        nextBtn.style.display = 'block';
    };

    const endGame = (message) => {
        gameContainer.classList.add('hidden');
        startScreen.classList.remove('hidden');
        startButton.textContent = "Volver a empezar";
        document.getElementById('start-screen').querySelector('h1').textContent = message;
        
        // Reinicia las variables de estado del juego
        errorsCount = 0;
        characterPosition = { row: 7, col: 0 };
        character.style.setProperty('--col', characterPosition.col);
        character.style.setProperty('--row', characterPosition.row);
    };

    const startGame = () => {
        startScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        generateRound(); 
    };

    startButton.addEventListener('click', startGame);
    nextBtn.addEventListener('click', generateRound);
});
