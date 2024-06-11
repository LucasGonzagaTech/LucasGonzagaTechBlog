import Image from 'next/image'
import Logo from '../../public/Logo.svg'
export default () => {

    return(
        <header className='w-full h-20 sm:h-28 flex items-center'>
            <Image 
            src={Logo}
            alt='Logo do blog'
            width={350}
            height={30}
            className='w-44 sm:w-[229px]'
            />
        </header>
    )
}