import Image from 'next/image'
import HomeUI from './HomeUI'

export default function Home() {
  return (
    <main className="bg-white dark:bg-black flex min-h-screen flex-col items-center justify-between p-24">

      <HomeUI />
    </main>
  )
}
