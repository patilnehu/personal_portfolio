import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Users, Zap } from "lucide-react";

export default function AboutSection() {
  const responsibilities = [
    "Converting Figma designs to functional web pages",
    "Building reusable components and maintaining design consistency",
    "Ensuring cross-browser compatibility and mobile responsiveness",
    "Collaborating with stakeholders to meet design goals and deadlines",
  ];

  const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Figma"];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            About{" "}
            <span className="text-purple-500 dark:text-purple-400">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Cards */}
            <div className="space-y-8">
              {/* Frontend Developer Card */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-800/50 rounded-lg flex items-center justify-center">
                      <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Frontend Developer
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I am a dedicated and versatile frontend developer with a
                    passion for creating efficient and user-friendly web
                    applications. With 1 year of experience, I have worked with
                    a variety of technologies, including React, Next.js, and
                    Tailwind CSS.
                  </p>
                </CardContent>
              </Card>

              {/* Freelance Experience Card */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800/50 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Freelance Experience
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      As a freelance frontend developer, I built a fully
                      responsive website for{" "}
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        Gram Association
                      </span>
                      , taking the design from Figma and converting it into
                      clean, scalable code.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I used Next.js, TypeScript, and Tailwind CSS to develop a
                      fast, modern, and mobile-friendly user interface optimized
                      for performance and accessibility across all screen sizes.
                    </p>

                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {responsibilities.map((responsibility, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - About Text */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    My Journey
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      My journey in web development began with a deep curiosity
                      for how things work, and it has evolved into a career
                      where I continuously strive to learn and adapt to new
                      challenges.
                    </p>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      I thrive in collaborative environments and enjoy solving
                      complex problems to deliver high-quality solutions.
                      Outside of coding, I enjoy staying active, exploring new
                      technologies, and contributing to open-source projects.
                    </p>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        What drives me:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          Creating intuitive user experiences
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Writing clean, maintainable code
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Continuous learning and growth
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          Collaborating with amazing teams
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  1
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Year Experience
                </div>
              </div> */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  4
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Months Freelancing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
