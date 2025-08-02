import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12 sm:mb-16">
            Get In Touch
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 text-center px-4">
            I&apos;m always open to discussing new opportunities and interesting
            projects. Feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 mb-8 sm:mb-12">
            {/* Email Card */}
            <div className="flex items-center gap-4 p-4 w-full sm:w-auto rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Email
                </p>
                <a
                  href="mailto:dev.nehapatil@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all text-sm sm:text-base"
                >
                  dev.nehapatil@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-4 p-4 w-full sm:w-auto rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </p>
                <a
                  href="tel:+918087181226"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base"
                >
                  +91 8087181226
                </a>
              </div>
            </div>
          </div>

          <Card className="w-full sm:max-w-md mx-auto border-none shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/patilnehu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <IoLogoGithub className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/neha-patil-8440542b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
