import { Metadata } from 'next'
import { Cover } from '@/components/Cover'
import Transition from '@/components/Transition/Transition'
import { Introduction } from '@/components/Introduction'


export const metadata: Metadata = {
  title: 'Portfolio JaviCodeArt',
  description: 'Portfolio animated ',
}


export default function Home() {
  return (
    <main className='h-[100vh]'>
      <Transition />
      <Cover />

    </main>
  )
}
