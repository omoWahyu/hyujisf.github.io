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

export default function Home({
	blogs,
	children,
}: {
	blogs: Blog[]
	children: React.ReactNode
}) {
	const noBlogs = <p className='text-slate-700'>Nothing posted yet.</p>
	const hasBlogs = (
		<ul>
			{blogs.map((blog) => {
				return <>{children}</>
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
