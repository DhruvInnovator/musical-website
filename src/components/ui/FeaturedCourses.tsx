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
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

  return (
    <div className="py-42 w-full sm:py-12 px-9 sm:px-8 lg:px-15 bg-gray-900">
      <div>
        <div className="text-center py-8 sm:py-12">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">COURSE KNOWLEDGE</h2>
          <p className="mt-3 text-4xl sm:text-4xl leading-8 font-extrabold tracking-tight text-purple-400">Learning the best</p>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden w-full max-w-md">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <div className="h-36 sm:h-24 w-full flex items-center justify-center">
                    <p className=" font-serif text-3xl sm:text-2xl text-black dark:text-neutral-200">{course.title}</p>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4 mb-6">{course.description}</p>
                  <p className="text-purple-500">Price: ${course.price}</p>
                  <p className="text-purple-600">Instructor: {course.instructor}</p>
                  <Link href={`/course/${course.slug}`} className="text-purple-700 mt-4">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-2xl text-sm">
                      Learn More
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8  w-ful; flex justify-center items-center">
        <Link href="/courses" className="mb-8">
          <HoverBorderGradient>
            View All courses
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses





