
import './App.css';

import Navbar from './Components/Navbar';
import { Container } from '@chakra-ui/react'



import { AllRoutes } from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">

    
      <Container maxW='100%'  margin='0px' marginTop="0" textAlign='center' padding='0px'  >
     <Navbar/>
     
    </Container>


      <AllRoutes />

    </div>
  );
}

export default App;
