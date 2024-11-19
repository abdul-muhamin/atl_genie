import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='flex h-6 items-center justify-between truncate bg-[#3F3D56] p-2 text-[0.6rem] text-white md:px-8'>
      <p></p>
      <p>Ⓒ Alphatech Logics {new Date().getFullYear()}</p>
      <div className='flex h-full flex-row gap-1'>
        <p className='flex items-center'>built by</p>
        <Link
          href={'https://alphatechlogics.com/'}
          target='_blank'
          className='flex items-center'
        >
          <Image
            src={'/PURPLE_A.png'}
            alt='alphatechlogics'
            width={70}
            height={70}
          />
        </Link>
      </div>
    </div>
  )
}
