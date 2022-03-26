import Particles from "react-tsparticles";
import { config1 } from "../particlesConfig/config1";
import { config2 } from "../particlesConfig/config2";
import { config3 } from "../particlesConfig/config3";
import { config4 } from "../particlesConfig/config4";
import { config5 } from "../particlesConfig/config5";
import { tsParticles } from "tsparticles";
import { loadLightInteraction } from "tsparticles-interaction-light";



function ParticleBackground() {
  

  

  const particlesLoaded = () => {
    loadLightInteraction(tsParticles);
  };


  return (
    <div className="particleBackground">
        <Particles
        id="tsparticles"
        options={config5}
        loaded={particlesLoaded}
        />
        
    </div>
  )
}

export default ParticleBackground