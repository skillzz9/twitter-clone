import SignUpModal from "./Modals/SignUpModal";
import LogInModal from "./Modals/LogInModal";

export default function Banner(){
    return(
        <>
        <div className="fixed xl:space-x-[200px] w-full h-[80px] bg-[#1d9bf0] bottom-0 flex justify-center items-center">
            <div className="hidden xl:inline text-white">
                <h1 className="text-2xl font-bold">Dont miss what is happening</h1>
                <span className="text-[18px] font-normal">People on twitter are the first to know</span>
            </div>
            <div className="space-x-3">
                <LogInModal/>
                <SignUpModal/>
            </div>
        </div>
        </>
    )
}