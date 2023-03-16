import React, { FC } from 'react';
import styled from 'styled-components';
import ToolbarItem from '../toolbar-item/toolbar-item.component';

export interface ToolbarProps {
    items: Array<ToolbarItemType>;
}

export interface ToolbarItemType {
    icon: string;
    label: string;
    action: string;
    hover: boolean;
}

const ToolbarComponent = styled.div`
    border: solid 0px #ddd;
    .toolbar-item {
        display: inline;
    }
`;


const Toolbar : FC<ToolbarProps> = ({ items }) => {
    return (
        <ToolbarComponent>
            {
                items.map(item => <ToolbarItem {...item} />)
            }
        </ToolbarComponent>
    );
}

export default Toolbar;