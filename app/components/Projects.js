"use client";
export default function ProjectItem({ project }) {
    if (project.title === "More soon!") {
        return (
            <div className="project-card">
                <span className="projectTitle">{project.title}</span>
            </div>
        );
    }

    return (
        <div className="project-card">
            <span className="projectTitle">{project.title}</span>

            <p>{project.desc}</p>
            <img src={project.image} />
            <button
                onClick={() =>
                    window.open(
                        "/projects/" + project.title.toLowerCase(),
                        "_blank"
                    )
                }
            >
                Read More
            </button>
        </div>
    );
}
