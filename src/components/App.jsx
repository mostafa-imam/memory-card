// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
// import heroImg from './assets/hero.png';
import '../styles/App.css';
import Card from './card.jsx';

export default App;

function App() {
  return (
    <>
      <header className="header">
        <h1 className="page-title">Pokemon Memory Game</h1>
        <div className="score-wrapper">
          <p className="score">Score: {/* score */}</p>
          <p className="best-score">Best Score: {/* bestScore */}</p>
        </div>
        <p className="instructions">
          Test your memory! Click the images to rack up points, but a duplicate
          click ends the streak.
        </p>
      </header>
      <main className="main">
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
        <Card
          img="https://placehold.co/400?text=Hello+World"
          imageTitle="placeholder title"
          alt="placeholder alt"
        />
      </main>
    </>
  );
}
