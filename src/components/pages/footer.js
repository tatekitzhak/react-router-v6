import React from 'react';
import HeaderNavList from '@/components/headerBarMenu/HeaderNavList';

function Footer(props) {
    return (
        <div style={{backgroundColor: '#385071', color: 'white'}} >
            <p>Footer</p>
            <HeaderNavList>
                Header
            </HeaderNavList>
        </div>
    );
}

export default Footer;