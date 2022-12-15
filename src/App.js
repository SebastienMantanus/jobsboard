import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <header>
        <Header title="The Job Board" />
      </header>

      <jobs>
        <Jobs
          className="red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Jobs
          className="green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Jobs
          className="yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Jobs
          className="blue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Jobs
          className="pink"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Jobs
          className="red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Jobs
          className="green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Cran-Montana"
        />
        <Jobs
          className="yellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="Ney-York"
        />
        <Jobs
          className="blue"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </jobs>

      <footer>
        <div>
          <p>Made with React at Le Reacteur By Nono</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
