import React, { FC, useEffect, useState } from 'react';
import UserCard from '../../components/user-card/user-card.component';
import UserGotchi from '../../components/user-gotchi/user-gotchi.component';
import UserInfo from '../../components/user-info/user-info.component';
import { getApiResponse } from '../../services/user.service';
import { ApiResponseType, UserInfoType  } from '../../types/ApiResponseType';

export interface HomeContainerProps {};

const HomeContainer: FC<HomeContainerProps> = ({ }) => {

    const [currentUser, setCurrentUser] = useState<UserInfoType | null>(null);
    
    useEffect(() => {
        getApiResponse().then(resp => {
            if((resp?.data?.results ?? []).length !== 0) {
                setCurrentUser(resp.data.results[0]);
            }
        })
    }, []);
   
    
    return currentUser === null
        ? (
            <div>
                Loading...
            </div>
        )
        : (
            <div>
                <UserCard
                    firstName={currentUser.name.first}
                    lastName={currentUser.name.last}
                    gotchiUrl={currentUser.picture.large} 
                />
            </div>
        );
}


export default HomeContainer;
