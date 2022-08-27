import Link from "next/link"
import Image from "next/image"

export default function Header() {
	return (
		<header className='mt-2 mb-5'>
			<div className='flex justify-between items-center max-w-3xl mx-auto px-5'>
				<Link href='/'>
					<a
						title='Go to homepage'
						aria-label='Go to homepage'
						className='inline-flex gap-4'
					>
						<img
							className='h-10 w-10 rounded-more-sm'
							src='https://github.com/hyujisf.png'
						/>
						<span className='mt-2 text-lg'>Hyujisf</span>
					</a>
				</Link>
				<nav>
					<Link href='/'>
						<a className=' rounded-more py-2 px-4  bg-gray-500 text-white hover:bg-teal-300 hover:text-gray-700 transition-all'>
							Beranda
						</a>
					</Link>
				</nav>
			</div>
		</header>
	)
}
