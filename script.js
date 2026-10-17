
document.addEventListener("DOMContentLoaded", function () {
    console.log("SiagaBencana 3D berhasil dimuat!");

    const materials = {
        sebelum: {
            label: "TAHAP 1",
            title: "Persiapkan Diri Sebelum Gempa",
            description:
                "Kesiapsiagaan dimulai dari rumah dan lingkungan sekitar.",
            points: [
                "Kenali jalur evakuasi dan tempat berkumpul yang aman.",
                "Siapkan tas siaga berisi kebutuhan darurat.",
                "Pastikan perabot berat terpasang dengan aman.",
                "Ketahui cara melindungi diri saat guncangan terjadi."
            ],
            note:
                "Tips: diskusikan rencana evakuasi bersama keluarga."
        },

        saat: {
            label: "TAHAP 2",
            title: "Lindungi Diri Saat Gempa",
            description:
                "Ketika guncangan terjadi, utamakan perlindungan diri dan hindari benda yang dapat jatuh.",
            points: [
                "Merunduk, berlindung di bawah meja yang kokoh, dan berpegangan jika tersedia.",
                "Lindungi kepala dan leher dari benda yang jatuh.",
                "Jauhi jendela, kaca, lemari, dan benda yang mudah roboh.",
                "Jika berada di luar, menjauhlah dari bangunan, tiang, dan kabel listrik."
            ],
            note:
                "Penting: jangan berlari menuju tangga atau keluar gedung saat guncangan masih berlangsung. Ikuti prosedur keselamatan setempat."
        },

        setelah: {
            label: "TAHAP 3",
            title: "Tetap Waspada Setelah Gempa",
            description:
                "Setelah guncangan berhenti, periksa keadaan sekitar dan waspadai kemungkinan bahaya lanjutan.",
            points: [
                "Periksa kondisi diri dan bantu orang yang terluka jika aman dilakukan.",
                "Keluar dari bangunan yang rusak melalui jalur aman setelah guncangan berhenti.",
                "Waspadai gempa susulan dan jauhi bangunan yang mengalami kerusakan.",
                "Ikuti informasi dan instruksi dari pihak berwenang."
            ],
            note:
                "Penting: jika berada di wilayah pesisir dan merasakan gempa kuat atau lama, segera menuju tempat tinggi atau menjauhi pantai sesuai panduan evakuasi tsunami setempat."
        }
    };

    const buttons = document.querySelectorAll(".material-btn");
    const label = document.getElementById("material-label");
    const title = document.getElementById("material-title");
    const description = document.getElementById("material-description");
    const list = document.getElementById("material-list");
    const note = document.getElementById("material-note");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const topic = button.dataset.topic;
            const material = materials[topic];

            if (!material) return;

            label.textContent = material.label;
            title.textContent = material.title;
            description.textContent = material.description;
            note.textContent = material.note;

            list.replaceChildren();

            material.points.forEach(function (point) {
                const item = document.createElement("li");
                item.textContent = point;
                list.appendChild(item);
            });

            buttons.forEach(function (item) {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");
        });
    });

    buttons.forEach(function (button) {
        button.setAttribute(
            "aria-pressed",
            button.classList.contains("active") ? "true" : "false"
        );
    });
});



/* INTERAKSI PANEL MITIGASI GEMPA */
document.addEventListener("DOMContentLoaded", function () {
  const mitigationButtons = document.querySelectorAll(".mitigation-btn");
  const mitigationTitle = document.getElementById("mitigation-title");
  const mitigationDescription = document.getElementById("mitigation-description");
  const mitigationList = document.getElementById("mitigation-list");

  const mitigationData = {
    sebelum: {
      title: "Sebelum Gempa",
      description:
        "Persiapkan lingkungan dan perlengkapan agar lebih siap menghadapi gempa bumi.",
      items: [
        "Kenali jalur evakuasi dan tempat berlindung yang aman.",
        "Amankan lemari serta benda berat agar tidak mudah jatuh.",
        "Siapkan tas siaga berisi kebutuhan darurat."
      ]
    },

    saat: {
      title: "Saat Gempa",
      description:
        "Lindungi diri ketika guncangan terjadi dan hindari tindakan yang membahayakan.",
      items: [
        "Merunduk, berlindung, dan berpegangan (Drop, Cover, and Hold On).",
        "Lindungi kepala dan leher dari benda yang jatuh.",
        "Jauhi kaca, jendela, dan benda yang mudah roboh."
      ]
    },

    setelah: {
      title: "Setelah Gempa",
      description:
        "Periksa keadaan sekitar dan ikuti arahan keselamatan setelah guncangan berhenti.",
      items: [
        "Periksa kondisi diri dan bantu orang lain jika aman.",
        "Jika bangunan rusak, keluar dengan hati-hati melalui jalur aman.",
        "Waspadai gempa susulan dan ikuti informasi resmi."
      ]
    }
  };

  mitigationButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const stage = button.dataset.stage;
      const data = mitigationData[stage];

      if (!data) return;

      mitigationTitle.textContent = data.title;
      mitigationDescription.textContent = data.description;

      mitigationList.replaceChildren();

      data.items.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        mitigationList.appendChild(listItem);
      });

      mitigationButtons.forEach(function (btn) {
        btn.classList.toggle("active", btn === button);
      });
    });
  });
});




/* KUIS INTERAKTIF SIAGABENCANA 3D */
document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("earthquake-quiz");

  // Aman jika elemen kuis belum ada di halaman.
  if (!quizForm) return;

  const questionsContainer = document.getElementById("quiz-questions");
  const progressText = document.getElementById("quiz-progress-text");
  const progressBar = document.getElementById("quiz-progress-bar");
  const feedback = document.getElementById("quiz-feedback");
  const nextButton = document.getElementById("quiz-next");
  const submitButton = document.getElementById("quiz-submit");
  const restartButton = document.getElementById("quiz-restart");
  const resultPanel = document.getElementById("quiz-result");
  const finalScore = document.getElementById("quiz-final-score");
  const resultMessage = document.getElementById("quiz-result-message");
  const playAgainButton = document.getElementById("quiz-play-again");

  const questions = [
    {
      question: "Apa yang sebaiknya dilakukan sebelum terjadi gempa?",
      options: [
        "Mengabaikan jalur evakuasi",
        "Mengamankan benda berat dan menyiapkan tas siaga",
        "Berdiri dekat jendela"
      ],
      answer: 1,
      explanation:
        "Persiapan lingkungan dan tas siaga membantu meningkatkan kesiapsiagaan."
    },
    {
      question: "Apa arti Drop, Cover, and Hold On saat gempa?",
      options: [
        "Berlari menuju lift",
        "Berdiri di dekat kaca",
        "Merunduk, berlindung, dan berpegangan"
      ],
      answer: 2,
      explanation:
        "Lindungi kepala dan leher, berlindung di bawah meja yang kokoh jika tersedia, lalu berpegangan."
    },
    {
      question: "Di mana sebaiknya berlindung saat berada di dalam bangunan ketika gempa?",
      options: [
        "Di bawah meja yang kokoh, sambil melindungi kepala dan leher",
        "Di dekat lemari tinggi",
        "Di depan jendela kaca"
      ],
      answer: 0,
      explanation:
        "Meja kokoh dapat membantu melindungi dari benda yang jatuh. Jauhi kaca dan benda yang mudah roboh."
    },
    {
      question: "Apa yang perlu dilakukan setelah guncangan berhenti?",
      options: [
        "Langsung masuk kembali ke bangunan yang rusak",
        "Memeriksa kondisi, keluar dengan hati-hati jika perlu, dan mengikuti informasi resmi",
        "Menggunakan lift untuk turun secepat mungkin"
      ],
      answer: 1,
      explanation:
        "Waspadai kerusakan dan gempa susulan. Jangan menggunakan lift saat evakuasi."
    },
    {
      question: "Jika berada di luar ruangan saat gempa, tindakan yang tepat adalah...",
      options: [
        "Mendekati tiang dan kabel listrik",
        "Berdiri di dekat dinding bangunan",
        "Menjauh dari bangunan, tiang, dan kabel listrik"
      ],
      answer: 2,
      explanation:
        "Cari area terbuka dan jauhi bangunan, tiang, serta kabel listrik yang berpotensi membahayakan."
    }
  ];

  let currentQuestion = 0;
  let answers = Array(questions.length).fill(null);
  let submitted = false;

  function renderQuestion() {
    const item = questions[currentQuestion];

    progressText.textContent =
      "Pertanyaan " + (currentQuestion + 1) +
      " dari " + questions.length;

    progressBar.style.width =
      ((currentQuestion + 1) / questions.length * 100) + "%";

    questionsContainer.replaceChildren();

    const title = document.createElement("h3");
    title.className = "quiz-question-title";
    title.textContent = (currentQuestion + 1) + ". " + item.question;
    questionsContainer.appendChild(title);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    item.options.forEach(function (option, index) {
      const label = document.createElement("label");
      label.className = "quiz-option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz-answer";
      radio.value = index;
      radio.checked = answers[currentQuestion] === index;

      radio.addEventListener("change", function () {
        answers[currentQuestion] = index;
        feedback.textContent = "";
      });

      const text = document.createElement("span");
      text.textContent = option;

      label.append(radio, text);
      optionsWrapper.appendChild(label);
    });

    questionsContainer.appendChild(optionsWrapper);

    feedback.textContent = "";
    nextButton.hidden = currentQuestion === questions.length - 1;
    submitButton.hidden = currentQuestion !== questions.length - 1;
  }

  function showResult() {
    const correct = questions.reduce(function (total, question, index) {
      return total + (answers[index] === question.answer ? 1 : 0);
    }, 0);

    const score = Math.round(correct / questions.length * 100);

    quizForm.hidden = true;
    resultPanel.hidden = false;
    finalScore.textContent = score + " / 100";
    resultMessage.textContent =
      "Jawaban benar: " + correct + " dari " + questions.length + ". " +
      (score >= 80
        ? "Bagus! Kamu sudah memahami dasar mitigasi gempa."
        : score >= 60
          ? "Cukup baik! Pelajari kembali materi untuk meningkatkan pemahaman."
          : "Tetap semangat! Pelajari kembali materi mitigasi lalu coba lagi.");
  }

  nextButton.addEventListener("click", function () {
    if (answers[currentQuestion] === null) {
      feedback.textContent = "Pilih satu jawaban terlebih dahulu, ya.";
      return;
    }

    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      renderQuestion();
    }
  });

  
    quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Cegah hasil ditampilkan jika masih ada jawaban kosong.
    const unansweredIndex = answers.findIndex(function (answer) {
        return answer === null;
    });

    if (unansweredIndex !== -1) {
        currentQuestion = unansweredIndex;
        renderQuestion();

        feedback.textContent =
        "Soal nomor " + (unansweredIndex + 1) +
        " belum dijawab. Silakan jawab semua soal terlebih dahulu.";

        return;
    }

    if (submitted) return;

    submitted = true;
    showResult();
    });

  function restartQuiz() {
    currentQuestion = 0;
    answers = Array(questions.length).fill(null);
    submitted = false;
    quizForm.hidden = false;
    resultPanel.hidden = true;
    renderQuestion();
  }

  restartButton.addEventListener("click", restartQuiz);
  playAgainButton.addEventListener("click", restartQuiz);

  renderQuestion();
});
