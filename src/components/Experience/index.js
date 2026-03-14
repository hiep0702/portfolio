import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    id: 1,
    company: 'Skylab Technology Co., Ltd',
    companyUrl: 'https://skylab.vn/',
    position: 'Backend Development',
    duration: 'September 2024 – Present',
    location: 'Hanoi, Vietnam',
    achievements: [
      'Participated in designing and building database schemas for backend systems using PostgreSQL and MongoDB.',
      'Developed and extended RESTful APIs for web systems using Python (FastAPI/Flask).',
      'Implemented and deployed new backend features, ensuring system scalability and performance.',
      'Optimized database queries and data processing logic to improve API performance.',
      'Deployed and maintained services on Linux servers, using Docker for containerization.',
      'Participated in code reviews, provided technical support, and shared knowledge with team members.'
    ]
  },
  {
    id: 2,
    company: 'TMSC Vietnam',
    companyUrl: 'https://tmsc-vn.com/',
    position: 'Backend Development',
    duration: 'February 2023 – August 2024',
    location: 'Hanoi, Vietnam',
    achievements: [
      'Participated in designing database schemas for backend systems using MySQL.',
      'Developed RESTful APIs for the application management system using PHP (Laravel).',
      'Built backend systems for data management and mobile application operations.',
      'Integrated third-party services such as Firebase, AWS, and Heroku for data storage and notification features.',
      'Developed and enhanced backend features, ensuring system stability.',
      'Maintained the system, fixed issues, and optimized database query performance.'
    ]
  },
  {
    id: 3,
    company: 'Freelancer',
    // companyUrl: '#',
    position: 'Backend Development',
    duration: 'June 2024 — June 2025',
    location: 'Australia (Remote)',
    achievements: [
      'Developed RESTful APIs for web and mobile applications using Node.js (Express.js).',
      'Built a data search microservice using Python (FastAPI).',
      'Integrated third-party services such as AWS and Twilio for notifications and external system communication.',
      'Designed and optimized database schemas and queries.',
      'Maintained systems, fixed bugs, and improved API performance.'
    ]
  }
]

const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p className="intro">
            My professional journey focuses on building backend systems
            and scalable APIs for modern web applications. Through hands-on experience with technologies
            such as Python, Node.js, and relational databases, I have developed strong
            skills in backend architecture, performance optimization, and building
            reliable production-ready services.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
