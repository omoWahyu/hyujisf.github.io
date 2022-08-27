import { allBlogs, Blog } from "contentlayer/generated"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import id from "date-fns/locale/id"

export async function getStaticProps() {
  const blogs = allBlogs.sort((a, b) => {
    if (
      new Date(a.publishDate).getTime() >= new Date(b.publishDate).getTime()
    ) {
      return -1
    }

    return 1
  })

  return {
    props: {
      blogs,
    },
  }
}

export default function Home({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      <div className='my-16 flex flex-col'>
        <h2 className='mb-8 text-3xl font-bold'>Blogs</h2>
        <Link
          href='/blogs'
          className='cursor-pointer group mt-8 flex items-center justify-start space-x-2 text-xl font-medium'
        >
          <span>View all Blogs</span>
        </Link>
        <div className='grid gap-4'>
          {blogs.slice(0, 8).map((blog) => {
            return (
              <Link
                key={blog._id}
                href={`/blogs/${blog.slug}`}
              >

                <a
                  className='group relative transition-all duration-300 hover:border-accent '
                >

                  <div className="">
                    <div className='flex-col space-y-2'>
                      <h3 className='flex flex-row items-center space-x-2 text-lg font-semibold'>
                        {blog.title}
                      </h3>
                      {/* <p className='text-md text-gray-300'>{blog.description}</p> */}
                    </div>
                  </div>

                  <span className='text-slate-500'>
                    {format(new Date(blog.publishDate), "d MMM, yyyy", {
                      locale: id,
                    })}
                  </span>
                  <p className="text-base">
                    {blog.description}
                  </p>
                </a>
              </Link>
              // <li key={blog.title} className='flex justify-between mb-3'>
              // 	<h2 className='text-lg text-slate-900 hover:text-blue-600'>
              // 		<Link href={`/blogs/${blog.slug}`}>
              // 			<a>{blog.title}</a>
              // 		</Link>
              // 	</h2>
              // 	<p className='min-w-[90px] text-right text-slate-500'>
              // 		{new Date(blog.date).toLocaleDateString("en-CA")}
              // 	</p>
              // </li>
            )
          })}
        </div>
      </div>
    </>
  )
}
