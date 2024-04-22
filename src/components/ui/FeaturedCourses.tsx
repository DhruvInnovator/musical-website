"use client"

import courseData from "@/data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./background-gradient"
import { Button } from "./moving-border"
import { HoverBorderGradient } from "./hover-border-gradient"

// import { createContext } from 'react';


interface Course{
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
      
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="py-56 w-screen px-56 bg-gray-900">
        <div >
          <div className="text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">COURSE KNOWLEDGE</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-purple-400 sm:text-4xl">Learning the best</p>
          </div>
        </div>


        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow ">
                    <li className="min-h-[80%]">
                      <p className="text-9xl sm:text-xl text-black mt-2 mb-4 dark:text-neutral-200">{course.title}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                      <p className="text-purple-500">Price: ${course.price}</p>
                      <p className="text-purple-600">Instructor: {course.instructor}</p>
                    </li>
                    
                    <Link href={`/course/${course.slug}`} className="text-purple-700">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold  py-2 px-4 rounded-2xl mt-5 text-sm">
                      Learn More
                    </button>
                    </Link>
                    
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>        
        <div className="mt-20 w-full flex justify-center items-center">
          <Link href={"/courses"}>
          <HoverBorderGradient>
            View All courses
          </HoverBorderGradient>
          </Link>
        

       
        </div>

    </div>
  )
}

export default FeaturedCourses