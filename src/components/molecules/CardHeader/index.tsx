import { ProfileImage } from "@/components/atoms/ProfileImage";
import { getUserInfo } from "@/utils/getUserInfo";
import { FC, useMemo } from 'react'

export const CardHeader:FC<CardHeaderProps> = ({
    id
}) => {
    const userInfo = useMemo(() => {
        return getUserInfo(id) ?? {
            image: '',
            name: ''
        };
    },[id])
    
    return (
        <a href="#" className="w-1/1 p-2 flex flex-col items-center bg-transparent rounded-lg md:flex-row md:max-w-xl hover:bg-oxford-blue/80">
                <ProfileImage
                    src={userInfo.image as string}
                    alt={`Profile Image From ${userInfo?.name}`}
                    size="sm"
                />                
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="text-lg font-bold tracking-tight text-platinum">{userInfo.name as string}</h5>
            </div>
        </a>
    )
}