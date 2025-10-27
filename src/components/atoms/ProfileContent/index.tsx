'use client'
import { useAppSelector } from "@/store/hooks"

export const ProfileContent = ({
    className = ''
}) => {
    const userName = useAppSelector(state => state.auth.name)
    const email = useAppSelector(state => state.auth.email)

    return (
        <div className={`w-1/1 ${className}`}>
            <p className="text-platinum text-center text-xl tracking-wide font-bold">{userName}</p>
            <p className="text-platinum text-center text-md">{email}</p>
        </div>
    )
}

export default ProfileContent