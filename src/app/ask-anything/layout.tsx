import { Metadata } from 'next'

import { ChatHeader } from './[chatId]/_components/ChatHeader'

export const metadata: Metadata = {
  title: 'Chatbot showcase | Alpatech Logics',
  description:
    'Ask Alpatech Logics - A product of AlpatechLogics - Transforming ideas into innovative software solutions',
  keywords: [
    'ChatGPT',
    'Artificial Intelignece',
    'Next.js',
    'React',
    'JavaScript',
    'Web Development',
    'App Development',
    'Alpatech Logics',
  ],

  openGraph: {
    title: 'Chatbot showcase | Alpatech Logics',
    description: 'Transforming ideas into innovative software solutions',
    url: 'https://alphatechlogics.com/',
    siteName: 'Alphatech Logics',
    locale: 'en_US',
    type: 'website',
  },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-[calc[100svh-57px]] flex-col items-center overflow-x-hidden'>
      <div className='flex h-[calc[100svh-57px]] w-full flex-col overflow-x-hidden md:h-[calc[100svh-93px]]'>
        <ChatHeader />
        {children}
      </div>
    </div>
  )
}

export default Layout
