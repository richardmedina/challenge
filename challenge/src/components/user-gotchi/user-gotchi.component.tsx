import React, { FC } from 'react';
import styled from 'styled-components';

const UserGotchiComponent = styled.div`
    width: 100px;
    height: 100px;
    padding: 5px;
    box-sizing: border-box;
    display: inline-block;
    border: #ddd solid 1px;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`; 

interface UserGotchiProps {
    url: string;
}

const UserGotchi : FC<UserGotchiProps> = ({ url }) => {

    return (
        <UserGotchiComponent>
            <img src={url} />
        </UserGotchiComponent>
    );
}

export default UserGotchi;