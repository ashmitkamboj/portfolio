const ProjectCard = ({Project }) => (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold">{Project.title}</h3>
        <p className="text-sm">{Project.description}</p>
        <div className="mt-2">
            <a href="{Project.github}" className="text-blue-500 mr-4">View on GitHub</a>
        </div>
    </div>
);

export default ProjectCard;