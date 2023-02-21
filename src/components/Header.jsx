import icono from './icons/icono1.jpg'

function Header() {
  return (
    <div className='text-white flex m-auto w-4/5' >
      <h1 className='m-4'>MARCA</h1>
      <ul className='flex ml-auto' >
        <li className='m-4'><a href='#'>Home</a></li>
        <li className='m-4'><a href='#'>About</a></li>
        <li className='m-4'><a href='#'>Services</a></li>
        <li className='m-4'><a href='#'>Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;
