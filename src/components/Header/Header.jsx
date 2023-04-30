import Navbar from './Navbar'
import Hero from './Hero'

export default function Header() {
  return (
    <div className='antialiased bg-[#fff4f263] bg-gradient-to-t from-[#fff0ee] md:py-12'>
      <Navbar />
      <Hero />
    </div>
  )
}
