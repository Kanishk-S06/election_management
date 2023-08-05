import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { setLoading, setCurrentUser, setError } from '../Slices/Usersslice/Usersslice';
import { auth, firestore } from '../../firebase-config';
import getUserObject from '../../Utils/get_user_object';
// import firebase from 'firebase/app';

export const signUp = (signUpData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { user } = await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
    const userObject = getUserObject(signUpData.firstname, signUpData.middlename, signUpData.lastname, signUpData.email, signUpData.github, signUpData.phone, signUpData.gender, user.uid);
    await setDoc(doc(collection(firestore, 'users'), user.email), userObject,
    { merge: true });

    const currentUser = userObject;
    dispatch(setCurrentUser(currentUser));

  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
