import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const BottomNavbar = () => {
    return (
        <Container>
            <Link to="/">
                <HomeIcon style={{ fontSize: '1.8rem' }}/>
            </Link>
            <Link to="/explore">
                <ExploreIcon style={{ fontSize: '1.8rem' }}/>
            </Link>
            <Link to="/trending">
                <WhatshotIcon style={{ fontSize: '1.8rem' }}/>
            </Link>
            <Link to="/myprofile">
                <AccountCircleIcon style={{ fontSize: '1.8rem' }}/>
            </Link>
        </Container>
    )
}

export default BottomNavbar

const Container = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0.75rem 0 0.5rem 0;
    background-color: white;
    width: 100vw;
    border-top: 1px solid #e3dddd;

    display: flex;
    justify-content: space-around;
    align-items: center;

`