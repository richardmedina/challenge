import { FC } from 'react';
import styled from 'styled-components';
import UserGotchi from '../user-gotchi/user-gotchi.component';
import UserInfo from '../user-info/user-info.component';

const UserCardComponent = styled.div`
    text-align: center;
`;

interface UserCardProps {
    firstName: string;
    lastName: string;
    gotchiUrl: string;
}

const UserCard : FC<UserCardProps> = ({ firstName, lastName, gotchiUrl }) => {
    return (
        <UserCardComponent>
            <h1>This is home container</h1>
            <UserGotchi url={gotchiUrl} />
            <UserInfo firstName={firstName} lastName={lastName} />
        </UserCardComponent>
    );
}


export default UserCard;