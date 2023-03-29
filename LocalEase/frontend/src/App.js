
import './App.css';
import Navbar from './Components/Navbar';
import { Container } from '@chakra-ui/react'



function App() {
  return (
    <div className="App">
    
      <Container maxW='100%'  margin='0px' marginTop="0" textAlign='center' padding='0px'  >
     <Navbar/>
     
    </Container>
    </div>
  );
}

export default App;
