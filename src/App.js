import React from 'react';
import './App.scss';
import FlatsList from './components/Flats/List';

function App() {
  return (
    <div className="App py-5">
        <section className="">
          <div className="container">
            <header className="h2 text-center mb-4">Квартиры</header>
            <FlatsList />
          </div>
        </section>
    </div>
  );
}

export default App;
