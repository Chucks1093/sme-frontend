import { FireBaseAuth } from "./firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { showToast } from "../utils";

const handleGoogleAuth = async () => {
	try {
		const googleProvider = new GoogleAuthProvider();
		const result = await signInWithPopup(FireBaseAuth, googleProvider);
		GoogleAuthProvider.credentialFromResult(result);
		const user = result.user;
		return user;
	} catch (error) {
		if (error instanceof FirebaseError) {
			const errorCode = error.code;
			const errorMessage = error.message;
			showToast.error(`${errorMessage}, ${errorCode}`);
			throw new Error(errorMessage);
		}
	}
};

export default handleGoogleAuth;
