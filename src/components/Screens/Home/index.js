import React from "react";
import WelcomeSection from "../../Organism/WelcomeSection";
import MundoSection from "../../Organism/MundoSection";
import Scheduler from "../../Organism/Scheduler";
import Contact from "../../Organism/Contact";

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <MundoSection />
      <Scheduler />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
