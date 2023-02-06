import { Inter } from '@next/font/google'
import PageContent from '@spotify-clone/components/PageContent'
import Player from '@spotify-clone/components/Player'
import Sidebar from '@spotify-clone/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div>
			<main>
				<Sidebar />
				<PageContent />
			</main>
			<Player />
		</div>
	)
}
