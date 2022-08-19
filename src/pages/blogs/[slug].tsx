import Head from "next/head"
import { allBlogs, type Blog } from "contentlayer/generated"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const blog = allBlogs.find((blogFromAll) => blogFromAll.slug === params.slug)

	return {
		props: {
			blog,
		},
	}
}

export async function getStaticPaths() {
	const slugs = allBlogs.map((blog) => blog.slug)
	const paths = slugs.map((slug) => {
		return { params: { slug } }
	})

	return {
		paths,
		fallback: false,
	}
}

export default function Blog({ blog }: { blog: Blog }) {
	const components = {
		Image,
	}
	const MDXContent = useMDXComponent(blog.body.code)

	return (
		<>
			<Head>
				<title>{blog.title}</title>
			</Head>
			<article className='prose prose-slate lg:prose-xl mx-auto'>
				<h1 className='text-center mb-3'>{blog.title}</h1>
				<p className='text-slate-500 text-center'>
					bloged on{" "}
					<time dateTime={blog.date} title={new Date(blog.date).toString()}>
						{new Date(blog.date).toLocaleDateString("en-CA")}
					</time>
				</p>
				<MDXContent components={components} />
			</article>
		</>
	)
}
