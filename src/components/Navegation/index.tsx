/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export interface NavbarOptions {
  title: string;
  subItems: string[];
}

interface PropsNavbar {
  children?: React.ReactNode;
  navbarOptions?: NavbarOptions[];
}

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
                  <li key={index} className="nav-item">
                    <a className="nav-link" href="#">{option.title}</a>
                  </li>
                  )
                :
                  (
                    <li key={index} className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        {option.title}
                      </a>
                      {option.subItems.length > 0 && (
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