
import styles from './ProjectsStyles.module.css';
import EventWizard from '../../assets/eventwizard.png'
import ProjectCard from '../../common/ProjectCard';


function Projects() {
    return <section id="projects"className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={EventWizard} link="https://github.com/wizard-cmput301/wizard-project" h3="EventWizard" p="Event Registration App"/>

        </div>

    </section>
}

export default Projects;
