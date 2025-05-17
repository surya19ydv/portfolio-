"use client"

import { motion } from "framer-motion"
import { Code, Cloud, Database, Server, Globe, Cpu } from "lucide-react"

export default function ExpertiseSection() {
  const expertiseItems = [
    {
      title: "Full-Stack Development",
      description: "Building robust, scalable applications with React, Node.js, and modern frameworks.",
      icon: <Code className="w-10 h-10 text-[#e94560]" />,
    },
    {
      title: "AWS Cloud Architecture",
      description: "Designing and implementing secure, cost-effective cloud infrastructure solutions.",
      icon: <Cloud className="w-10 h-10 text-[#e94560]" />,
    },
    {
      title: "Database Management",
      description: "Working with SQL and NoSQL databases including PostgreSQL, MongoDB, and DynamoDB.",
      icon: <Database className="w-10 h-10 text-[#e94560]" />,
    },
    {
      title: "DevOps & CI/CD",
      description: "Implementing automated pipelines with Docker, Kubernetes, and CI/CD tools.",
      icon: <Server className="w-10 h-10 text-[#e94560]" />,
    },
    {
      title: "Responsive Web Design",
      description: "Creating user-friendly, mobile-first websites with modern CSS frameworks.",
      icon: <Globe className="w-10 h-10 text-[#e94560]" />,
    },
    {
      title: "Serverless Computing",
      description: "Building scalable applications with AWS Lambda, API Gateway, and serverless frameworks.",
      icon: <Cpu className="w-10 h-10 text-[#e94560]" />,
    },
  ]

  return (
    <section id="expertise" className="py-20 bg-[#f0f0f0]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#1a1a2e]">My Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With a diverse skill set spanning software development, cloud services, and DevOps practices, I bring
            comprehensive solutions to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#e94560]"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
