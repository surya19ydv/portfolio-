import { Briefcase, GraduationCap } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-[#FEFAE0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#626F47]">Resume</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my career in software development and
            design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#626F47] flex items-center">
              <GraduationCap className="mr-2 text-[#FFCF50]" /> Education
            </h3>

            <div className="relative border-l-2 border-[#A4B465] pl-8 pb-8">
  <div className="absolute w-4 h-4 bg-[#FFCF50] rounded-full -left-[9px] top-0"></div>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h4 className="text-xl font-bold text-[#626F47]">
      Bachelor of Engineering in Electronics & Telecommunication (EXTC)
    </h4>
    <h5 className="text-[#A4B465] font-semibold mb-2">2017 - 2020</h5>
    <p className="text-gray-600 mb-2">St. Francis Institute of Technology</p>
    <p className="text-gray-700">
      Completed coursework in digital electronics, communication systems, and programming. 
      Participated in technical projects and workshops on embedded systems and software development.
    </p>
  </div>
</div>

<div className="relative border-l-2 border-[#A4B465] pl-8 pb-8">
  <div className="absolute w-4 h-4 bg-[#FFCF50] rounded-full -left-[9px] top-0"></div>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h4 className="text-xl font-bold text-[#626F47]">
      Diploma in Electronics & Telecommunication (EXTC)
    </h4>
    <h5 className="text-[#A4B465] font-semibold mb-2">2015 – 2017</h5>
    <p className="text-gray-600 mb-2">Pravin Patil Junior College</p>
    <p className="text-gray-700">
      Studied electronic circuits, microprocessors, and communication systems. 
      Gained a solid foundation in technical problem-solving and analytical thinking.
    </p>
  </div>
</div>


            {/* <div className="relative border-l-2 border-[#A4B465] pl-8">
              <div className="absolute w-4 h-4 bg-[#FFCF50] rounded-full -left-[9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-[#626F47]">Diploma in EXTC</h4>
                <h5 className="text-[#A4B465] font-semibold mb-2">2013 - 2016</h5>
                <p className="text-gray-600 mb-2">Maharashtra State Board of Technical Education</p>
                <p className="text-gray-700">
                  Completed diploma in Electronics and Telecommunication with focus on electronic circuits,
                  microprocessors, and communication systems. Developed strong foundation in technical problem-solving
                  and analytical thinking.
                </p>
              </div>
            </div> */}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#626F47] flex items-center">
              <Briefcase className="mr-2 text-[#FFCF50]" /> Professional Experience
            </h3>

            <div className="relative border-l-2 border-[#A4B465] pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-[#FFCF50] rounded-full -left-[9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-[#626F47]">Software Developer</h4>
                <h5 className="text-[#A4B465] font-semibold mb-2">2023 - 2025 (2 years)</h5>
                <p className="text-gray-600 mb-2">CypherSOL Fintech India Private Limited, Mumbai</p>
                <p className="text-gray-700">
                  Led the development of robust web applications and fintech solutions using Python, Django, React, and Next.js. 
                  Engineered scalable backend systems and designed responsive frontend interfaces to deliver seamless user experiences. 
                  Designed graphics for marketing campaigns and created engaging video content for product showcases. 
                  Worked closely with cross-functional teams to ensure on-time, within-budget project delivery, 
                  while maintaining high standards of code quality and performance.
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-[#A4B465] pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-[#FFCF50] rounded-full -left-[9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-[#626F47]">Web Developer</h4>
                <h5 className="text-[#A4B465] font-semibold mb-2">2022 - 2023 (1 year)</h5>
                <p className="text-gray-600 mb-2">9SkyDigital Solutions, Mumbai</p>
                <p className="text-gray-700">
                  Built and maintained responsive websites using HTML, CSS, JavaScript, and React. Translated UI/UX designs 
                  into functional interfaces, optimized performance, and ensured cross-browser compatibility. 
                  Designed visuals for web and marketing using Photoshop and Canva.
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-[#A4B465] pl-8">
              <div className="absolute w-4 h-4 bg-[#FFCF50] rounded-full -left-[9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-[#626F47]">Web Development Intern</h4>
                <h5 className="text-[#A4B465] font-semibold mb-2">2020 (6 months)</h5>
                <p className="text-gray-600 mb-2">Digihand India, Mumbai</p>
                <p className="text-gray-700">
                  Assisted in developing and maintaining client websites using HTML, CSS, JavaScript, and basic React. 
                  Participated in team meetings, contributed to project planning, and gained hands-on experience with 
                  front-end workflows and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
