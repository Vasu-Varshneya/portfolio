'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Mail, User,Github, Phone } from "lucide-react"
import Link from "next/link"
export default function Component() {
  const handleLin=()=>{
    window.open('https://www.linkedin.com/in/vasu-varshney-16b8a9278')
  }
  const handleGit=()=>{
    window.open('https://github.com/Vasu-Varshneya')
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <User className="h-6 w-6" />
          <span className="sr-only">Your Name</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Vasu Reena Kush Varshneya
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Web Developer | Designer | Problem Solver
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button>Contact Me</Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline">View Projects</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              I'm a passionate web developer with a keen eye for design and a love for creating intuitive, user-friendly
              applications. With a background in CSE, I bring a unique perspective to every project I
              work on.
            </p>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>HTML, CSS, JavaScript, React,</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Backend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Node.js, Express</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Database Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>MongoDB, PostgreSQL, MySQL</p>
                </CardContent>
              </Card>
              {/* Add more skill cards as needed */}
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>A brief description of Project 1</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Technologies used: React, Node.js, MongoDB</p>
                  <Link href="#" className="mt-4 inline-block">
                    <Button>View Project</Button>
                  </Link>
                </CardContent>
              </Card> */}
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>A brief description of Project 2</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Technologies used: Vue.js, Express, PostgreSQL</p>
                  <Link href="https://spotify-clone-eta-ebon.vercel.app/" className="mt-4 inline-block">
                    <Button>View Project</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>A brief description of Project 3</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Technologies used: Django, React, MySQL</p>
                  <Link href="https://netflix-clone-three-tan.vercel.app/" className="mt-4 inline-block">
                    <Button>View Project</Button>
                  </Link>
                </CardContent>
              </Card>
              {/* Add more project cards as needed */}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl flex justify-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Me</h2>
            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <div className="gap-6 flex flex-col justify-center items-center">
                  <div className="gap-2 flex justify-center items-center tracking-tight">
                    <Mail/>
                    <span>vasuvarshney26@gmail.com</span>
                  </div>
                  <div className="gap-2 flex justify-center items-center ">
                    <Phone/>
                    <span>7011870463</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Vasu. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link onClick={handleGit} className="text-xs hover:underline underline-offset-4" href="#">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <button onClick={handleLin}>
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </button>
        </nav>
      </footer>
    </div>
  )
}