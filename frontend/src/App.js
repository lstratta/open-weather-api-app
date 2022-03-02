import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App () {

  const LOCAL_SERVER_URL = process.env.API_URL;

  return (
  
    <div>

      <NavBar />

      <HomePage serverURL={LOCAL_SERVER_URL}/>
  
    </div>
  );
}

