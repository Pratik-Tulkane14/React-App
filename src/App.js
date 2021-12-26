// import logo from './logo.svg';
import Navbar from './MyAppComponent.js/Navbar';
import './App.css';
import AppForm from './AppForm';
// import About from './MyAppComponent.js/About';
function App() {
        
  return (
    <>
    {/* <Navbar title = "Pratik-Tech" nav1 = "Home" nav2 = "HELP" /> */}
    <Navbar />
    <div className="container my-3">
          <AppForm heading = "Enter the text "/>
          {/* <About/> */}
    </div>
    </>
  );
}

export default App;

