import {Route , BrowserRouter as Router ,Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import { Home,Projects,Contacts,About } from './pages';

const App = () => {
  return (
    <main className="bg-slate-300/90">
        <Router >      
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element ={<About/>} />
                <Route path="/Contacts" element ={<Contacts/> } />
                <Route path="/projects" element ={<Projects/>}/>
            </Routes>
        </Router>
    </main>
  );
};

export default App;
