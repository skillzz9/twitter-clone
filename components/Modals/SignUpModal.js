import Modal from '@mui/material/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { openSignUpModal, closeSignUpModal } from '@/redux/modalSlice'
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { useEffect, useState } from "react"
import { auth } from '@/firebase'
import { useRouter } from 'next/router';
import { setUser } from '@/redux/userSlice'

export default function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signUpModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()



  async function handleSignUp(){
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password

    );
    console.log("hello: here is the data")
    console.log(name)

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `./assets/profilePictures/pfp${Math.ceil(Math.random() * 6)}.png`

    })
  console.log("hello: here is some more data")


  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );

    });

    return unsubscribe;
  }, []);

  return (
    <>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className="bg-white border text-black w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7]"
      >
        Sign up
      </button>

      <Modal
        onClose={() => dispatch(closeSignUpModal())}
        open={isOpen}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[400px] bg-black text-white md:w-[550px] md:h-[600px] border border-gray-700 rounded-lg">
          <div className="flex flex-col items-center mt-10">
            <button className="bg-white w-[90%] h-10 rounded-lg text-black font-bold text-lg">
              Sign In as Guest
            </button>
            <p className="text-white p-3 text-bold text-sm font-bold">or</p>
          </div>
          <h1 className="text-white p-3 text-bold text-4xl font-bold ml-5">
            Create your account
          </h1>
          <div className="flex flex-col items-center">
            <input
              placeholder="Full Name"
              className="w-[90%] mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
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

            <button className="mt-9 bg-white w-[90%] h-10 rounded-lg text-black font-bold text-lg" onClick={handleSignUp}>
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
