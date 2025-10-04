import Navbar from "@/app/components/Navbar";
import Projectpage from "@/app/components/Projectpage";

import Projectinfo from "@/app/components/Projectinfo";

// import '../styles.css'; // Import the CSS file

export default function Projects() {
  return (
    <div >
      <Navbar></Navbar>

      <Projectpage project={Projectinfo.Learnify}></Projectpage>
    </div>
  );
}
