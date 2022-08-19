import { allBlogs, Blog } from "contentlayer/generated"
import Link from "next/link"

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
	const noBlogs = <p className='text-slate-700'>Nothing posted yet.</p>
	const hasBlogs = (
		<ul>
			{blogs.map((blog) => {
				return (
					<li key={blog.title} className='flex justify-between mb-3'>
						<h2 className='text-lg text-slate-900 hover:text-blue-600'>
							<Link href={`/blogs/${blog.slug}`}>
								<a>{blog.title}</a>
							</Link>
						</h2>
						<p className='min-w-[90px] text-right text-slate-500'>
							{new Date(blog.date).toLocaleDateString("en-CA")}
						</p>
					</li>
				)
			})}
		</ul>
	)

	return (
		<>
			<h1 className='text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3'>
				Hello there!
			</h1>
			<p className='text-slate-700'>Welcome to my new blog</p>
			<hr className='my-5' />
			{blogs.length === 0 ? noBlogs : hasBlogs}
		</>
	)
}
