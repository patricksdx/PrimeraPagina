import icono from './icons/icono1.jpg'

function Header() {
  return (
    <div className='text-white flex w-full md:w-4/6 xl:w-4/5 md:m-auto' >
      <h1 className='m-4'>MARCA</h1>
      <ul className='hidden ml-auto md:flex xl:flex' >
        <li className='m-4'><a href='#'>Home</a></li>
        <li className='m-4'><a href='#'>About</a></li>
        <li className='m-4'><a href='#'>Services</a></li>
        <li className='m-4'><a href='#'>Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;
