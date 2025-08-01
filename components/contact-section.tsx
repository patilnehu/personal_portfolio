import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50  dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
            Get In Touch
          </h2>

          <div className="flex justify-center items-center">
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                  I'm always open to discussing new opportunities and
                  interesting projects. Feel free to reach out.
                </p>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href="mailto:dev.nehapatil@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      dev.nehapatil@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <a
                      href="tel:+918087181226"
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      +91 8087181226
                    </a>
                  </div>
                </div>
              </div>

              <Card className="w-sm mx-auto border-none shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Connect With Me
                  </h3>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://github.com/patilnehu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-14 h-14 bg-gray-100 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="GitHub Profile"
                    >
                      <IoLogoGithub className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/neha-patil-8440542b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-14 h-14 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedinIn className="text-2xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
