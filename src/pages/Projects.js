import Project from '../components/project/Project'
import { projects } from "./../helpers/projectsList"


const Projects = () => {
    return (<>
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((projects,index) => {
                        return (
                            <Project key={projects.id} title={projects.title} img={projects.img} index={index} />

                        )
                    })}
                </ul>
            </div>
        </main>

    </>);
}

export default Projects;