import { useEffect, useState } from 'react'

import { faCode, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// Projects data - easily scalable for future additions
const projects = [
  {
    id: 1,
    title: 'AI-OCR',
    description: 'Developed a system to evaluate and process OCR results from multiple AI models for Japanese document text extraction.',
    technologies: ['Python', 'Ollama', 'vLLM', 'AWS', 'Dify', 'Docker'],
    category: 'AI / Backend Development',
    status: 'In-Progress',
    year: '2026',
    company: 'Skylab',
    features: [
     'Built a workflow to compare OCR performance across multiple models',
    'Evaluated recognition accuracy using metrics such as CER and WER',
    'Tested multiple preprocessing techniques including noise removal and contrast enhancement',
    'Analyzed OCR performance differences between printed and handwritten Japanese documents',
    'Generated structured evaluation reports to support model selection'
    ],
    images: [], // Provision for multiple images
    githubUrl: null, // Private project
    liveUrl: null, // Private project
    isPrivate: true
  },
  {
    id: 2,
    title: 'Wakai',
    description: 'Developed a backend API system for managing legal cases related to divorce procedures, supporting workflow tracking, document management, user authentication, identity verification, and online payments.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Stripe', 'AWS', 'Webhook', 'Liquid eKYC', 'Docker'],
    category: 'Backend Development',
    status: 'Completed',
    year: '2025',
    company: 'Skylab',
    features: [
      'Designed RESTful APIs using FastAPI to manage legal cases and workflow processes',
      'Integrated Liquid eKYC service for secure user identity verification',
      'Implemented secure document uploads using AWS S3 presigned URLs',
      'Integrated Stripe payment APIs and webhooks for online payment processing and status tracking',
      'Implemented encryption mechanisms to protect sensitive user data',
      'Optimized PostgreSQL queries and implemented background jobs to improve system performance and automation'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 3,
    title: 'Pet',
    description: 'Developed a backend API for a pet-focused social networking application using FastAPI. The system supports user management, pet profiles, community interactions, content sharing, and event management, providing a scalable backend for social features and user engagement.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Webhook', 'FireBase'],
    category: 'Backend Development',
    status: 'Completed',
    year: '2025',
    company: 'Skylab',
    features: [
      'Implemented user authentication, profile management, and user blocking functionality',
      'Developed pet profile management for creating and tracking pets within the platform',
      'Built social features including posts, images, comments, reactions, and tagging',
      'Implemented community modules with tags and role-based user management',
      'Developed event management features for pet-related activities',
      'Integrated notification systems and content reporting for moderation and user engagement'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 4,
    title: 'Eyes Inspection Tracking API',
    description: 'Developed a backend API for managing children eye examination records using Flask and MongoDB. The system allows healthcare staff to manage users, track children profiles, and store eye inspection results for monitoring vision health.',
    technologies: ['Python', 'Flask', 'MongoDB'],
    category: 'Backend Development',
    status: 'Completed',
    year: '2025',
    company: 'Skylab',
    features: [
      'Implemented user authentication system including registration and login',
      'Developed APIs to manage children profiles and related health information',
      'Built modules to record and manage eye inspection results for children',
      'Designed MongoDB data models to store medical inspection data efficiently',
      'Developed RESTful APIs to support data management and tracking for eye health monitoring'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 5,
    title: 'Ondokanri',
    description: 'Developed backend APIs for a workforce management application used by supermarket staff to manage attendance, daily tasks, and operational reports. The system includes both a mobile application for employees and an admin platform for task management and store operations.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SSO', 'Azure'],
    category: 'Backend Development',
    status: 'Completed',
    year: '2024',
    company: 'Skylab',
    features: [
      'Implemented SSO-based authentication and role-based access control for the admin system',
      'Developed employee and store management modules for operational administration',
      'Built task and checklist management APIs to organize daily work assignments',
      'Implemented attendance tracking features for employees through the mobile application',
      'Designed APIs to support task monitoring and operational reporting for store managers'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 6,
    title: 'Ovumb',
    description: 'Developed a backend system and mobile application to help women track menstrual cycles, detect LH hormone surges to predict ovulation, monitor pregnancy progress, track breastfeeding and newborn care, and support online sales of healthcare products.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Firebase Cloud Messaging', 'AWS S3', 'Heroku'],
    category: 'Backend Development',
    status: 'Completed',
    year: '2023',
    company: 'TMSC',
    features: [
      'Developed RESTful APIs using Laravel to support mobile application features',
      'Implemented JWT-based authentication and user account management',
      'Built health tracking modules for menstrual cycle monitoring, ovulation prediction, and pregnancy tracking',
      'Integrated Firebase Cloud Messaging to send push notifications to mobile users',
      'Implemented e-commerce features including shopping cart, order management, and product management',
      'Developed an admin system to manage users, consultants, orders, advertising content, and test results'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 7,
    title: 'E-TMSC',
    description: 'Developed a comprehensive HR management system to digitize internal company processes including employee management, attendance tracking, leave requests, payroll management, task assignment, training, and internal communication.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Firebase Cloud Messaging', 'AWS S3', 'Heroku'],
    category: 'Backend Development',
    status: 'Completed',
    year: '2024',
    company: 'TMSC',
    features: [
      'Developed RESTful APIs using Laravel to support HR management features',
      'Implemented attendance tracking, leave request management, and approval workflows',
      'Built internal communication modules including posts, notifications, and knowledge tests',
      'Integrated Firebase Cloud Messaging for real-time push notifications',
      'Implemented AWS S3 for storing user avatars and related files',
      'Developed admin system modules for employee management, attendance records, payroll import/export, and system notifications'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 8,
    title: 'Insida',
    description: 'Developed a social real estate platform inspired by TikTok, enabling users to create and interact with various types of content such as blogs, property listings, and short videos. The platform supports multimedia content creation, real-time communication, and social interactions between users.',
    technologies: ['Python', 'FastAPI', 'Nodejs','Express.js', 'MongoDB', 'AWS', 'Firebase', 'Twilio'],
    category: 'Backend Development',
    status: 'Completed',
    year: '2025',
    company: 'Freelancer',
    features: [
      'Designed and developed RESTful APIs using FastAPI and Express.js for social platform features',
      'Implemented real-time messaging APIs to support in-app chat between users',
      'Built media upload APIs for images and videos stored on AWS cloud storage',
      'Developed search APIs to enable discovery of posts, property listings, and users',
      'Integrated Twilio SMS services for phone verification and user notifications',
      'Implemented Firebase push notifications to deliver real-time updates to mobile users'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  }
]

const Projects = () => {
  const projectsArray = 'Projects'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filter, setFilter] = useState('All')
  const [companyFilter, setCompanyFilter] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  // Get unique companies for filtering
  const companies = ['All', ...new Set(projects.map(project => project.company))]

  // Filter projects based on selected category and company
  const filteredProjects = projects.filter(project => {
    const categoryMatch = filter === 'All' || project.category === filter
    const companyMatch = companyFilter === 'All' || project.company === companyFilter
    return categoryMatch && companyMatch
  })

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
            A collection of backend-focused projects demonstrating my experience
            in building APIs, designing scalable systems, and optimizing data
            processing workflows. Each project reflects practical solutions to
            real-world challenges using technologies such as Python, Node.js,
            relational databases, and cloud services.
          </p>
          
          {/* Category Filter */}
          <div className="filter-container">
            <h4>Filter by Category:</h4>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Company Filter */}
          <div className="filter-container">
            <h4>Filter by Company:</h4>
            {companies.map(company => (
              <button
                key={company}
                className={`filter-btn ${companyFilter === company ? 'active' : ''}`}
                onClick={() => setCompanyFilter(company)}
              >
                {company}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Project Images Section - with provision for multiple images */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {project.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{project.category}</span>
                      <span className="year">{project.year}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="company">{project.company}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private Project</span>
                      </span>
                    )}
                  </div>
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

export default Projects
