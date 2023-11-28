import TopBar from "./components/TopBar";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>
        <HomePage />
      </main>
    </>
  );
}

export default App;
