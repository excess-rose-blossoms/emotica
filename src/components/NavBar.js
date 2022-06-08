import '../css/components/navbar.css';

function NavBar(props) {
  return (
    <div className='navbar'>
        <span className='nav-header'>EM😘TICA</span>
        <span className='nav-content'>home</span>
        <span className='nav-content'>profile</span>
        <span className='nav-content'>logout</span>
    </div>
  );
}

export default NavBar;