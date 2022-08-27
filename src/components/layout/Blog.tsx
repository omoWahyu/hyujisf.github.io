import Header from "./Header"
import Footer from "./Footer"

export default function Blog({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className='px-5 max-w-3xl mx-auto'>{children}</main>
			<Footer />
		</>
	)
}
