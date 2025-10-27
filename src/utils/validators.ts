import { MOCKED_USERS } from "./constants"
import bcrypt from "bcryptjs"

export const validateUser = async (mail:string, password:string) => {

    if(MOCKED_USERS[mail]){
        const { pwd, name, image, id} = MOCKED_USERS[mail]
        if(await bcrypt.compare(password, pwd)){
            return {
                name,
                image,
                id
            }
        }
        else
            return null
    }
    return null
}