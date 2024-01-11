import { Sidebar } from "./components/Sidebar/sidebar";
import { Results } from "./components/Results/results";

function App() {
  return (
    <div className="bg-gradient-image bg-cover bg-center">
      <div className="container mx-auto pt-12 pb-48 md:flex">
        <Sidebar />
        <Results />
      </div>
    </div>
  );
}

export default App;
