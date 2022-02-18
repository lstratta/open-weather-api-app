import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App () {

  return (
  
    <div className="container">

      <NavBar/>

      <HomePage/>
  
    </div>
  );
}

