import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
        </div>

        <hr/>

        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="C/C++" />
            <SkillList src={checkMarkIcon} skill="R" />
            <SkillList src={checkMarkIcon} skill="React" />
        </div>

        <hr/>

        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Tensorflow" />
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="mySQL/SQLite"/>
            <SkillList src={checkMarkIcon} skill="MongoDB" />
        </div>

    </section>
    
  )
}

export default Skills;
