import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({title, mainMenu,}) => {


    // Estado para mostrar u ocultar el menú responsivo
    const [toggleState, setToggleState] = useState(false)
    
    // Función que controla el menú responsivo
    const handleToggleResponsiveMenu = () => {
        setToggleState( !toggleState ? true : false)
    }

    // Función que da efecto smooth a los link
    const handleSmooth = (e,link) => {
        e.preventDefault()
        const offsetTop = document.querySelector(link).offsetTop;
        
        window.scrollTo({
            top: offsetTop -55,
            behavior: 'smooth'
          });

        //Cerrar menú cuando seleccione vinculo
        setToggleState(false);
    }

    return(
        <Fragment>

        {/* Menú */}
        <nav className='z-50 overflow-hidden sticky top-0 flex justify-between flex-wrap content-center  px-8 w-full h-14 bg-white border-b border-gray-300'>

            {/* Título o logo */}
            <p className='tracking-tight text-green-700 text-xl font-bold'>{ title }</p>

            {/* Lista de hipervinculos */}
            <div className='flex flex-wrap content-center hidden md:flex'>
                {
                    mainMenu.map( ({link, linkContent,id}) => <Link onClick={ (e)=> handleSmooth(e,link)} key={id} to={link} className='link-item-sm ml-3 duration-300'>{linkContent}</Link>)
                }
            </div>
            
            {/* Boton menú responsivo */}
            <div onClick={ handleToggleResponsiveMenu } className='menu flex flex-wrap content-center  w-8 cursor-pointer md:hidden'>
                <div className="line bg-gray-600 w-full h-1"></div>
                <div className="line bg-gray-600 w-full h-1 my-1"></div>
                <div className="line bg-gray-600 w-full h-1"></div>
            </div>

        </nav>
        
        {/* Menú Responsivo */}
        <div id='responsiveMenu' className={`z-40 fixed flex flex-col px-7 bg-white py-5 border-gray-300 border-r h-screen w-64 duration-300 ${ !toggleState ? '-ml-Nmedium': null} md:-ml-Nmedium`} >
            {
                mainMenu.map( ({link, linkContent,id}) => <Link onClick={ (e)=> handleSmooth(e,link)} key={id} to={link} className='link-item-base mt-3'>{linkContent}</Link> )
            }
        </div>
        </Fragment>
    );
}

export default Nav