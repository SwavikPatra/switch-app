import { useState, useEffect, useMemo, useCallback } from 'react';
import { parseQuestions } from './parser';
import { useProgress } from './hooks/useProgress';
import './App.css';

function pickRandom(questions, completed) {
  const available = questions.filter(q => !completed[q.id]);
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
}

function getSectionStats(section, completed, starred) {
  const total = section.questions.length;
  const done = section.questions.filter(q => completed[q.id]).length;
  const starredCount = section.questions.filter(q => starred[q.id]).length;
  return { total, done, starred: starredCount };
}

function QuestionCard({ question, completed, starred, onToggle, onStar }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const isDone = completed[question.id];
  const isStarred = starred[question.id];

  return (
    <div className={`question-card ${isDone ? 'done' : ''} ${isStarred ? 'starred' : ''}`}>
      <div className="q-header">
        <div className="q-meta">
          <span className="q-section">{question.section}</span>
          <span className="q-num">Q{question.number}</span>
        </div>
        <div className="q-actions">
          <button className={`star-btn ${isStarred ? 'active' : ''}`} onClick={() => onStar(question.id)} title="Star">
            {isStarred ? '\u2605' : '\u2606'}
          </button>
          <button className={`done-btn ${isDone ? 'active' : ''}`} onClick={() => onToggle(question.id)} title="Mark complete">
            {isDone ? '\u2713' : '\u25CB'}
          </button>
        </div>
      </div>
      <div className="q-text">{question.question}</div>
      <button className="reveal-btn" onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      {showAnswer && <div className="q-answer">{question.answer}</div>}
    </div>
  );
}

function SectionSidebar({ sections, currentSectionId, onSelect, completed, starred }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Sections</h2>
      <div className="sidebar-sections">
        {sections.map(s => {
          const stats = getSectionStats(s, completed, starred);
          const isActive = s.id === currentSectionId;
          return (
            <div key={s.id} className={`sidebar-section ${isActive ? 'active' : ''}`} onClick={() => onSelect(s.id)}>
              <div className="sec-name">{s.name}</div>
              <div className="sec-progress">
                <span className="sec-done">{stats.done}/{stats.total}</span>
                {stats.starred > 0 && <span className="sec-starred"> \u2605 {stats.starred}</span>}
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${(stats.done / stats.total) * 100}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="sidebar-footer">
        <button className="reset-btn" onClick={() => { if (confirm('Reset all progress?')) window.__resetProgress?.(); }}>
          Reset Progress
        </button>
      </div>
    </div>
  );
}

function RandomQuestion({ allQuestions, completed, starred, onToggle, onStar }) {
  const [current, setCurrent] = useState(() => pickRandom(allQuestions, completed));

  useEffect(() => {
    setCurrent(pickRandom(allQuestions, completed));
  }, [allQuestions, completed]);

  const next = useCallback(() => setCurrent(pickRandom(allQuestions, completed)), [allQuestions, completed]);

  if (!current) {
    return (
      <div className="random-panel">
        <div className="empty-state">
          <h2>All questions completed!</h2>
          <p>Great job! Reset progress to start again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="random-panel">
      <div className="random-header">
        <h2>Random Question</h2>
      </div>
      <QuestionCard question={current} completed={completed} starred={starred} onToggle={onToggle} onStar={onStar} />
      <button className="next-btn" onClick={next}>Next Random Question</button>
    </div>
  );
}

function QuestionsList({ questions, completed, starred, onToggle, onStar }) {
  return (
    <div className="questions-list">
      {questions.map(q => (
        <QuestionCard key={q.id} question={q} completed={completed} starred={starred} onToggle={onToggle} onStar={onStar} />
      ))}
    </div>
  );
}

function SectionView({ sections, currentSectionId, completed, starred, onToggle, onStar }) {
  const section = sections.find(s => s.id === currentSectionId) || sections[0];
  if (!section) return <div className="section-view">Select a section</div>;

  const stats = getSectionStats(section, completed, starred);

  return (
    <div className="section-view">
      <div className="section-header">
        <h2>{section.name}</h2>
        <span className="section-stats">{stats.done}/{stats.total} completed</span>
      </div>
      <QuestionsList questions={section.questions} completed={completed} starred={starred} onToggle={onToggle} onStar={onStar} />
    </div>
  );
}

export default function App() {
  const [sections, setSections] = useState([]);
  const [currentSectionId, setCurrentSectionId] = useState(null);
  const [view, setView] = useState('random');
  const { progress, toggleComplete, toggleStar, reset } = useProgress();

  useEffect(() => {
    fetch('/interview-questions.md')
      .then(r => r.text())
      .then(text => {
        const parsed = parseQuestions(text);
        setSections(parsed);
        if (parsed.length > 0) setCurrentSectionId(parsed[0].id);
      });
  }, []);

  window.__resetProgress = reset;

  const allQuestions = useMemo(() => sections.flatMap(s => s.questions), [sections]);

  if (sections.length === 0) {
    return <div className="loading">Loading questions...</div>;
  }

  return (
    <div className="app">
      <SectionSidebar sections={sections} currentSectionId={currentSectionId} onSelect={setCurrentSectionId} completed={progress.completed} starred={progress.starred} />
      <div className="main-area">
        <div className="view-tabs">
          <button className={`tab ${view === 'random' ? 'active' : ''}`} onClick={() => setView('random')}>
            Random Question
          </button>
          <button className={`tab ${view === 'section' ? 'active' : ''}`} onClick={() => setView('section')}>
            Browse Section
          </button>
        </div>
        {view === 'random' ? (
          <div className="random-wrapper">
            <RandomQuestion allQuestions={allQuestions} completed={progress.completed} starred={progress.starred} onToggle={toggleComplete} onStar={toggleStar} />
          </div>
        ) : (
          <SectionView sections={sections} currentSectionId={currentSectionId} completed={progress.completed} starred={progress.starred} onToggle={toggleComplete} onStar={toggleStar} />
        )}
      </div>
    </div>
  );
}
