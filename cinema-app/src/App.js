import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import Addmovie from './Addmovie';

function App() {
  // État des films dans l'application
  const [movies, setMovies] = useState([
    {
      title: 'The Message',
      description: 'Un film épique qui raconte la vie du prophète Mahomet et la naissance de l\'Islam.',
      posterURL: './images/le-message.jpg',
      rating: 8.0,
    },
    {
      title: 'Omar Mukhtar: The Lion of the Desert',
      description: 'L\'histoire de Omar Mukhtar, le leader de la résistance libyenne contre l\'occupation italienne.',
      posterURL: './images/mukhtar.jpg',
      rating: 7.6,
    },
    {
      title: 'Cairo Station',
      description: 'Un film dramatique qui capture la vie sociale dans les années 1950 au Caire, réalisé par Youssef Chahine.',
      posterURL: './images/cairo.jpeg',
      rating: 7.7,
    },
    {
      title: 'Khalid ibn al-Walid',
      description: 'Le film historique sur la vie du général arabe Khalid ibn al-Walid.',
      posterURL: './images/khalid.jpg',
      rating: 6.5,
    },
    {
      title: 'Tariq ibn Ziyad',
      description: 'Film basé sur la bataille de Guadalete et l’invasion musulmane de la péninsule ibérique.',
      posterURL: './images/tariq.jpg',
      rating: 7.3,
    },
    {
      title: 'Al-Nasser Salah al-Din',
      description: 'Un film épique racontant la vie de Saladin et sa campagne pour reprendre Jérusalem aux croisés.',
      posterURL: './images/salah.jpg',
      rating: 7.4,
    },
  ]);

  // État pour les films filtrés
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // État pour afficher ou masquer le formulaire d'ajout de film
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  // Fonction pour ajouter un nouveau film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  // Fonction pour filtrer les films
  const filterMovies = (filter) => {
    const { title, rating } = filter;
    const newMovies = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = rating ? movie.rating >= rating : true;
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(newMovies);
  };

  return (
    <div className="app">
      <h1> Cinéma Historique Arabe</h1>
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
      
      {/* Bouton pour afficher ou masquer le formulaire d'ajout de film */}
      <button
        onClick={() => setShowAddMovieForm(!showAddMovieForm)}  // On clique pour basculer l'état
        className="add-movie-button"
      >
        {showAddMovieForm ? 'Annuler' : 'Ajouter un film'}
      </button>

      {/* Affichage conditionnel du formulaire d'ajout de film */}
      {showAddMovieForm && <Addmovie addMovie={addMovie} />}
    </div>
  );
}

export default App;
