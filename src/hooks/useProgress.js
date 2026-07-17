import { useState, useCallback } from 'react';

const STORAGE_KEY = 'interview-progress';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { completed: {}, starred: {} };
  } catch {
    return { completed: {}, starred: {} };
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress);

  const toggleComplete = useCallback((qId) => {
    setProgress(prev => {
      const next = { ...prev, completed: { ...prev.completed, [qId]: !prev.completed[qId] } };
      saveProgress(next);
      return next;
    });
  }, []);

  const toggleStar = useCallback((qId) => {
    setProgress(prev => {
      const next = { ...prev, starred: { ...prev.starred, [qId]: !prev.starred[qId] } };
      saveProgress(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    const empty = { completed: {}, starred: {} };
    saveProgress(empty);
    setProgress(empty);
  }, []);

  return { progress, toggleComplete, toggleStar, reset };
}
