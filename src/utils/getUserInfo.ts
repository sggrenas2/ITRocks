import { MOCKED_USERS } from "./constants"
export const getUserInfo = (id:number) => {
    const UserKeys = Object.keys(MOCKED_USERS)
    for(const key of UserKeys){
        if(MOCKED_USERS[key].id === `${id}`){
            return {
                name: MOCKED_USERS[key].name,
                image: MOCKED_USERS[key].image
            }
        }
    }

}