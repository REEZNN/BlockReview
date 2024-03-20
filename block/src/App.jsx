import "./App.css";
import Menu from "./Menu.jsx";
import Bannerp from "./Bannerp.jsx";
import TendenciasHoy from "./TendenciasHoy.jsx";
import Encines from "./Encines.jsx"
//<Bannerp/>
//<TendenciasHoy/>
function App() {
  return (
    <div>
      <Menu />
      <Bannerp />
      <TendenciasHoy />
      <Encines/>
    </div>
  );
}

export default App;
