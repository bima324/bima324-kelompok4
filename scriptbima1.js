var audio = document.getElementById("background-music");
var volumeControl = document.getElementById("volume");
var playlistSelect = document.getElementById("playlist-select");
var timeControl = document.getElementById("time");

var musicList = [
    "8 Letters.mp3",
    "Dandelions.mp3",
    "Lana Del Rey - Summertime Sadness (Lyrics).mp3",
    "Lana Del Rey - Yes To Heaven Lirik Terjemahan Indonesia.mp3",
    "One Direction - Night Changes.mp3",
    "Slipping Through My Fingers.mp3",
    
];

var currentMusicIndex = 0;

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function changeVolume() {
    audio.volume = volumeControl.value;
}

function changeMusic() {
    currentMusicIndex = playlistSelect.selectedIndex;
    audio.src = musicList[currentMusicIndex];
    audio.play();
    updateMusicTitle();
}

function previousMusic() {
    currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
    audio.src = musicList[currentMusicIndex];
    audio.play();
    updateMusicTitle();
}

function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
    audio.src = musicList[currentMusicIndex];
    audio.play();
    updateMusicTitle();
}

function updateMusicTitle() {
    var musicTitleElement = document.querySelector('.music-title');
    musicTitleElement.textContent = "Now Playing: " + musicList[currentMusicIndex];
}

function changeTime() {
    audio.currentTime = (audio.duration * timeControl.value) / 100;
    updateTimeDisplay();
}

function updateTimeDisplay() {
    var minutes = Math.floor(audio.currentTime / 60);
    var seconds = Math.floor(audio.currentTime % 60);
    var formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    timeControl.value = (audio.currentTime / audio.duration) * 100;
}

audio.addEventListener('timeupdate', updateTimeDisplay);

// Update display saat memulai
changeVolume();
updateMusicTitle();





const questions = [
    {
        question: "1.Apa yang dimaksud dengan arus listrik?",
        options: [
            "Aliran partikel bermuatan dalam suatu penghantar",
            "Aliran energi dalam suatu penghantar",
            "Aliran cairan dalam suatu penghantar"
        ],
        answer: "Aliran partikel bermuatan dalam suatu penghantar"
    },
    {
        question: "2.Satuan untuk arus listrik dalam sistem International (SI) adalah:",
        options: ["Ampere (A)", "Volt (V)", "Ohm (Ω)"],
        answer: "Ampere (A)"
    },
    {
        question: "3.Persamaan umum untuk menghitung arus listrik adalah:",
        options: ["I = V/R", "I = P/V", "I = Q/t"],
        answer: "I = Q/t"
    },
    {
        question: "4.Jika arus listrik sebesar 2 A mengalir selama 5 detik, berapakah total muatan yang melewati suatu titik dalam penghantar?",
        options: ["5 C", "10 C", "15 C"],
        answer: "10 C"
    },
    {
        question: "5.Satuan untuk arus listrik dalam sistem CGS (centimeter-gram-second) adalah:",
        options: ["Gauss", "Oersted", "Ampere"],
        answer: "Ampere"
    },
    {
        question: "6.Apa yang dimaksud dengan hukum Ohm?",
        options: [
            "Arus dalam suatu penghantar sebanding dengan beda potensial pada ujung-ujungnya",
            "Resistansi suatu penghantar tetap konstan",
            "Daya suatu penghantar sebanding dengan kuadrat arus yang mengalirinya"
        ],
        answer: "Arus dalam suatu penghantar sebanding dengan beda potensial pada ujung-ujungnya"
    },
    {
        question: "7.Satuan untuk resistansi dalam sistem International (SI) adalah:",
        options: ["Ohm (Ω)", "Ampere (A)", "Volt (V)"],
        answer: "Ohm (Ω)"
    },
    {
        question: "8.Persamaan untuk menghitung resistansi sebuah penghantar adalah:",
        options: ["R = V/I", "R = P/I^2", "R = Q/t"],
        answer: "R = V/I"
    },
    {
        question: "9.Jika sebuah penghantar memiliki resistansi sebesar 10 ohm dan arus yang mengalirinya adalah 2 A, berapakah tegangan yang diberikan pada penghantar tersebut?",
        options: ["20 V", "5 V", "15 V"],
        answer: "20 V"
    },
    {
        question: "10.pa yang dimaksud dengan hukum Faraday?",
        options: [
            "Perubahan medan magnetik menghasilkan gaya listrik",
            "Arus listrik menghasilkan medan magnet",
            "Hukum Ohm"
        ],
        answer: "Perubahan medan magnetik menghasilkan gaya listrik"
    },
    {
        question: "11.Satuan induksi magnetik dalam sistem International (SI) adalah:",
        options: ["Gauss", "Oersted", "Tesla"],
        answer: "Tesla"
    },
    {
        question: "12.Berapakah besar induksi magnetik pada jarak 10 cm dari kawat yang dialiri arus listrik 3 A, jika nilai permeabilitas vakum adalah \(4π \times 10^{-7}\) Tm/A?",
        options: ["6 × 10^-5 T", "9 × 10^-5 T", "12 × 10^-5 T"],
        answer: "6 × 10^-5 T"
    },
    {
        question: "13.Apakah arah medan magnetik di sekitar kawat yang dialiri arus listrik jika menggunakan aturan tangan kanan?",
        options: [
            "Sejajar dengan kawat dan keluar",
            "Sejajar dengan kawat dan masuk",
            "Tegak lurus dengan kawat dan searah dengan arah arus"
        ],
        answer: "Tegak lurus dengan kawat dan searah dengan arah arus"
    },
    {
        question: "14.Fenomena elektromagnetik yang menyebabkan terjadinya kilat disebut:",
        options: [
            "Induksi elektromagnetik",
            "Induksi magnetik",
            "Induksi elektrostatik"
        ],
        answer: "Induksi elektromagnetik"
    },
    {
        question: "15.Apakah yang dimaksud dengan induksi magnetik?",
        options: [
            "Kemampuan suatu benda untuk menarik benda lain yang memiliki sifat magnet",
            "Terbentuknya medan magnet di sekitar kawat yang dialiri arus listrik",
            "Perubahan medan magnet di sekitar kawat yang tidak dialiri arus listrik"
        ],
        answer: "Perubahan medan magnet di sekitar kawat yang tidak dialiri arus listrik"
    },
    {
        question: "16.Berapakah besar gaya magnetik yang dialami oleh kawat yang membentuk sudut 30 derajat terhadap medan magnetik sebesar 0,5 T jika arus yang mengalir di kawat tersebut adalah 4 A dan panjang kawat 2 m?",
        options: ["2 N", "3 N", "4 N"],
        answer: "4 N"
    },
    {
        question: "17.Siapa ilmuwan yang pertama kali menemukan fenomena induksi elektromagnetik?",
        options: ["James Clerk Maxwell", "Michael Faraday", "André-Marie Ampère"],
        answer: "Michael Faraday"
    },
    {
        question: "18.Sebuah kawat lurus panjang dialiri arus sebesar 5 A. Jika induksi magnetik di titik yang berjarak 10 cm dari kawat tersebut adalah \(2 \times 10^{-5}\) T, berapakah induksi magnetik pada jarak 20 cm dari kawat tersebut?",
        options: ["\(1 \times 10^{-5}\) T", "\(2 \times 10^{-5}\) T", "\(4 \times 10^{-5}\) T"],
        answer: "\(1 \times 10^{-5}\) T"
    },
    {
        question: "19.Fenomena di mana arus listrik dihasilkan oleh perubahan medan magnetik disebut:",
        options: ["Induksi listrik", "Induksi magnetik", "Konduksi"],
        answer: "Induksi listrik"
    },
    {
        question: "20.Bagaimana hubungan antara arah arus listrik dan arah medan magnetik yang dihasilkan pada kawat lurus?",
        options: ["Sejajar", "Berlawanan", "Tegak lurus"],
        answer: "Tegak lurus"
    },
    {
        question: "21.Salah satu aplikasi dari induksi magnetik adalah:",
        options: ["Pembuatan sirkuit listrik", "Pengisian baterai", "Penggunaan elektromagnet pada gitar listrik"],
        answer: "Pengisian baterai"
    }
];

let currentQuestion = 0;
let score = 0;


function displayQuestion() {
    const questionElement = document.getElementById('question');
    const options = questions[currentQuestion].options.map((option, index) => {
        return `<input type="radio" name="option" value="${option}" id="option${index}"><label for="option${index}">${option}</label><br>`;
    }).join('');
    questionElement.innerHTML = `<p>${questions[currentQuestion].question}</p>${options}`;
}


function checkAnswer() {
    const userAnswer = document.querySelector('input[name="option"]:checked');
    if (!userAnswer) {
        document.getElementById('result').innerHTML = "Silakan pilih satu jawaban!";
        return;
    }
    if (userAnswer.value === questions[currentQuestion].answer) {
        score++;
        document.getElementById('result').innerHTML = "Jawaban benar!";
    } else {
        document.getElementById('result').innerHTML = "Jawaban salah.";
    }
    document.getElementById('score').innerHTML = `Skor: ${score}`;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById('question').innerHTML = "<p>Quiz selesai!</p>";
        document.getElementById('answerInput').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    }
}


displayQuestion();
