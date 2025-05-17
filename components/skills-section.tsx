import { Code, Palette, Video, Database, Server, Cpu } from "lucide-react"

export function SkillsSection() {
  const expertiseItems = [
    {
      title: "Web Development",
      description:
        "Building responsive, user-friendly websites and web applications with modern frameworks and technologies.",
      icon: <Code className="w-10 h-10 text-[#FFCF50]" />,
    },
    {
      title: "Software Development",
      description: "Creating robust, scalable software solutions with clean code and efficient algorithms.",
      icon: <Cpu className="w-10 h-10 text-[#FFCF50]" />,
    },
    {
      title: "Graphic Design",
      description: "Designing visually appealing graphics, logos, and marketing materials using Photoshop and Canva.",
      icon: <Palette className="w-10 h-10 text-[#FFCF50]" />,
    },
    {
      title: "Video Editing",
      description:
        "Producing engaging video content with professional editing, transitions, and effects using Filmora.",
      icon: <Video className="w-10 h-10 text-[#FFCF50]" />,
    },
    {
      title: "DevOps & CI/CD",
      description: "Implementing automated pipelines with Docker, Kubernetes, and CI/CD tools for seamless deployment.",
      icon: <Server className="w-10 h-10 text-[#FFCF50]" />,
    },
    {
      title: "Database Management",
      description: "Working with SQL and NoSQL databases including PostgreSQL, MongoDB, and DynamoDB.",
      icon: <Database className="w-10 h-10 text-[#FFCF50]" />,
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#A4B465]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#626F47]">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer a wide range of services to help businesses leverage technology for growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#FFCF50] hover:border-[#626F47] group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#626F47] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
