import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <header>
        <Header title="The Job Board" />
      </header>
      <body>
        <jobs>
          <Jobs
            className="blue"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="France"
            city="Paris"
          />
        </jobs>
      </body>
      <footer>
        <div>
          <p>Made with React at Le Reacteur By Nono</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
