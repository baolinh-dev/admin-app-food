import { publicRoutes } from './routes';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (   
    <div className="app">
      <div className="navi"> 
        <ul> 
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/news"> News </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div> 
      <div className="content">  
        <Routes> 
          {publicRoutes.map((route, index) => { 
            return ( 
              <Route key={index} path={route.path} element={<route.component/>}/> 
            )
          })}
        </Routes>
      </div>
    </div>
   );
}

export default App;