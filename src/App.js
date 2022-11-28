import { useTheme } from "./ThemeContext";
import Switch from "./components/Switch";
import "./App.css";

const App = () => {
  const { theme } = useTheme();

  const color = theme === "light" ? "black" : "white";
  const backgroundColor = theme === "light" ? "white" : "black";

  return (
    <div
      className="App"
      style={{ backgroundColor }}
    >
      <header>
        <h2 style={{ color }}>A simple theme switcher</h2>
        <Switch />
      </header>
      <div className="Page">
        <h2 style={{ color }}>
          We use React Context API for the theme provider
        </h2>
        <p style={{ color }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          laudantium similique libero necessitatibus, delectus veniam ab sit et
          tempora alias earum id totam officiis corporis vero nobis expedita.
          Deleniti, fuga!
        </p>
      </div>
    </div>
  );
};

export default App;
