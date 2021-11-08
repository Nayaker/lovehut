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

const CardsComponent = () => {
    return (
            <CardsContainer>
                <TinderCard preventSwipe={['up', 'down ']}>
                    <Card >
                        
                        <section>
                            <UserDesc>
                                <p>
                                    HoYeon Jung
                                </p>
                                <span>CSE 25, 17 mutual friends</span>
                                <span style={{ fontWeight: '200', fontSize: '0.6rem' }}>I am HoYeon Jung from North
                                    Korea and I am quite a less
                                    talkative person and I have
                                    rareky ever dates as I pretty
                                    career focused. I love movies
                                    and like to do romantic dances
                                    too.
                                </span>
                            </UserDesc>
                            <InfoIcon style={{ fill: '#ffffffad', fontSize: '1.5rem' }} />
                        </section>
                    </Card>
                    <DescCard>
                        <div>
                            76%
                        </div>
                        <section>Our love meter algorithm, has calculated compatability
                            according to the choices and similarities.
                        </section>
                    </DescCard>
                    </TinderCard>
                </CardsContainer>
    )
}

export default CardsComponent

const CardsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    height: 96vh;
    padding: 1.5rem 0.6rem 0 0.6rem;
`

const Card = styled.div`
    height: 60vh;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin: 0 0 8px 0;
    box-shadow: 0px 18px 53px 0px #a9a2a24d;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://www.eelive.ng/wp-content/uploads/2021/10/images-38.jpeg') center center / cover no-repeat;
    overflow: hidden;
    position: relative;

    section{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0.3rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`

const DescCard = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 0.3rem;
    box-shadow: 0px 1px 53px 0px #a9a2a24d;
    display: flex;
    justify-content: space-between;
    align-items: center;

    section{
        flex: 1;
        margin-left: 10px;
        font-size: 0.75rem;
    }

    div{
        height: 60px;
        width: 60px;        
        background-color: red;
        border-radius: 50%;
        color: white;
        display: grid;
        place-items: center;
        font-size: 0.95rem;
    }
`

const UserDesc = styled.div`
    p{
        color: white;
        font-size: 0.85rem;
        font-weight: 600;
    }

    span{
        display: block;
        color: white;
        font-size: 0.65rem;
    }
`



