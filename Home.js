import React, { useState } from 'react'
import styled from 'styled-components'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import BottomNavbar from './BottomNavbar';
import { IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import TinderCard from 'react-tinder-card';
import CardsComponent from './CardsComponent';

const Home = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <>
            {
                showAlert ? (
                    <>
                        <CustomAleart onClick={() => setShowAlert(false)}>
                            <div>
                                Swipe right to show interest and left if not your type
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png" alt="" />
                            </div>
                        </CustomAleart>
                    </>
                )

                    :

                    (
                        <></>
                    )
            }
            <Container>
                <Navbar>
                    <IconButton>
                        <FilterListIcon style={{ fontSize: '1.8rem', fill: '#625c68' }} />
                    </IconButton>
                    <section>
                        <IconButton>
                            <SearchIcon style={{ fontSize: '1.8rem', fill: '#625c68' }} />
                        </IconButton>
                        <IconButton>
                            <ChatIcon style={{ fontSize: '1.8rem', fill: '#625c68' }} />
                        </IconButton>
                    </section>
                </Navbar>

                <ShowOptions>
                    <span>
                        <ClearIcon onClick={() => setShowAlert(true)} style={{ fontSize: '0.8rem', fill: 'red' }} />
                    </span>
                    <span>
                        <FavoriteIcon onClick={() => setShowAlert(true)} style={{ fontSize: '0.8rem', fill: 'orange' }} />
                    </span>
                </ShowOptions>

                <CardsComponent />
                <CardsComponent />
                <CardsComponent />
                <CardsComponent />




            </Container>
            <BottomNavbar />
        </>
    )
}

export default Home

const Container = styled.div`
    /* padding: 1rem 0.6rem; */
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`
const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    section{
    display: flex;
    align-items: center;
}
`


const CustomAleart = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    transition-delay: 2s;
    @media(min-width: 900px){
            display: none;
        } 
    
    
    div{
        position: fixed;
        top: 30px;
        z-index: 100;
        padding: 1rem;
        width: 600px;
        background-color: #5fd979;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;

        @media(max-width: 900px){
            padding: 0.5rem 1rem;
            width: 90vw;
            top: auto;
            bottom: 75px;
            font-size: 0.8rem;
            background-color: #5fd979;
        } 

        img {
            height: 1.4rem;
            margin-right: 0.3rem;
        }
    }
`

const ShowOptions = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 45%;
    padding: 0 1rem;
    z-index: 1;

    span{
        display: grid;
        place-items: center;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: white;
    }
`