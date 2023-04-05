type buttonType={
    content: string
}

export default function Button({content}:buttonType){
    return(
        <button>
            <p className="small-para text-white">Get Started</p>
        </button>
    )
}