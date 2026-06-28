import { useState, useEffect } from 'react';
import '../styles/App.css';
import Card from './card.jsx';

export default App;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState([0]);

  useEffect(() => {
    async function fetchData() {
      const promises = Array.from({ length: 12 }, (_, index) => {
        const id = index + 1;
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json(),
        );
      });

      try {
        const results = await Promise.all(promises);
        const pokemonData = results.map((json) => ({
          id: json.id,
          sprite: json.sprites.front_default,
          name: json.name,
          clicked: false,
        }));

        setPokemons(pokemonData);
      } catch (error) {
        console.log('Error fetching Pokemon:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="page-title">Pokemon Memory Game</h1>
        <div className="score-wrapper">
          <p className="score">Score: {score || 0}</p>
          <p className="best-score">
            Best Score: {Math.max(...bestScore) || 0}
          </p>
        </div>
        <p className="instructions">
          Test your memory! Click the images to rack up points, but a duplicate
          click ends the streak.
        </p>
      </header>
      <main className="main">
        {pokemons.map((pokemon) => {
          return (
            <Card
              onClick={() => {
                if (pokemon.clicked) {
                  setBestScore([...bestScore, score]);
                  setScore(0);
                  setPokemons(pokemons.map((p) => ({ ...p, clicked: false })));
                  console.log('Game Over');
                  return;
                }

                const updatedPokemons = pokemons.map((p) => {
                  if (p.name === pokemon.name) {
                    return { ...p, clicked: true };
                  }
                  return p;
                });

                const shuffledPokemons = updatedPokemons.sort(
                  () => Math.random() - 0.5,
                );

                if (shuffledPokemons.every((p) => p.clicked === true)) {
                  console.log('You won! All of them are true!');
                  setBestScore([...bestScore, score + 1]);
                  setScore(0);
                  setPokemons(
                    shuffledPokemons.map((p) => ({ ...p, clicked: false })),
                  );
                  return;
                }

                setPokemons(shuffledPokemons);
                setScore(score + 1);
              }}
              key={pokemon.name}
              img={pokemon.sprite}
              imageTitle={pokemon.name}
              alt={pokemon.name}
            />
          );
        })}
      </main>
    </>
  );
}
