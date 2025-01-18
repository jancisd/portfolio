import styles from './HeroStyles.module.css'
import heroImg from '../../assets/IMG_0499.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon =  theme === 'light' ? sun  : moon;
    const githubIcon = theme === 'light' ? githubLight: githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight: linkedinDark;

    return <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}> 
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profile picture of Jancis Delfin" 
            />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>

        <div className={styles.info}>
            <h1>
                Jancis
                <br />
                Delfin
            </h1>
            <h2>Student Developer</h2>
            <span>
                <a href="https://github.com/jancisd" target="_blank">
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/in/jancis-delfin-635422291/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>

            </span>
            <p className={styles.description}>
                A 4th Year Computer Science/Statistics Student At the University of Alberta!
            </p>
            <a href={CV} download>
                <button className="hover" >Resume</button>
            </a>
        </div>
    </section>
}

export default Hero
