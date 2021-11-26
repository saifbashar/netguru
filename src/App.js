// import section
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Developers from './components/Developers/Developers';

function App() {
  return (
    <div className="fonts">
      {/* header component */}
      <Header></Header>
      <hr />
      {/* developers component */}
      <Developers></Developers>
    </div>
  );
}

export default App;
