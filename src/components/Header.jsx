import '../styles/Header.scss';

function Header() {

  return (
    <header id="content-header">
      <div className='container-navbar' id='container-navbar'>
        <a id='nombre' href='/'>rafael juarez flores<span id='texto_intermitente'>.</span></a>
        <div className='items'>
          <a href='/#Experiencia'>Experiencia</a>
          <a href='/#Portfolio'>Portfolio</a>
          <a id='btn_contact'  href='mailto:rafeljuarezflores@gmail.com'>Contacto</a>
        </div>
      </div>
    </header>
  )
}

export default Header;