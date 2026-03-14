import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I specialize in backend development, focusing on building scalable APIs
            and reliable backend systems using technologies such as Python, PHP, and
            Node.js. I have experience developing RESTful services with frameworks
            like FastAPI, Flask, Laravel, and Express.js while working with both
            relational and NoSQL databases including PostgreSQL, MySQL, and MongoDB.
          </p>
          <p>
            My work involves designing clean API architectures, optimizing database
            performance, and integrating cloud and third-party services such as AWS,
            Firebase, and Stripe. I also have experience deploying backend services
            using Docker and CI/CD pipelines, and continuously improving systems to
            ensure stability, scalability, and maintainability.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
