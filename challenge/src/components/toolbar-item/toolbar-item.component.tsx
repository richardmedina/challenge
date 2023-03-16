import React, { FC } from 'react';
import styled from 'styled-components';

import { 
    AiOutlineUser,
    AiOutlineMail,
    AiFillFileUnknown,
    AiOutlineCalendar,
    AiOutlineLock
} from 'react-icons/ai';

import {
    BsPinMap,
    BsTelephone
} from 'react-icons/bs';

interface ToolbarItemProps {
    icon: string;
    label: string;
    action: string;
    hover?: boolean;
}

interface ToolbarItemComponentProps {
    hover?: boolean;
}

const getIcon = (name: string) => {
    const props= { 
        size:'55px',
        style: {
            'color': '#ccc'
        }
    };

    switch(name) {
        case "profile":
            return <AiOutlineUser {...props} />
        case "email":
            return <AiOutlineMail {...props} />
        case "calendar":
            return <AiOutlineCalendar {...props} />
        case "map":
            return <BsPinMap {...props} />
        case "phone":
            return <BsTelephone {...props} />
        case "lock":
            return <AiOutlineLock {...props} />
        default:
            return <AiFillFileUnknown {...props}/> 
    }
}

const ToolbarItemComponent = styled.div<ToolbarItemComponentProps>`
    border: 0;

    svg {
        border: solid 2px transparent;
        height: 100%;
        display: inline-block;

        &:hover {
            border-top: solid 2px #ddd;
        }
    }
`;
        

const ToolbarItem : FC<ToolbarItemProps> = ({ hover, icon }) => {
    return (
        <ToolbarItemComponent hover={hover} className='toolbar-item'>
            { getIcon(icon) }
        </ToolbarItemComponent>
    );
}

export default ToolbarItem;
