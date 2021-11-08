import React from 'react'
import styled from 'styled-components'
import BottomNavbar from './BottomNavbar'

const MyProfile = () => {
    return (
        <>
        <Container>
            <ImagePost>
                <img src="https://lh3.googleusercontent.com/-BeT4efzcl8I/V0ziAmFcFCI/AAAAAAAAV6o/1bITXvY3GTU/s1600/Dakota-Johnson-dp-profile-pics-whatsapp-facebook-251.jpg" alt="" />
            </ImagePost>
            <ThoughtsPost>
                <span>A social cause | care about</span>
                <p>Just saw squid game and I just loved it!❤️</p>
            </ThoughtsPost>
            <ImagePost>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xD8rW5p66ArHbctIgsmP-IDA5rYGzLLPAg&usqp=CAU" alt="" />
            </ImagePost>
            <ImagePost>
                <img src="https://lh3.googleusercontent.com/-BeT4efzcl8I/V0ziAmFcFCI/AAAAAAAAV6o/1bITXvY3GTU/s1600/Dakota-Johnson-dp-profile-pics-whatsapp-facebook-251.jpg" alt="" />
            </ImagePost>
            <ThoughtsPost>
                <span>A social cause | care about</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ut modi rerum nisi consectetur doloribus nemo nostrum sit ipsum ex totam voluptatibus perferendis culpa, repellendus facilis dolore, quos soluta quae?</p>
            </ThoughtsPost>
            <ThoughtsPost>
                <span>A social cause | care about</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ut modi rerum nisi consectetur doloribus nemo nostrum sit ipsum ex totam voluptatibus perferendis culpa, repellendus facilis dolore, quos soluta quae?</p>
            </ThoughtsPost>
        </Container>
        <BottomNavbar/>
        </>
    )
}

export default MyProfile


const Container = styled.div`
    padding: 0.6rem;
    margin-bottom: 60px;
`

const ImagePost = styled.div`
    border-radius: 10px;
    
    img{
        border: 1px solid #d7cece;
        border-radius: 10px;
        width: 100%;
    }
`

const ThoughtsPost = styled.div`
    margin: 0.4rem 0;
    padding: 0.5rem;
    /* background-color: #ff0101bf; */
    background: #ff0101bf;
    background: linear-gradient(0deg, rgba(32,34,33,0.8561799719887955) 16%, #ff0101bf 100%);
    border-radius: 10px;
    

    span{
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 0.1rem;
    }

    p{
        font-size: 1.25rem;
        font-family: 'Zen Antique', serif;
        color: white;
    }
`