"use client";
import "../styles.css";
export default function ProjectItem({ project }) {
    return (
        <div>
            <span className="projectTitle">{project.title}</span>
            <img className="projectPageImage" src={project.image} />
            <p
                className="projectDesc"
                dangerouslySetInnerHTML={{ __html: project.descMain }}
            ></p>

            <button
                className="projectPageButton"
                onClick={() => window.open(project.link)}
            >
                View
            </button>
        </div>
    );
}
