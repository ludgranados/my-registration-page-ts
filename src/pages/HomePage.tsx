// Components
import RegistrationForm from '../components/RegistrationForm';

const HomeComponent = () => {
    return (
      <div className='Home'>
       <div style={{fontFamily: 'fantasy', fontSize: '300%', marginTop: '3%'}}>Become a member!!!</div>
       <RegistrationForm />
      </div>
    );
  };
  
  export default HomeComponent;