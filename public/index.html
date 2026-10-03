<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>주제별 퀴즈 게임</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    }

    body {
      background-color: #f4f6f8;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .container {
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      width: 100%;
      max-width: 600px;
      padding: 32px;
    }

    h1 {
      font-size: 1.8rem;
      color: #1e293b;
      margin-bottom: 24px;
      text-align: center;
    }

    .screen {
      display: none;
    }

    .screen.active {
      display: block;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      font-weight: 600;
      margin-bottom: 8px;
      color: #475569;
    }

    select {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      background-color: #fff;
    }

    .btn {
      width: 100%;
      padding: 14px;
      background-color: #4f46e5;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .btn:hover {
      background-color: #4338ca;
    }

    .quiz-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      font-weight: 600;
      color: #64748b;
    }

    .question-box {
      font-size: 1.25rem;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 24px;
      line-height: 1.5;
    }

    .options-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .option-btn {
      padding: 14px 16px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      background: white;
      font-size: 1rem;
      text-align: left;
      cursor: pointer;
      transition: all 0.2s;
    }

    .option-btn:hover:not(:disabled) {
      border-color: #94a3b8;
      background-color: #f8fafc;
    }

    .option-btn.correct {
      border: 3px solid #22c55e !important;
      background-color: #f0fdf4;
      font-weight: 600;
    }

    .option-btn.incorrect {
      border: 3px solid #ef4444 !important;
      background-color: #fef2f2;
      font-weight: 600;
    }

    .result-summary {
      text-align: center;
      margin-bottom: 24px;
    }

    .score-badge {
      font-size: 3rem;
      font-weight: 800;
      color: #4f46e5;
      margin: 12px 0;
    }

    .wrong-list-box {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
      max-height: 200px;
      overflow-y: auto;
    }

    .wrong-list-box h3 {
      font-size: 1rem;
      color: #334155;
      margin-bottom: 8px;
    }

    .wrong-items {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .wrong-tag {
      background-color: #fee2e2;
      color: #991b1b;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
    }

    .no-wrong {
      color: #166534;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>주제별 퀴즈 게임</h1>

    <div id="setup-screen" class="screen active">
      <div class="form-group">
        <label for="topic-select">퀴즈 주제</label>
        <select id="topic-select">
          <option value="cube">큐브</option>
          <option value="instrument">악기</option>
          <option value="idol">아이돌</option>
          <option value="character">캐릭터</option>
        </select>
      </div>

      <div class="form-group">
        <label for="count-select">문항 수</label>
        <select id="count-select">
          <option value="10">10 문제</option>
          <option value="20">20 문제</option>
          <option value="30">30 문제</option>
        </select>
      </div>

      <button class="btn" onclick="startQuiz()">게임 시작</button>
    </div>

    <div id="quiz-screen" class="screen">
      <div class="quiz-header">
        <span id="topic-badge">주제</span>
        <span id="progress">1 / 10</span>
      </div>
      <div class="question-box" id="question-text">문제 내용이 여기에 표시됩니다.</div>
      <div class="options-list" id="options-container"></div>
    </div>

    <div id="result-screen" class="screen">
      <div class="result-summary">
        <h2>퀴즈 종료!</h2>
        <div class="score-badge" id="score-text">0 / 10</div>
        <p id="wrong-count-text">총 0문제를 틀렸습니다.</p>
      </div>

      <div class="wrong-list-box">
        <h3>틀린 문제 번호</h3>
        <div class="wrong-items" id="wrong-list"></div>
      </div>

      <button class="btn" onclick="resetQuiz()">다시 하기</button>
    </div>
  </div>

  <script src="/js/quiz.js"></script>
</body>
</html>
