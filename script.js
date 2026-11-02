
const translations = {
    en: {
        subtitle: "A LITTLE WORLD, MADE JUST FOR YOU",
        title: "Welcome to<br>My Soul",
        description: "Somewhere in this universe,<br>there's someone who makes my days brighter.",
        sunshine: "My Sunshine ☀️",
        enter: "Enter my Soul ❤️"
    },

    fr: {
        subtitle: "UN PETIT MONDE, CRÉÉ JUSTE POUR TOI",
        title: "Bienvenue dans<br>Notre Petit Univers",
        description: "Quelque part dans cet univers,<br>il y a quelqu'un qui illumine mes journées.",
        sunshine: "Mon rayon de soleil ☀️",
        enter: "Bienvenue dans mon âme ❤️"
    }
};

function setLanguage(language) {
    const text = translations[language];

    document.getElementById("subtitle").textContent = text.subtitle;
    document.getElementById("title").innerHTML = text.title;
    document.getElementById("description").innerHTML = text.description;
    document.getElementById("sunshine").textContent = text.sunshine;
    document.getElementById("enterButton").textContent = text.enter;

    document.documentElement.lang = language;
}

function enterUniverse() {
    window.location.href = "memories.html";
}

const memoryTranslations = {
    en: {
        title: "Our Little Memories",
        subtitle: "Every little moment with you is special.",
        cards: [
            ["A little happiness", "Click to open"],
            ["My favorite person", "Click to open"],
            ["A special wish", "Click to open"]
        ],
        photo: "One of my favorite moments ❤️",
        button: "One more thing... 💌",
        messages: [
            "You make ordinary days feel magical. ✨",
            "If I could choose someone to spend my time with, I'd choose you. 💗",
            "I hope we have a million beautiful memories ahead of us. 🌙"
        ]
    },

    fr: {
        title: "Nos petits souvenirs",
        subtitle: "Chaque petit moment avec toi est spécial.",
        cards: [
            ["Un peu de bonheur", "Clique pour ouvrir"],
            ["Ma personne préférée", "Clique pour ouvrir"],
            ["Un souhait spécial", "Clique pour ouvrir"]
        ],
        photo: "Un de mes moments préférés ❤️",
        button: "Encore une petite chose... 💌",
        messages: [
            "Tu rends les journées ordinaires magiques. ✨",
            "Si je pouvais choisir quelqu'un avec qui passer mon temps, ce serait toi. 💗",
            "J'espère qu'on aura un million de beaux souvenirs ensemble. 🌙"
        ]
    }
};

function setMemoryLanguage(language) {
    const t = memoryTranslations[language];

    document.documentElement.lang = language;

    document.getElementById("memory-subtitle").textContent = t.subtitle;

    for (let i = 0; i < 3; i++) {
        document.getElementById(`card-title-${i + 1}`).textContent =
            t.cards[i][0];

        document.getElementById(`card-text-${i + 1}`).textContent =
            t.cards[i][1];
    }

    document.getElementById("photo-caption").textContent = t.photo;
    document.getElementById("question-button").textContent = t.button;
}

function openMemory(number) {
    const language = document.documentElement.lang === "fr" ? "fr" : "en";

    const message = memoryTranslations[language].messages[number - 1];

    alert(message);
}

function goToQuestion() {
    window.location.href = "question.html";
}

const questionTranslations = {
    en: {
        subtitle: "I HAVE SOMETHING TO ASK YOU...",
        title: "Will you be<br>mine?",
        description: "You've made my little universe brighter.<br>And I have one very important question...",
        yes: "YES! 💖",
        no: "NO",
        footer: "Choose wisely, my sunshine ☀️",
        successTitle: "YOU MADE ME THE HAPPIEST! ❤️",
        successMessage: "I can't wait to create a million beautiful memories with you.",
        signature: "I love you, my sunshine ☀️"
    },

    fr: {
        subtitle: "J'AI QUELQUE CHOSE À TE DEMANDER...",
        title: "Veux-tu être<br>à moi ?",
        description: "Tu illumines mon petit univers.<br>Et j'ai une question très importante...",
        yes: "OUI ! 💖",
        no: "NON",
        footer: "Choisis bien, mon rayon de soleil ☀️",
        successTitle: "TU ME RENDS TELLEMENT HEUREUSE ! ❤️",
        successMessage: "J'ai hâte de créer un million de beaux souvenirs avec toi.",
        signature: "Je t'aime, mon rayon de soleil ☀️"
    }
};

function setQuestionLanguage(language) {
    const t = questionTranslations[language];

    document.documentElement.lang = language;

    document.getElementById("question-subtitle").textContent = t.subtitle;
    document.getElementById("question-title").innerHTML = t.title;
    document.getElementById("question-description").innerHTML = t.description;
    document.getElementById("yes-button").textContent = t.yes;
    document.getElementById("no-button").textContent = t.no;
    document.getElementById("question-footer").textContent = t.footer;

    document.getElementById("success-title").textContent = t.successTitle;
    document.getElementById("success-message").textContent = t.successMessage;
    document.getElementById("success-signature").textContent = t.signature;
}

function sayYes() {
    document.getElementById("celebration").classList.remove("hidden");

    createHearts();
}

function createHearts() {
    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("div");

        heart.textContent = ["❤️", "💗", "💕", "💖", "✨"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = "25px";
        heart.style.zIndex = "20";
        heart.style.pointerEvents = "none";
        heart.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}

const noButton = document.getElementById("no-button");

function moveNoButton() {
    const maxX = Math.max(0, window.innerWidth - noButton.offsetWidth - 20);
    const maxY = Math.max(0, window.innerHeight - noButton.offsetHeight - 20);

    noButton.style.position = "fixed";
    noButton.style.left = Math.random() * maxX + "px";
    noButton.style.top = Math.random() * maxY + "px";
}

noButton.addEventListener("pointerenter", moveNoButton);
noButton.addEventListener("click", moveNoButton);
