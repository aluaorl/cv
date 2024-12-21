import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Notion',
    description:
      'This project is a multi-user note-taking application that allows users to create, delete, and edit notes. It uses Json-Server for data storage, featuring a db.json database where users and their notes are stored. The interface is styled with Tailwind CSS and the Typography plugin for a modern look. Additionally, it is a multi-page application, enhancing user navigation and experience.',
    tools:
      'React, React.Context, Zod, Redux, JSON-Server, Tailwind + Typography ',
    githubLink: 'https://github.com/aluaorl/Notion.git',
    deployLink: 'https://github.com/aluaorl/Notion.git',
    image: './public/project4.gif',
  },
  {
    title: 'API & SPA',
    description:
      'This project demonstrates a single-page application (SPA) using React and the react-router-dom library, which interacts with an external API (such as JSONPlaceholder). For styling, Material UI (MUI) components are used, allowing for the creation of a modern and intuitive interface. Key features include seamless navigation, dynamic data fetching, and responsive design.',
    tools: 'React, BrowserRouter, react-router-dom, Material-UI',
    githubLink: 'https://github.com/aluaorl/API.git',
    deployLink: 'https://aluaorl.github.io/API/',
    image: './public/project3.gif',
  },
  {
    title: 'Lamoda',
    description:
      'This project is an online store that allows users to filter and sort products by various criteria. It is designed to demonstrate skills in React, functional components, and hooks. The project features a multi-filtering system that is easily modifiable and expandable, making it flexible and adaptable.',
    tools:
      'React, multiple filtering, functional components, Chance.js, CSS modules',
    githubLink: 'https://github.com/aluaorl/lamoda.git',
    deployLink: 'https://aluaorl.github.io/lamoda/',
    image: './public/project2.gif',
  },
  {
    title: 'TodoIST',
    description:
      'Todoist is a functional and user-friendly task management application that offers advanced filtering and sorting options. The app  is focused on class components. Its core features include the creation, display, and filtering of tasks, making it an efficient tool for organizing workflows.',
    tools: 'React,  class components, CSS modules',
    githubLink: 'https://github.com/aluaorl/TodoIst.git',
    deployLink: 'https://aluaorl.github.io/TodoIst/',
    image: './public/project1.gif',
  },
  {
    title: 'Game "Tic-Tac-Toe"',
    description:
      'The game "Tic-Tac-Toe" with non-standard rules offers users a unique gaming experience, allowing customization of winning conditions, such as requiring a specific number of symbols in a row. ',
    tools: 'JavaScript, HTML/CSS',
    githubLink: 'https://github.com/aluaorl/tic-toe.git',
    deployLink: 'https://aluaorl.github.io/tic-toe/',
    image: './public/project5.gif',
  },
  {
    title: 'Game "Minesweeper"',
    description:
      'The game "Minesweeper" allows users to customize the gameplay to their preferences by choosing the size of the field and the percentage of mines, which determines the level of difficulty.',
    tools: 'JavaScript, HTML/CSS',
    githubLink: 'https://github.com/aluaorl/Minesweeper.git',
    deployLink: 'https://aluaorl.github.io/Minesweeper/',
    image: './public/project6.gif',
  },
]

const ProjectList = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mt-8 mb-4 text-emerald-900">
        Projects
      </h2>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4 md:mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
