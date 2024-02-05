import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./components/List";

function App() {
  return (
    <div className='container'>
      <h1>Rick and Morty</h1>
      <List />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
