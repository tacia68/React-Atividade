/*src/Navegation/index.tsx*/

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Interface para as opções da barra de navegação
export interface NavbarOptions {
  title: string; // Título da opção
  subItems: string[]; // Subitens da opção
}

// Props do componente Navbar
interface PropsNavbar {
  children?: React.ReactNode;
  navbarOptions?: NavbarOptions[]; // Opções da barra de navegação
}

// Componente Navbar
const Navbar: React.FC<PropsNavbar> = ({ children, navbarOptions,...props }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {navbarOptions?.map((option, index) => (
              <>
                {option?.subItems?.length === 0 ? 
                  (
                    // Renderiza uma opção sem subitens
                    <li key={index} className="nav-item">
                      <a className="nav-link" href="#">{option.title}</a>
                    </li>
                  )
                  :
                  (
                    // Renderiza uma opção com subitens
                    <li key={index} className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {option.title}
                      </a>
                      {option.subItems.length > 0 && (
                        // Renderiza a lista de subitens dentro do dropdown
                        <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                          {option.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a className="dropdown-item " href="#">{subItem}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                }
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
