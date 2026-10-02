const quizDatabase = {
  cube: generateSampleQuestions("큐브", [
    { q: "가장 기본이 되는 3x3x3 큐브의 공식 명칭은?", a: ["루빅스 큐브", "미러 큐브", "피라밍크스", "메가밍크스"], correct: 0 },
    { q: "피라미드 모양의 큐브 이름은?", a: ["스큐브", "피라밍크스", "스퀘어-1", "클락"], correct: 1 },
    { q: "12면체 모양의 스피드큐빙 정식 종목 큐브는?", a: ["메가밍크스", "기가밍크스", "테라밍크스", "페타밍크스"], correct: 0 },
    { q: "3x3x3 큐브 맞추기 공식 중 고급 공식에 속하는 것은?", a: ["CFOP", "LBL", "초급공식", "단순회전법"], correct: 0 },
    { q: "세계 스피드큐빙 협회의 약자는?", a: ["WCA", "CUBE", "WCF", "ICU"], correct: 0 }
  ]),
  instrument: generateSampleQuestions("악기", [
    { q: "현악기 중 가장 크고 음역대가 낮은 악기는?", a: ["바이올린", "비올라", "첼로", "더블베이스"], correct: 3 },
    { q: "목관악기에 해당하는 악기는?", a: ["트럼펫", "플루트", "트롬본", "튜바"], correct: 1 },
    { q: "건반을 누르면 내부의 줄을 쳐서 소리를 내는 악기는?", a: ["피아노", "오르간", "아코디언", "체레스탈"], correct: 0 },
    { q: "국악기 중 현악기가 아닌 것은?", a: ["가야금", "거문고", "해금", "대금"], correct: 3 },
    { q: "금관악기 중 밸브 대신 슬라이드를 사용하여 음을 조절하는 악기는?", a: ["트롬본", "호른", "트럼펫", "튜바"], correct: 0 }
  ]),
  idol: generateSampleQuestions("아이돌", [
    { q: "BTS(방탄소년단)의 팬덤 이름은?", a: ["아미", "블링크", "원스", "캐럿"], correct: 0 },
    { q: "BLACKPINK의 데뷔곡은?", a: ["휘파람", "DDU-DU DDU-DU", "Kill This Love", "How You Like That"], correct: 0 },
    { q: "SEVENTEEN의 멤버 수는?", a: ["17명", "13명", "12명", "15명"], correct: 1 },
    { q: "TWICE의 데뷔 타이틀곡은?", a: ["CHEER UP", "OOH-AHH하게", "TT", "What is Love?"], correct: 1 },
    { q: "NewJeans의 데뷔곡이 아닌 것은?", a: ["Attention", "Hype Boy", "Cookie", "Super Shy"], correct: 3 }
  ]),
  character: generateSampleQuestions("캐릭터", [
    { q: "포켓몬스터의 마스코트 캐릭터는?", a: ["파이리", "꼬부기", "피카츄", "이상해씨"], correct: 2 },
    { q: "산리오의 대표 캐릭터로 머리에 빨간 리본을 달고 있는 캐릭터는?", a: ["마이멜로디", "헬로키티", "시나모롤", "폼폼푸린"], correct: 1 },
    { q: "디즈니 대표 캐릭터 '미키 마우스'의 반려동물 개 이름은?", a: ["구피", "플루토", "도날드", "데이지"], correct: 1 },
    { q: "아기공룡 둘리가 빙하를 타고 떠내려온 서울의 동네는?", a: ["쌍문동", "상계동", "신림동", "청담동"], correct: 0 },
    { q: "보노보노의 친구 중 사막여우 캐릭터의 이름은?", a: ["포로리", "너부리", "야옹이 형", "탸오"], correct: 1 }
  ])
};

function generateSampleQuestions(topicName, baseQuestions) {
  const list = [...baseQuestions];
  for (let i = baseQuestions.length + 1; i <= 30; i++) {
    list.push({
      q: `[${topicName}] 샘플 문제 ${i}번 질문입니다. 정답은 1번입니다.`,
      a: [`${i}번 정답 보기`, `${i}번 오답 보기 A`, `${i}번 오답 보기 B`, `${i}번 오답 보기 C`],
      correct: 0
    });
  }
  return list;
}

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let wrongQuestionNumbers = [];
let isAnswered = false;

const setupScreen = document.getElementById('setup-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

function startQuiz() {
  const topic = document.getElementById('topic-select').value;
  const count = parseInt(document.getElementById('count-select').value);

  const allTopicQuestions = [...quizDatabase[topic]];
  allTopicQuestions.sort(() => Math.random() - 0.5);
  currentQuestions = allTopicQuestions.slice(0, count);

  currentIndex = 0;
  score = 0;
  wrongQuestionNumbers = [];

  setupScreen.classList.remove('active');
  quizScreen.classList.add('active');

  renderQuestion();
}

function renderQuestion() {
  isAnswered = false;
  const qData = currentQuestions[currentIndex];

  document.getElementById('topic-badge').innerText = `주제: ${getTopicName(document.getElementById('topic-select').value)}`;
  document.getElementById('progress').innerText = `${currentIndex + 1} / ${currentQuestions.length}`;
  document.getElementById('question-text').innerText = `${currentIndex + 1}. ${qData.q}`;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  qData.a.forEach((optionText, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.innerText = optionText;
    button.onclick = () => selectAnswer(index, button);
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedIndex, selectedButton) {
  if (isAnswered) return;
  isAnswered = true;

  const qData = currentQuestions[currentIndex];
  const correctIndex = qData.correct;
  const optionButtons = document.querySelectorAll('.option-btn');

  if (selectedIndex === correctIndex) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('incorrect');
    optionButtons[correctIndex].classList.add('correct');
    wrongQuestionNumbers.push(currentIndex + 1);
  }

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  const total = currentQuestions.length;
  const wrongCount = wrongQuestionNumbers.length;

  document.getElementById('score-text').innerText = `${score} / ${total}`;
  document.getElementById('wrong-count-text').innerText = `총 ${total}문항 중 ${wrongCount}문제를 틀렸습니다.`;

  const wrongListContainer = document.getElementById('wrong-list');
  wrongListContainer.innerHTML = '';

  if (wrongCount === 0) {
    wrongListContainer.innerHTML = '<span class="no-wrong">🎉 완벽합니다! 틀린 문제가 없습니다.</span>';
  } else {
    wrongQuestionNumbers.forEach(num => {
      const tag = document.createElement('span');
      tag.className = 'wrong-tag';
      tag.innerText = `${num}번`;
      wrongListContainer.appendChild(tag);
    });
  }
}

function resetQuiz() {
  resultScreen.classList.remove('active');
  setupScreen.classList.add('active');
}

function getTopicName(topicKey) {
  const names = {
    cube: '큐브',
    instrument: '악기',
    idol: '아이돌',
    character: '캐릭터'
  };
  return names[topicKey] || topicKey;
}
