import logo from "./logo.svg";
import "./App.css";
import { useMediaQuery } from "./useMediaQuery";

function App() {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isTablet = useMediaQuery("(min-width: 501px && max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        {isMobile && <p>Mobile</p>}
        {isTablet && <p>Tablet</p>}
        {isDesktop && <p>Desktop</p>}
      </header>
    </div>
  );
}

export default App;
