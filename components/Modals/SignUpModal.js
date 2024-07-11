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
            <div className="w-[400px] h-[200px] bg-white">
                Sign up today
            </div>

        </Modal>
        </>
    )
}