import app from "../firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // User signed up successfully, you can add further logic here.
        } catch (err) {
            // Handle any errors that occurred during sign-up.
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            // User signed in with Google successfully, you can add further logic here.
        } catch (err) {
            // Handle any errors that occurred during sign-in with Google.
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            // User signed out successfully, you can add further logic here.
        } catch (err) {
            // Handle any errors that occurred during sign-out.
            console.error(err);
        }
    };

    return (
        <div>
            <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password..." type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logout}>Log out</button>
        </div>
    );
};

