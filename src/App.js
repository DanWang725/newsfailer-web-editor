import { Navbar } from './navbar/Navbar';
import { AppRoutes } from './Routes';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
