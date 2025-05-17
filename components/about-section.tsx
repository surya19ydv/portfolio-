import Image from "next/image"
import { Download, Mail, MapPin, Phone, Calendar, Briefcase, GraduationCap, Clock, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#FEFAE0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#626F47]">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Software Developer & Creative Professional passionate about creating elegant solutions through code, design, and video production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image - 5 columns on large screens */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#FFCF50]/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#626F47]/20 rounded-3xl transform -rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    src="/images/gallery/new.avif"
                    alt="Suryakala Yadav"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Name banner */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#626F47] to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Suryakala Yadav</h3>
                  <p className="text-[#FFCF50] font-medium">Software Developer & Creative Professional</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content - 7 columns on large screens */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFCF50]/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#A4B465]/10 rounded-full -ml-20 -mb-20"></div>
              
              <div className="relative">
                {/* Bio section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#626F47] mb-4 flex items-center">
                    <span className="bg-[#FFCF50]/20 p-2 rounded-full mr-3">
                      <Briefcase className="h-5 w-5 text-[#626F47]" />
                    </span>
                    Professional Profile
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I specialize in building scalable web applications and creating engaging visual content. With expertise in both development and design, I help businesses create cohesive digital experiences that are both functional and visually appealing.
                  </p>
                </div>
                
                {/* Info cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#FEFAE0] rounded-xl p-4 flex items-start">
                    <span className="bg-[#626F47] p-2 rounded-full mr-3 shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <h4 className="font-medium text-[#626F47] text-sm">Email</h4>
                      <p className="text-gray-700">yadavsuryakala517@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#FEFAE0] rounded-xl p-4 flex items-start">
                    <span className="bg-[#626F47] p-2 rounded-full mr-3 shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <h4 className="font-medium text-[#626F47] text-sm">Location</h4>
                      <p className="text-gray-700">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#FEFAE0] rounded-xl p-4 flex items-start">
                    <span className="bg-[#626F47] p-2 rounded-full mr-3 shrink-0">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <h4 className="font-medium text-[#626F47] text-sm">Education</h4>
                      <p className="text-gray-700">B.E. in EXTC</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#FEFAE0] rounded-xl p-4 flex items-start">
                    <span className="bg-[#626F47] p-2 rounded-full mr-3 shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <h4 className="font-medium text-[#626F47] text-sm">Experience</h4>
                      <p className="text-gray-700">3+ Years</p>
                    </div>
                  </div>
                </div>
                
                {/* Availability section */}
                <div className="bg-[#A4B465]/10 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-[#626F47] mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-[#626F47]" />
                    Availability
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">part-time Positions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">Remote Work</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">Freelance Projects</span>
                    </div>
                  </div>
                </div>
                
                {/* Resume button */}
                <div className="flex justify-center">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center px-8 py-3 bg-[#626F47] hover:bg-[#A4B465] text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#626F47]">My Skills</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A combination of development and creative skills that allow me to deliver comprehensive digital solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFCF50]/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#A4B465]/10 rounded-full -ml-20 -mb-20"></div>
            
            <div className="relative">
              {/* Skill categories */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                {/* Development Skills */}
                <div>
                  <h4 className="text-xl font-bold text-[#626F47] mb-6 flex items-center">
                    <span className="bg-[#FFCF50]/20 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#626F47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                    Development
                  </h4>
                  
                  <div className="space-y-6">
                  <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#626F47]">Python & Django</span>
                        <span className="text-[#626F47] font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-[#626F47] to-[#A4B465] h-3 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#626F47]">React & Next.js</span>
                        <span className="text-[#626F47] font-bold">70%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-[#626F47] to-[#A4B465] h-3 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#626F47]">AWS And Deployment</span>
                        <span className="text-[#626F47] font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-[#626F47] to-[#A4B465] h-3 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    


                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#626F47]">Database Management</span>
                        <span className="text-[#626F47] font-bold">80%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-[#626F47] to-[#A4B465] h-3 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Creative Skills */}
                <div>
                  <h4 className="text-xl font-bold text-[#626F47] mb-6 flex items-center">
                    <span className="bg-[#FFCF50]/20 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#626F47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </span>
                    Creative
                  </h4>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#626F47]">Photoshop</span>
                        <span className="text-[#626F47] font-bold">80%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-[#FFCF50] to-[#A4B465] h-3 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#626F47]">Canva</span>
                        <span className="text-[#626F47] font-bold">95%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-[#FFCF50] to-[#A4B465] h-3 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#626F47]">Filmora</span>
                        <span className="text-[#626F47] font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-[#FFCF50] to-[#A4B465] h-3 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional skills */}
              <div className="mt-10">
                <h4 className="text-lg font-bold text-[#626F47] mb-4">Additional Skills</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#FEFAE0] text-[#626F47] px-4 py-2 rounded-full font-medium">Git & GitHub</span>
                  <span className="bg-[#FEFAE0] text-[#626F47] px-4 py-2 rounded-full font-medium">Responsive Design</span>
                  <span className="bg-[#FEFAE0] text-[#626F47] px-4 py-2 rounded-full font-medium">CI/CD Pipelines</span>
                  <span className="bg-[#FEFAE0] text-[#626F47] px-4 py-2 rounded-full font-medium">REST APIs</span>
                  <span className="bg-[#FEFAE0] text-[#626F47] px-4 py-2 rounded-full font-medium">Tailwind CSS</span>
                  <span className="bg-[#FEFAE0] text-[#626F47] px-4 py-2 rounded-full font-medium">Video Editing</span>
                  <span className="bg-[#FEFAE0] text-[#626F47] px-4 py-2 rounded-full font-medium">Content Creation</span>
                  <span className="bg-[#FEFAE0] text-[#626F47] px-4 py-2 rounded-full font-medium">SEO Basics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
