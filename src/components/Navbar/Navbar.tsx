import Link from 'next/link'
import './Navbar.css';

function Navbar() {
  return (
    <header className='container nav_bar'    
    >
      <div className="left nav_items">AmjadCreations</div>
      <div className="right"
      data-aos = "fade-left"
      data-aos-duration = "1000"
      >
        <Link href='#hero' className='nav_items'>Home</Link>
        <Link href='#experience' className='nav_items'>Experience</Link>
        <Link href='#skills' className='nav_items'>Skills</Link>
        <Link href='#projects' className='nav_items'>Projects</Link>
        <Link href='#contact' className='nav_items'>Contact</Link>
      </div>
      
    </header>
  )
}

export default Navbar
