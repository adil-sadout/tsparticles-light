import ParticleBackground from "./components/ParticleBackground"
import BottomNav from "./components/BottomNav";
import Typography from "@mui/material/Typography"
import Container  from "@mui/material/Container";


function App() {
  
  return (
    <div id="appContainer" className="App">
      <ParticleBackground />
      
      <Container sx={{color:"white", p: 2, height: '90vh', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        
      
        
          <Typography variant="h4"  sx={{textAlign:"center", fontFamily:"share",  letterSpacing: 10}}>
            Create Your Next
          </Typography>
          <Typography variant="h1"  sx={{textAlign:"center", fontFamily:"monospace"}}>
            Digital Experiences
          </Typography>
          
          

      </Container>

      <BottomNav/>

      
      

    </div>
  );
}

export default App;
