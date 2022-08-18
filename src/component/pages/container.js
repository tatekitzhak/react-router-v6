import React from 'react';
import Header from '@/component/pages/header';
import Main from '@/component/pages/main';
import SideBar from '@/component/pages/sidebar';
import Footer from '@/component/pages/footer';


function Container(props) {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <SideBar></SideBar>
            <Footer></Footer>
        </>
    );
}

export default Container;