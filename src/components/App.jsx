import React from 'react'
import AuthorInfo from '../components/AuthorInfo'
import ProjectList from '../components/ProjectList'
import Footer from '../components/Footer'

const App = () => {
  return (
    <div className="rounded-lg bg-gray-100 max-w-xl mx-auto p-4 shadow-2xl md:max-w-5xl">
      {' '}
      <AuthorInfo />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default App
