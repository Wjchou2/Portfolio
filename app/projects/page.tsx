import ProjectItem from "@/app/components/Projects.js";
import Navbar from "@/app/components/Navbar";
import Projectinfo from "@/app/components/Projectinfo";



import '../styles.css'; // Import the CSS file


export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="projectsContainer">
        {Object.values(Projectinfo).map((p) => (
          <ProjectItem key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
