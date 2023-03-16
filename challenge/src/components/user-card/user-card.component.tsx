import { FC } from 'react';
import styled from 'styled-components';
import Toolbar, { ToolbarItemType } from '../toolbar/toolbar.component';
import UserGotchi from '../user-gotchi/user-gotchi.component';
import UserInfo from '../user-info/user-info.component';
import userToolbarItems from './user-toolbar-items.json';

interface UserCardProps {
    firstName: string;
    lastName: string;
    gotchiUrl: string;
}

const UserCardComponent = styled.div`
    text-align: center;
    .grayed-container {
        height: 100px;
        background: #f0f0f0;
        border-bottom: solid 1px #ddd;
    }
    .content {
        position: relative;
        top: -50px;
    }
`;



const UserCard : FC<UserCardProps> = ({ firstName, lastName, gotchiUrl }) => {
    return (
        <UserCardComponent>
            <div className="grayed-container"></div>
            <div className="content">
                <UserGotchi url={gotchiUrl} />
                <UserInfo firstName={firstName} lastName={lastName} />
            </div>
            <div>
                <Toolbar items={userToolbarItems as Array<ToolbarItemType>} />
            </div>
        </UserCardComponent>
    );
}


export default UserCard;