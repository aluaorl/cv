import React from 'react'

const AuthorInfo = () => {
  return (
    <div className="flex-col p-4 max-w-4xl mx-auto">
      <div className="flex items-center">
        <img
          src="images/photo.jpg"
          alt="avatar"
          className="mr-6 w-[100px] sm:w-[150px]  border-stone-400 border-[1px]"
        />
        <div className="about">
          <h1 className="text-4xl font-bold text-emerald-900 sm:text-5xl">
            Alina Orlovich
          </h1>
          <p className="text-1xl sm:text-2xl">Web Developer</p>
          <div className="contacts flex-col mt-7 ">
            <p className="mr-0 sm:mr-4">
              <img
                src="images/mail.png"
                alt="Email"
                className="inline-block w-3.5 h-3.5 mr-3 ml-1 "
              />
              <a
                href="mailto:alya.orlovich_2006@mail.ru"
                className="text-xs sm:text-base"
              >
                alinaorlovic6@gmail.com
              </a>
            </p>
            <p className="mr-4">
              <img
                src="images/tg.png"
                alt="Telegram"
                className="inline-block w-5 h-5 mr-2"
              />
              <a href="https://t.me/aluaorl" className="text-xs sm:text-base">
                @aluaorl
              </a>
            </p>
            <p className="text-xs sm:text-base">
              <img
                src="images/loc.png"
                alt="Location"
                className="inline-block w-4 h-4 mr-3"
              />
              Minsk
            </p>
            <p className="text-xs sm:text-base mt-2">
              <a
                href="cv.pdf"
                className="text-emerald-900 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-slate-500 mt-5" />
      <div className="mt-5">
        I am a student at the Mechanics and Mathematics Faculty of Belarusian
        State University. During this time, I have developed strong skills in
        programming and mathematics, enabling me to effectively tackle complex
        problems. With two years of experience in software development, I have
        worked on various projects and in team collaborations. I can work with
        C++, JavaScript, React, HTML/CSS, and SQL. I am eager to apply my
        knowledge in real-world projects and am enthusiastic about contributing
        to your team to achieve our common goals. Also, I am open to development
        and ready to learn new things.
      </div>
      <hr className="border-t-1 border-slate-500 mt-5" />
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mt-5">
          <div>
            <h2 className="font-semibold text-2xl text-emerald-900">
              Work Experience:
            </h2>
            <ul className="pt-2 list-disc pl-5">
              <li>Studying at Belarusian State University</li>
              <li>Self-Employment</li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold text-2xl text-emerald-900">
              Education:
            </h2>
            <p className="mt-1 text-lg">
              Belarusian State University, <br /> Mechanico-Mathematical
              Faculty, 2nd Year
            </p>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold text-2xl text-emerald-900">
              Languages:
            </h2>
            <ul className="pt-2 list-disc pl-5">
              <li>English (B2)</li>
              <li>Russian (Native)</li>
            </ul>
          </div>
        </div>
        <div className="mx-5 relative hidden md:block">
          <div
            className="border-l border-slate-500 h-full absolute left-0 top-4"
            style={{ borderLeftWidth: '1px' }}
          ></div>
        </div>
        <div className="ml-0 md:ml-20 mt-5">
          <h2 className="font-semibold text-2xl text-emerald-900">Skills:</h2>
          <ul className="pt-2 list-disc pl-5">
            <li>C++</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML/CSS</li>
            <li>SQL/MySQL</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AuthorInfo
