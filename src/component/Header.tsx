import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {
    return(
        <Wrapper>
            <LoginButton>
                Twitterでログイン
            </LoginButton>
        </Wrapper>
    )
}

export default Header

const Wrapper  = styled.div`
    position         : absolute;
    background-color : #000000;
    opacity          : 0.3;
    height           : 15vh;
    width            : 100vw;
`

const LoginButton = styled.button`
    baclground-color : #ffffff;
`