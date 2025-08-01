import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white  mb-6 leading-tight">
            WELCOME TO MY WORLD
          </h1>
          <h1 className="text-3xl md:text-5xl  text-gray-900 dark:text-white  mb-6 leading-tight">
            Hi, I&apos;m Neha Arun Patil
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300  mb-8 max-w-2xl mx-auto">
            Frontend Developer passionate about creating beautiful and
            functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects-section">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 ">
                View My Work
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div> */}
      </div>
    </section>
  );
}
