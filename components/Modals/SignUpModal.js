import { openSignupModal, closeSignupModal } from "@/redux/modalSlice"
import Modal from "@mui/material/Modal"
import { useDispatch, useSelector } from "react-redux"

export default function SignUpModal(){

    const isOpen = useSelector(state => state.modals.signUpModalOpen)
    const dispatch = useDispatch()

    return(
        <>
        <button onClick={() => dispatch(openSignupModal())} className="bg-white border text-black w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7]"> Sign up</button>

        <Modal onClick={() => dispatch(closeSignupModal())} open={isOpen} className="flex justify-center items-center">
            <div className="w-[90%] h-[400px] bg-black text-white md:w-[550px] md:h-[600px] border border-gray-700 rounded-lg">
                <div className="flex flex-col items-center mt-10">
                    <button className=" bg-white w-[90%] h-10 rounded-lg text-black font-bold text-lg">
                        Sign In as Guest
                    </button>
                    <p className="text-white p-3 text-bold text-sm font-bold">
                        or
                    </p>
                </div>
                <h1 className="text-white p-3 text-bold text-4xl font-bold ml-5">
                        Create your account
                </h1>
                <div className="flex flex-col items-center">
                <input placeholder="Full Name" className="w-[90%] mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6" type={"name"}></input>
                <input placeholder="Email" className="w-[90%] mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6" type={"name"}></input>
                <input placeholder="Password" className="w-[90%] mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6" type={"name"}></input>
                
                <button className="mt-9 bg-white w-[90%] h-10 rounded-lg text-black font-bold text-lg">
                      Create Account
                </button>
                </div>
            </div>

        </Modal>
        </>
    )
}