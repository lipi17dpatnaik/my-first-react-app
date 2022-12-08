import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Person } from './components/person';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export const AppContext = createContext();

function App() {
  // const people =  [ {name: "u1", age: 1}, {name: "u2", age: 2} ];

  const [userContact, setUserContact] = useState("Lipi");
  const client = new QueryClient({
    defaultOptions:
    {
      queries: {
        refetchOnWindowFocus: false
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userContact, setUserContact }}>
          <Person name="pedro" email="lipip@zeta.tech" age={24}></Person>
          <Router>
            <div>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

// function Person(props) {
//   return (
//     <h1>{props.name} {props.age}</h1>)
// }

function User(userprops) {
  return (
    <div className="User">
      <div className="User-header">
        This is User Header
    </div>
      <div className="User-body">
        <div>{userprops.name}</div>
        <div>{userprops.age}</div>
        <div>{userprops.email}</div>
      </div>
    </div>
  );
}

function Job(jobProps) {
  return (
    <div className="JobProps">
      <div> {jobProps.salary}</div>
      <div> {jobProps.position}</div>
      <div> {jobProps.company}</div>
    </div>
  );
}

export default App;
