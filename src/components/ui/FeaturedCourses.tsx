// import courseData from "..data\music_course.json"
import Link from "next/link"

function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
        <div className="text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">COURSE KNOWLEDGE</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-purple-400 sm:text-4xl">Learning the best</p>
        </div>
        <div></div>
        <div className="mt-20 text-center">
        <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All courses
        </Link>

        </div>

    </div>
  )
}

export default FeaturedCourses