import React from "react";
import WelcomeSection from "../../Organism/WelcomeSection";
import MundoSection from "../../Organism/MundoSection";
import Scheduler from "../../Organism/Scheduler";

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <MundoSection />
      <Scheduler/>
    </div>
  );
};

export default Home;
