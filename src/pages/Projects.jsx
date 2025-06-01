import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                    <ProjectCard key={i} project={proj} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
