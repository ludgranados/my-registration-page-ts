import { Switch, Route } from 'react-router-dom';

// Components
import Navbar from '../components/Navbar';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;