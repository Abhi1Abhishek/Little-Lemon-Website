import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li><a href="/home">Homepage</a></li>
          <li><a href="/about">Aboutpage</a></li>
          <li><a href="/blog">Blogpage</a></li>
        </ul>
      </nav>
      <Nav/>
      <Main/>
      <Footer />
      <a href="/book" role="button">Book a Table</a>
    </div>
  );
}

export default App;
