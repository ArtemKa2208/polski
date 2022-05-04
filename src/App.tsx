import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Preview } from './Preview/Preview';
import { questionsFromServer } from './questions';
import { PageTest } from './PageTest/PageTest';

export const App: React.FC = () => {
  const time = 80;

  return (
    <div className="app">
      <Routes>
        <Route path="/test" element={<PageTest questionsFromServer={questionsFromServer} timer={time} />} />
        <Route path="/" element={<Preview numberOfQuestions={questionsFromServer.length} time={time} />} />
      </Routes>
    </div>
  );
};
