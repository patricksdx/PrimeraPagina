import logo from './icons/Logo.png'
 
function Header() {

  return (
    <div className='text-slate-700 flex w-full md:w-4/6 xl:w-4/5 md:m-auto' >
      <div className='flex m-6 md:m-4'>
      <picture>
        <img src={logo} className='w-5 mr-4'></img>
      </picture>
      <h1>MARCA</h1>
      </div>
      <ul className='hidden ml-auto md:flex xl:flex' >
        <li className='w-full p-4 rounded-lg hover:text-white hover:bg-slate-700'><a href='#'>Home</a></li>
        <li className='w-full p-4 rounded-lg hover:text-white hover:bg-slate-700'><a href='#'>About</a></li>
        <li className='w-full p-4 rounded-lg hover:text-white hover:bg-slate-700'><a href='#'>Services</a></li>
        <li className='w-full p-4 rounded-lg hover:text-white hover:bg-slate-700'><a href='#'>Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;
