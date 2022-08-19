import React from 'react';
import HeaderNavList from '@/components/headerBarMenu/HeaderNavList';

/**
 * 
 * https://javascript.tutorialink.com/export-default-and-multiple-child-components/
 */

const Layout = (props) => {
    return <div className="layout ">{props.children}</div>;
  };
  
  const Header = (props) => {
    return <header className="layout__header">{props.children}</header>;
  };
  
  const Body = (props) => {
    return <div className="layout__body">{props.children}</div>;
  };
  
  const Footer = (props) => {
    
    return (
            <footer style={{backgroundColor: '#385071', color: 'white'}} >
                <p>Footer</p>
                <HeaderNavList>
                    Header
                </HeaderNavList>
            </footer>
            );
  };
  
  Layout.Header = Header;
  Layout.Body = Body;
  Layout.Footer = Footer;
  
export default Layout;