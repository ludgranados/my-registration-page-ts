//Imports from dependencies
import { Switch, Route } from 'react-router-dom';

// Imports from Components
import Navbar from '../components/Navbar';
import HomeComponent from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' component={HomeComponent} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;