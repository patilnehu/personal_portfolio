import { Card, CardContent } from "@/components/ui/card";

export default function TechnologiesSection() {
  const techStack = {
    "Programming Languages": [
      { name: "HTML5", color: "bg-orange-400 text-black", icon: "🌐" },
      { name: "CSS3", color: "bg-blue-400 text-black", icon: "🎨" },
      { name: "JavaScript", color: "bg-yellow-300 text-black", icon: "⚡" },
      { name: "TypeScript", color: "bg-blue-400 text-black", icon: "📘" },
      { name: "Python", color: "bg-green-400 text-black", icon: "🐍" },
    ],
    "Frameworks & Libraries": [
      { name: "React", color: "bg-cyan-500 text-white", icon: "⚛️" },
      { name: "Node.js", color: "bg-green-500 text-white", icon: "🟢" },
      { name: "Next.js", color: "bg-black text-white", icon: "▲" },
      { name: "Tailwind CSS", color: "bg-teal-500 text-white", icon: "💨" },
    ],
    "Tools & Platforms": [
      { name: "Canva", color: "bg-purple-500 text-white", icon: "🎨" },
      { name: "Figma", color: "bg-pink-500 text-white", icon: "🎯" },
      { name: "GitHub", color: "bg-gray-800 text-white", icon: "🐙" },
      { name: "VS Code", color: "bg-blue-600 text-white", icon: "💻" },
    ],
  };

  return (
    <section
      id="technologies"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50  dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Technologies
            </h2>
          </div>

          <div className="space-y-12">
            {Object.entries(techStack).map(([category, technologies]) => (
              <Card
                key={category}
                className="border-none shadow-lg bg-white dark:bg-gray-900"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-sm">
                        {category === "Programming Languages"
                          ? "📝"
                          : category === "Frameworks & Libraries"
                          ? "⚙️"
                          : "🛠️"}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 ${tech.color}`}
                      >
                        <span>{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
