
import styles from './ProjectsStyles.module.css';
import EventWizard from '../../assets/eventwizard.png'
import ProjectCard from '../../common/ProjectCard';
import AntiSleepDetection from '../../assets/anti-sleep.png'


function Projects() {
    return <section id="projects"className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={EventWizard} link="https://github.com/wizard-cmput301/wizard-project" h3="Event Wizard" p="Event Registration App"/>
            <ProjectCard src={AntiSleepDetection} link="https://github.com/jancisd/AntiSleepDetection" h3="Anti-Sleep Detection" p="Drowsiness Detection System"/>
        </div>

    </section>
}

export default Projects;
