// Quiz State
const quizState = {
  currentQuestion: 0,
  score: 0,
  answered: 0,
  answeredQuestions: new Set(),
  userAnswers: {},
  showingResults: false
};

// Make quizState available globally
window.quizState = quizState;

// Initialize Quiz when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
});

function initQuiz() {
  loadQuizProgress();
  renderQuestion();
  
  document.getElementById('prevQuestion').addEventListener('click', prevQuestion);
  document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
}

function renderQuestion() {
  const container = document.getElementById('questionContainer');
  const question = studyData.questions[quizState.currentQuestion];
  
  // Update question number display
  document.getElementById('questionNumber').textContent = 
    `Question ${quizState.currentQuestion + 1} of ${studyData.questions.length}`;
  document.getElementById('quizScore').textContent = 
    `Score: ${quizState.score}/${quizState.answered}`;
  
  // Check if this question was already answered
  const wasAnswered = quizState.answeredQuestions.has(question.id);
  const userAnswer = quizState.userAnswers[question.id];
  
  container.innerHTML = `
    <div class="question-text">${question.question}</div>
    <div class="options-container">
      ${question.options.map((option, index) => {
        let classes = 'option-btn';
        if (wasAnswered) {
          classes += ' disabled';
          if (index === question.correct) {
            classes += ' correct';
          } else if (index === userAnswer && userAnswer !== question.correct) {
            classes += ' incorrect';
          }
        }
        return `<button class="${classes}" data-index="${index}">${option}</button>`;
      }).join('')}
    </div>
    ${wasAnswered ? `
      <div class="rationale">
        <strong>Rationale:</strong> ${question.rationale}
      </div>
    ` : ''}
  `;
  
  // Add click handlers to options (only if not answered)
  if (!wasAnswered) {
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
    });
  }
  
  // Update navigation buttons
  document.getElementById('prevQuestion').disabled = quizState.currentQuestion === 0;
  
  const nextBtn = document.getElementById('nextQuestion');
  if (quizState.currentQuestion === studyData.questions.length - 1) {
    nextBtn.textContent = quizState.answeredQuestions.size === studyData.questions.length 
      ? 'View Results' : 'Next →';
  } else {
    nextBtn.textContent = 'Next →';
  }
}

function handleAnswer(selectedIndex) {
  const question = studyData.questions[quizState.currentQuestion];
  
  // Prevent answering again
  if (quizState.answeredQuestions.has(question.id)) return;
  
  // Record answer
  quizState.answeredQuestions.add(question.id);
  quizState.userAnswers[question.id] = selectedIndex;
  quizState.answered++;
  
  // Check if correct
  if (selectedIndex === question.correct) {
    quizState.score++;
  }
  
  // Save progress
  saveQuizProgress();
  if (window.updateProgress) window.updateProgress();
  
  // Re-render to show correct/incorrect and rationale
  renderQuestion();
}

function prevQuestion() {
  if (quizState.currentQuestion > 0) {
    quizState.currentQuestion--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (quizState.currentQuestion < studyData.questions.length - 1) {
    quizState.currentQuestion++;
    renderQuestion();
  } else if (quizState.answeredQuestions.size === studyData.questions.length) {
    showResults();
  }
}

function showResults() {
  const container = document.getElementById('questionContainer');
  const percentage = Math.round((quizState.score / studyData.questions.length) * 100);
  
  let message = '';
  let emoji = '';
  
  if (percentage >= 90) {
    message = 'Excellent! You\'re ready for the ATI exam!';
    emoji = '🌟';
  } else if (percentage >= 80) {
    message = 'Great job! Review the questions you missed.';
    emoji = '✨';
  } else if (percentage >= 70) {
    message = 'Good effort! Focus on the rationales for missed questions.';
    emoji = '📚';
  } else {
    message = 'Keep studying! Review the concepts and try again.';
    emoji = '💪';
  }
  
  container.innerHTML = `
    <div class="quiz-results">
      <div class="score-display">${emoji} ${percentage}%</div>
      <div class="score-message">${quizState.score} out of ${studyData.questions.length} correct</div>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${message}</p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button class="control-btn" onclick="reviewMissed()">Review Missed</button>
        <button class="control-btn" onclick="resetQuiz()" style="background: var(--warning);">Retake Quiz</button>
      </div>
    </div>
  `;
  
  // Hide navigation
  document.querySelector('.quiz-controls').style.display = 'none';
  document.querySelector('.quiz-progress').style.display = 'none';
  
  quizState.showingResults = true;
}

function reviewMissed() {
  // Find first missed question
  for (let i = 0; i < studyData.questions.length; i++) {
    const question = studyData.questions[i];
    if (quizState.userAnswers[question.id] !== question.correct) {
      quizState.currentQuestion = i;
      break;
    }
  }
  
  // Show navigation again
  document.querySelector('.quiz-controls').style.display = 'flex';
  document.querySelector('.quiz-progress').style.display = 'flex';
  
  quizState.showingResults = false;
  renderQuestion();
}

function resetQuiz() {
  quizState.currentQuestion = 0;
  quizState.score = 0;
  quizState.answered = 0;
  quizState.answeredQuestions.clear();
  quizState.userAnswers = {};
  quizState.showingResults = false;
  
  // Show navigation again
  document.querySelector('.quiz-controls').style.display = 'flex';
  document.querySelector('.quiz-progress').style.display = 'flex';
  
  saveQuizProgress();
  if (window.updateProgress) window.updateProgress();
  renderQuestion();
}

function saveQuizProgress() {
  const progress = {
    currentQuestion: quizState.currentQuestion,
    score: quizState.score,
    answered: quizState.answered,
    answeredQuestions: Array.from(quizState.answeredQuestions),
    userAnswers: quizState.userAnswers
  };
  localStorage.setItem('ati-mental-health-quiz', JSON.stringify(progress));
  
  // Also update main progress
  if (window.saveProgress) window.saveProgress();
}

function loadQuizProgress() {
  const saved = localStorage.getItem('ati-mental-health-quiz');
  if (saved) {
    const progress = JSON.parse(saved);
    quizState.currentQuestion = progress.currentQuestion || 0;
    quizState.score = progress.score || 0;
    quizState.answered = progress.answered || 0;
    quizState.answeredQuestions = new Set(progress.answeredQuestions || []);
    quizState.userAnswers = progress.userAnswers || {};
  }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (window.appState && window.appState.currentSection !== 'quiz') return;
  if (quizState.showingResults) return;
  
  if (e.key === 'ArrowLeft') {
    prevQuestion();
  } else if (e.key === 'ArrowRight') {
    nextQuestion();
  } else if (e.key >= '1' && e.key <= '4') {
    const index = parseInt(e.key) - 1;
    const question = studyData.questions[quizState.currentQuestion];
    if (!quizState.answeredQuestions.has(question.id)) {
      handleAnswer(index);
    }
  }
});
