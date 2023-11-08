import TemporaryDrawer from "./components/OptionsDrawer";
import TopBar from "./components/TopBar/TopBar";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>
        <HomeScreen />
      </main>
    </>
  );
}

export default App;
