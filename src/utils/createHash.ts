import bcrypt from "bcryptjs"
import {SALT_ROUNDS} from "./constants"

export const createHash = async (value:string) => {
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS)
        const hash = await bcrypt.hash(value, salt)
        return hash;
    }catch(e){
        return e
    }
}