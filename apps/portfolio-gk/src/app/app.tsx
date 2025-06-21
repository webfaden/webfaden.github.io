import { Outlet, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <header>
        <h1>Mein Portfolio</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Startseite</Link>
            </li>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
            <li>
              <Link to="/projects">Projekte</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Hier erscheinen die Inhalte der Kinder-Routen */}
      </main>
    </div>
  );
}

export default App;
