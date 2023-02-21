import logo from './icons/Logo.png'

function Header() {
  return (
    <div className='text-white flex w-full md:w-4/6 xl:w-4/5 md:m-auto' >
      <div className='flex m-6 md:m-4'>
      <picture>
        <img src={logo} className='w-5 mr-4'></img>
      </picture>
      <h1>MARCA</h1>
      </div>
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
