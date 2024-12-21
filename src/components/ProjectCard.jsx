import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div
      className="flex flex-col justify-between p-4 border border-emerald-900 rounded-xl shadow hover:shadow-lg transition 
                 w-[300px] h-[600px] sm:w-[400px] sm:h-[550px]"
    >
      <div className="flex flex-col h-full justify-center items-center">
        <a href={project.githubLink} className="mt-0 mb-0">
          {' '}
          <h2 className="text-xl font-semibold text-center">
            {project.title}
          </h2>{' '}
        </a>
        <a href={project.deployLink} className="mt-0 mb-0">
          <img
            src={project.image}
            alt={project.title}
            className="mt-2 mb-2 max-w-[250px] sm:max-w-[300px] object-cover border-2 border-gray-300"
          />
        </a>
        <p className="flex-1 text-justify">{project.description}</p>
        <div className="text-center font-semibold">{project.tools}</div>
      </div>
      <a
        href={project.githubLink}
        className="mt-2 inline-flex items-center justify-end"
      >
        <img src="/public/github.png" alt="code" className="w-7 h-7" />
      </a>
    </div>
  )
}

export default ProjectCard
