import React from "react"
import  {skills } from  "../constants"


const About = () => {
  return (
    <section className="max-container">
        <h1  className="head-text">Hello 
             I am  <span className="text-pink-400 font-semibold drop-shadow">Arshnoor Singh</span> 
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
           <p>
              <b>Hello, I'm Arshnoor, a seasoned software engineer in India. With 2 years of experience, I specialize in key technologies, e.g., Java, Python, DSA ThreeJs etc. I've successfully contributed to many projects, showcasing expertise in specific areas. I'm passionate about solving complex problems through technology. Open to connecting for discussions on software development, tech trends, or potential collaborations.</b>
           </p>
        </div>

        <div  className="py-10 flex flex-col">
              <h3 className="subhead-text">
                My Skills
              </h3>
              <div className="mt-16 flex flex-wrap gap-12">
                   {skills.map((skill)=>(
                      
                         <div className="block-container w-20 h-20">
                           
                           <div className="btn-front rounded-xl flex justify-center item-center">
                             <img
                              
                              src={skill.imageUrl}
                              alt={skill.name}
                              className="w-1/2 h-1/2 object-contain"
                               
                             />

                            </div>

                          </div>


                   ))}
              </div>
        </div>
    </section>
  )
}

export default About