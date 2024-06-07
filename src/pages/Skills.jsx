import Section from '../components/Section';
import Skill from '../components/Skill';

export default function Skills() {
  return (
    <Section>

      <div className='text-sm sm:text-base md:text-lg flex flex-col items-center justify-center w-full max-w-[665px]  my-10 mx-auto gap-5'>

        {/* JavaScript */}
        <Skill
          skillIcon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
          skillText="Leveraging a strong foundation in JavaScript honed over 20 years, I've spent the past several months expanding my skillset to encompass more advanced concepts and ES6 features."
          skillExperience="20+ years experience."
        >
          <div className='w-32 h-2 mt-4 rounded-full bg-[#d4ebff]'>
            <div className={`w-[70%] h-full bg-[#1d8aff] rounded-l-lg`}>
            </div>
          </div>
        </Skill>

        {/* HTML 5 */}
        <Skill
          skillIcon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          skillText="Possessing over 20 years of experience in HTML, I have developed a deep understanding of its core principles and best practices."
          skillExperience="20+ years experience."
        >
          <div className='w-32 h-2 mt-4 rounded-full bg-[#d4ebff]'>
            <div className={`w-[80%] h-full bg-[#1d8aff] rounded-l-lg`}>
            </div>
          </div>
        </Skill>

        {/* CSS 3 */}
        <Skill
          skillIcon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          skillText="Building upon my foundation in HTML, I utilize CSS to create dynamic and responsive web layouts, ensuring my web pages adapt seamlessly across various devices."
          skillExperience="20+ years experience."
        >
          <div className='w-32 h-2 mt-4 rounded-full bg-[#d4ebff]'>
            <div className={`w-[80%] h-full bg-[#1d8aff] rounded-l-lg`}>
            </div>
          </div>
        </Skill>


        {/* React */}
        <Skill
          skillIcon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          skillText="Through dedicated learning over the past six months, I have established a strong foundation in React. My skillset encompasses core concepts and extends to include advanced topics like React Router and UseReducer."
          skillExperience="6 months experience."
        >
          <div className='w-32 h-2 mt-4 rounded-full bg-[#d4ebff]'>
            <div className={`w-[60%] h-full bg-[#1d8aff] rounded-l-lg`}>
            </div>
          </div>
        </Skill>

        {/* React Router */}
        <Skill
          skillIcon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
          skillText="Having actively learned React Router for the past three months, I possess a strong understanding of its core functionalities, enabling me to implement effective routing solutions within React applications."
          skillExperience="3 months experience."
        >
          <div className='w-32 h-2 mt-4 rounded-full bg-[#d4ebff]'>
            <div className={`w-[60%] h-full bg-[#1d8aff] rounded-l-lg`}>
            </div>
          </div>
        </Skill>

        {/* Tailwind CSS */}
        <Skill
          skillIcon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          skillText="In the past three months, I've gained proficiency in Tailwind CSS. I possess a strong understanding of its core principles and can effectively leverage its extensive utility classes to build responsive and visually appealing user interfaces."
          skillExperience="3 months experience."
        >
          <div className='w-32 h-2 mt-4 rounded-full bg-[#d4ebff]'>
            <div className={`w-[70%] h-full bg-[#1d8aff] rounded-l-lg`}>
            </div>
          </div>
        </Skill>

        {/* Git */}
        <Skill
          skillIcon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          skillText="Having recently adopted Git, I possess a strong understanding of its core functionalities, enabling me to effectively manage version control within software development projects."
          skillExperience="3 months experience."
        >
          <div className='w-32 h-2 mt-4 rounded-full bg-[#d4ebff]'>
            <div className={`w-[40%] h-full bg-[#1d8aff] rounded-l-lg`}>
            </div>
          </div>
        </Skill>

        {/* VS Code */}
        <Skill
          skillIcon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
          skillText="A proficient user of VS Code for the past five years, I leverage its extensive customization options and a selection of extensions (including Codeium, Quokka, and Prettier) to enhance my development workflow."
          skillExperience="5 years experience."
        >
          <div className='w-32 h-2 mt-4 rounded-full bg-[#d4ebff]'>
            <div className={`w-[85%] h-full bg-[#1d8aff] rounded-l-lg`}>
            </div>
          </div>
        </Skill>

      </div>
    </Section >
  );
}