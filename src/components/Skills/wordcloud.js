import React, { useEffect, useState } from 'react'

import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Python',
    'SQL',
    'Bash',
    'Firebase',
    'Flask',
    'NodeJS',
    'Express',
    'FastAPI',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'OpenCV',
    'Docker',
    'AWS',
    'Git',
    'GitHub',
    'Linux',
    'PHP',
    'Laravel',
    'CI/CD',
    'RESTful APIs',
    'Firebase',
    'Stripe',
    'Twilio',
    'Ollama',
    'vLLM',
    'Dify',
    'Langchain'
  ]
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
