import './App.css';

function App() {
  return (
    <div className="App">
      <headers/>
      <nav>
        <ul>
          <li><a href="/home">Homepage</a></li>
          <li><a href="/about">Aboutpage</a></li>
          <li><a href="/blog">Blogpage</a></li>
        </ul>
      </nav>
      <main/>
      <footer/>
      <a href="/book" role="button">Book a Table</a>
    </div>
  );
}

export default App;
