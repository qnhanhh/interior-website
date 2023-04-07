import Image from "next/image"
import avatar1 from '@/assets/avatars/avatar-1.png'
import { jostFont } from "@/utils/fonts";

type itemType={
    username: string,
    location: string,
    content: string
}

export default function Item({username, location, content}:itemType){
    return(
        <div className="bg-white p-[6rem] rounded-[3rem]">
            <div className="flex items-center gap-8">
                <Image className="rounded-full" src={avatar1} alt="" />
                <div>
                    <h3>{username}</h3>
                    <p className={`small-para ${jostFont.className}`}>{location}</p>
                </div>
            </div>
                <p className={`mt-[2.5rem] large-para ${jostFont.className}`}>{content}</p>
        </div>
    )
}