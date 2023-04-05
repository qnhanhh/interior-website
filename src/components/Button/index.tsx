import { jostFont } from "@/utils/fonts"

type buttonType={
    content: string
}

export default function Button({content}:buttonType){
    return(
        <button>
            <p className={`small-para text-white ${jostFont.className}`}>Get Started</p>
        </button>
    )
}