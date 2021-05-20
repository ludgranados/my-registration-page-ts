// Imports from dependencies
import { BrowserRouter as Router } from 'react-router-dom';

// Imports from components
import AppRoutes from './routers/AppRoutes';


const App = () => {
  return (
    <Router>
      
        <AppRoutes />
      
    </Router>
  );
};

export default App;