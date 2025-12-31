// App State
const appState = {
  currentSection: 'concepts',
  flashcardIndex: 0,
  flashcards: [],
  knownCards: new Set(),
  reviewCards: new Set(),
  conceptsViewed: new Set()
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderConcepts();
  renderLabs();
  renderMeds();
  renderCriticalPoints();
  initFlashcards();
  updateProgress();
  setLastUpdated();
  loadProgress();
});

// Navigation
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      switchSection(section);
      
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function switchSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
  appState.currentSection = sectionId;
}

// Render Concepts
function renderConcepts() {
  const container = document.getElementById('conceptsContainer');
  container.innerHTML = '';
  
  studyData.concepts.forEach((concept, index) => {
    const card = document.createElement('div');
    card.className = 'concept-card';
    card.innerHTML = `
      <div class="concept-header" onclick="toggleConcept(${index})">
        <h3>${concept.title}</h3>
        <span class="concept-toggle">▼</span>
      </div>
      <div class="concept-content">
        <p class="concept-description">${concept.content}</p>
        <div class="concept-section">
          <h4>Key Points</h4>
          <ul>
            ${concept.keyPoints.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>
        <div class="concept-section">
          <h4>Nursing Interventions</h4>
          <ul class="intervention-list">
            ${concept.nursingInterventions.map(intervention => `<li>${intervention}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleConcept(index) {
  const cards = document.querySelectorAll('.concept-card');
  const card = cards[index];
  card.classList.toggle('open');
  
  if (card.classList.contains('open')) {
    appState.conceptsViewed.add(index);
    saveProgress();
    updateProgress();
  }
}

// Render Labs
function renderLabs() {
  const container = document.getElementById('labsContainer');
  container.innerHTML = '';
  
  studyData.labValues.forEach(lab => {
    const card = document.createElement('div');
    card.className = 'lab-card';
    card.innerHTML = `
      <h3>${lab.name}</h3>
      <div class="lab-values">
        <div class="lab-value-item">
          <div class="label">Normal Range</div>
          <div class="value">${lab.normalRange}</div>
        </div>
        <div class="lab-value-item">
          <div class="label">Critical Values</div>
          <div class="value critical">${lab.criticalValues}</div>
        </div>
      </div>
      <div class="lab-nursing">
        <strong>Nursing Considerations:</strong> ${lab.nursingConsiderations}
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Medications
function renderMeds() {
  const container = document.getElementById('medsContainer');
  container.innerHTML = '';
  
  studyData.medications.forEach(med => {
    const card = document.createElement('div');
    card.className = 'med-card';
    card.innerHTML = `
      <div class="med-header">
        <h3>${med.name}</h3>
        <div class="brand-name">(${med.brandName})</div>
        <span class="drug-class">${med.drugClass}</span>
      </div>
      
      <div class="med-section">
        <h4>Mechanism of Action</h4>
        <p>${med.mechanism}</p>
      </div>
      
      <div class="med-section">
        <h4>Uses</h4>
        <ul>
          ${med.uses.map(use => `<li>${use}</li>`).join('')}
        </ul>
      </div>
      
      <div class="med-section">
        <h4>Nursing Considerations</h4>
        <ul>
          ${med.nursingConsiderations.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
      
      <div class="med-section side-effects">
        <h4>Side Effects / Adverse Reactions</h4>
        <ul>
          ${med.sideEffects.map(se => `<li>${se}</li>`).join('')}
        </ul>
      </div>
      
      <div class="antidote">
        <strong>Antidote:</strong> ${med.antidote}
      </div>
      
      <div class="med-section">
        <h4>Patient Teaching</h4>
        <p>${med.patientTeaching}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Critical Points
function renderCriticalPoints() {
  const container = document.getElementById('criticalContainer');
  container.innerHTML = '';
  
  studyData.criticalPoints.forEach(point => {
    const card = document.createElement('div');
    card.className = 'critical-card';
    card.innerHTML = `
      <h3>${point.title}</h3>
      <p>${point.content}</p>
    `;
    container.appendChild(card);
  });
}

// Flashcard System
function initFlashcards() {
  appState.flashcards = [...studyData.flashcards];
  
  document.getElementById('flashcard').addEventListener('click', flipCard);
  document.getElementById('prevCard').addEventListener('click', prevCard);
  document.getElementById('nextCard').addEventListener('click', nextCard);
  document.getElementById('shuffleCards').addEventListener('click', shuffleCards);
  document.getElementById('resetCards').addEventListener('click', resetCards);
  document.getElementById('markKnown').addEventListener('click', markKnown);
  document.getElementById('markReview').addEventListener('click', markReview);
  
  renderCurrentCard();
}

function renderCurrentCard() {
  const card = appState.flashcards[appState.flashcardIndex];
  document.getElementById('cardFront').textContent = card.front;
  document.getElementById('cardBack').textContent = card.back;
  document.getElementById('cardCounter').textContent = 
    `Card ${appState.flashcardIndex + 1} of ${appState.flashcards.length}`;
  
  // Remove flipped state when changing cards
  document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  if (appState.flashcardIndex < appState.flashcards.length - 1) {
    appState.flashcardIndex++;
    renderCurrentCard();
  }
}

function prevCard() {
  if (appState.flashcardIndex > 0) {
    appState.flashcardIndex--;
    renderCurrentCard();
  }
}

function shuffleCards() {
  for (let i = appState.flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [appState.flashcards[i], appState.flashcards[j]] = 
    [appState.flashcards[j], appState.flashcards[i]];
  }
  appState.flashcardIndex = 0;
  renderCurrentCard();
}

function resetCards() {
  appState.flashcards = [...studyData.flashcards];
  appState.flashcardIndex = 0;
  appState.knownCards.clear();
  appState.reviewCards.clear();
  renderCurrentCard();
  saveProgress();
  updateProgress();
}

function markKnown() {
  const card = appState.flashcards[appState.flashcardIndex];
  appState.knownCards.add(card.id);
  appState.reviewCards.delete(card.id);
  saveProgress();
  updateProgress();
  nextCard();
}

function markReview() {
  const card = appState.flashcards[appState.flashcardIndex];
  appState.reviewCards.add(card.id);
  appState.knownCards.delete(card.id);
  saveProgress();
  nextCard();
}

// Progress Tracking
function updateProgress() {
  const totalItems = studyData.concepts.length + studyData.flashcards.length + studyData.questions.length;
  const completedItems = appState.conceptsViewed.size + appState.knownCards.size + 
    (window.quizState ? window.quizState.answeredQuestions.size : 0);
  
  const percentage = Math.round((completedItems / totalItems) * 100);
  
  document.getElementById('progressBar').style.width = `${percentage}%`;
  document.getElementById('progressText').textContent = `${percentage}% Complete`;
}

function saveProgress() {
  const progress = {
    conceptsViewed: Array.from(appState.conceptsViewed),
    knownCards: Array.from(appState.knownCards),
    reviewCards: Array.from(appState.reviewCards),
    quizAnswers: window.quizState ? Array.from(window.quizState.answeredQuestions) : []
  };
  localStorage.setItem('ati-mental-health-progress', JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem('ati-mental-health-progress');
  if (saved) {
    const progress = JSON.parse(saved);
    appState.conceptsViewed = new Set(progress.conceptsViewed || []);
    appState.knownCards = new Set(progress.knownCards || []);
    appState.reviewCards = new Set(progress.reviewCards || []);
    
    // Open viewed concepts
    appState.conceptsViewed.forEach(index => {
      const cards = document.querySelectorAll('.concept-card');
      if (cards[index]) cards[index].classList.add('open');
    });
    
    updateProgress();
  }
}

function setLastUpdated() {
  document.getElementById('lastUpdated').textContent = studyData.metadata.createdAt;
}

// Export for quiz module
window.appState = appState;
window.saveProgress = saveProgress;
window.updateProgress = updateProgress;
