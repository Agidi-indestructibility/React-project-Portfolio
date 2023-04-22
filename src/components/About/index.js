import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
        clearTimeout(timer);
    }
  });


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray= {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a highly ambitious front-end developer in search of a challenging role within an 
            established IT organization that offers the prospect of working with cutting-edge 
            technologies on a diverse range of projects.
          </p>
          <p align="LEFT">
            I possess a calm and composed disposition, coupled with an innate inquisitiveness that 
            drives me to continuously refine my skills and tackle design challenges one step 
            at a time.
          </p>
          <p>
            If I were to encapsulate my persona within a single statement, I would describe myself as
            an outstanding individual with a passion for sports, electronics, and technology.
          </p>
          <p>
          My focus on front-end development has allowed me to cultivate a deep understanding of design
          principles and user experience, enabling me to create visually appealing and intuitive 
          websites that meet the needs of users.

          As an ambitious individual, I'm always seeking opportunities to expand my skill set and take
          on new challenges. I am eager to collaborate with like-minded professionals in a dynamic and
          fast-paced environment, where I can make a meaningful contribution to the success of the
          organization.

          In my leisure time, I am a sports fanatic, regularly engaging in physical activities to 
          maintain my fitness levels. I also have a keen interest in electronic gadgets, constantly
          exploring new and innovative technologies that shape our lives.

          Overall, I believe that my passion for technology, coupled with my hardworking and curious
          personality, make me an excellent fit for a role in a leading IT organization.
          </p>
          <p>

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
