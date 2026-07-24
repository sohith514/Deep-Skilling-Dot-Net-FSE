import "./App.css";
import CohortDetails from "./Components/CohortDetails";
import cohorts from "./Components/cohorts";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cognizant Academy Dashboard</h1>

      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;