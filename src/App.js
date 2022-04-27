import {BrowserRouter,Route} from 'react-router-dom'
import TopBar from './components/TopBar'
import Home from './views/Home'
import Login from './views/Login'
import Admin from './views/Admin'
import About from './views/About'
import Contact from './views/Contact'
import Details from './views/Details'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/adm" component={Admin}/>
      <Route exact path="/sobre" component={About}/>
      <Route exact path="/contato" component={Contact}/>
      <Route exact path="/detalhes/:id" component={Details}/>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
