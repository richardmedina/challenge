import React,  { FC } from 'react';
import styled from 'styled-components';

const UserInfoWrapper = styled.div`
    .first-name {
        display: block;
        font-size: 18px;
        color: #888;
    }

    .last-name {
        display: block;
        font-size: 30px;
        color: #666;
    }
`;

export interface UserInfoProps {
    firstName: string;
    lastName: string;
};

const UserInfo: FC<UserInfoProps> = ({ firstName, lastName }) => {
    return (
        <UserInfoWrapper className='user-info'>
            <span className='first-name'>Hi, My name is</span>
            <span className='last-name'>{firstName} {lastName}</span>
        </UserInfoWrapper>
    );
};

export default UserInfo;