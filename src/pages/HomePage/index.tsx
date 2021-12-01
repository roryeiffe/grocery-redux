import React from 'react'
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Category from '../../components/Category';

interface Props {}

const HomePage: React.FC<Props> = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Category/>
            <Footer/>
        </div>
    )
}

export default HomePage;