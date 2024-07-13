import Modal from '@mui/material/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { openLogInModal, closeLogInModal } from '@/redux/modalSlice'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {useState} from "react"
import {auth} from "@/firebase";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.logInModalOpen)
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(auth, 'guest32145@gmail.com', '654321');
  }
 
  return (
    <>
      <button
        onClick={() => dispatch(openLogInModal())}
        className="bg-transparent border text-white w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7]">
        Log In
      </button>

      <Modal
        onClose={() => dispatch(closeLogInModal())}
        open={isOpen}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[400px] bg-black text-white md:w-[550px] md:h-[600px] border border-gray-700 rounded-lg">
        
          <h1 className="text-white p-3 text-bold text-4xl font-bold ml-5 mt-5">
            Sign in into your account
          </h1>
          <div className="flex flex-col items-center">
            <input
              placeholder="Email"
              className="w-[90%] mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="w-[90%] mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSignIn} className="mt-9 bg-white w-[90%] h-10 rounded-lg text-black font-bold text-lg">
              Sign in
            </button>
            <p className="text-white p-3 text-bold text-sm font-bold mt-8">or</p>
            <button onClick={handleGuestSignIn}className="bg-white w-[90%] h-10 rounded-lg text-black font-bold text-lg mt-8">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
