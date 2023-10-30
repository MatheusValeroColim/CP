import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Importe o ThemeProvider
import Toggle from './components/Toggle';
import Home from './pages/Home'; // Importe suas páginas
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Tema from './pages/Tema';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Toggle />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contato" component={Contato} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/tema" component={Tema} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
