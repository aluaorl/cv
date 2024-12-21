import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center mt-8 border-t pt-4">
      <p className="mr-4">
        <img
          src="/mail.png"
          alt="Email"
          className="inline-block w-3.5 h-3.5 mr-3 ml-1"
        />
        <a href="mailto:alya.orlovich_2006@mail.ru">alinaorlovic6@gmail.com</a>
      </p>
      <p className="mr-4">
        <img
          src="/github.png"
          alt="Email"
          className="inline-block w-3.5 h-3.5 mr-3 ml-1"
        />
        <a href="https://github.com/aluaorl">aluaorl</a>
      </p>
    </footer>
  )
}

export default Footer
