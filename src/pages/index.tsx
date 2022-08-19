import { allBlogs, Blog } from "contentlayer/generated"
import Link from "next/link"
import { format } from "date-fns"
import id from "date-fns/locale/id"

export async function getStaticProps() {
	const blogs = allBlogs.sort((a, b) => {
		if (new Date(a.date).getTime() >= new Date(b.date).getTime()) {
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
				<h2 className='mb-8 text-3xl font-bold'>Projects</h2>
				<Link
					href='/blogs'
					className='cursor-pointer group mt-8 flex items-center justify-start space-x-2 text-xl font-medium'
				>
					<span>View All Projects</span>
				</Link>
				<div className='grid grid-cols-2 gap-4'>
					{blogs.slice(0, 4).map((blog) => {
						return (
							<div
								key={blog._id}
								className='cursor-pointer group relative rounded-lg border-[1px] border-tertiary bg-secondary p-4 transition duration-200 hover:border-accent md:hover:scale-[1.02]'
							>
								<Link
									href={`/blogs/${blog.slug}`}
									className='flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4'
								>
									<div className='flex-col space-y-2'>
										<h3 className='flex flex-row items-center space-x-2 text-lg font-semibold'>
											{blog.title}
										</h3>
										{/* <p className='text-md text-gray-300'>{blog.description}</p> */}
									</div>
								</Link>
								<p className='min-w-[90px] text-right text-slate-500'>
									{format(new Date(blog.date), "d MMMM, yyyy", { locale: id })}
								</p>
							</div>
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
