import { firebase, timestamp, auth, db } from "lib/firebase";
import { SocialLoginProvider } from "interfaces/Auth";
import { USERS_COLLECTION } from "./service-constants";

const createUser = async (user: any) => {
  if (!user) return;

  const { uid, email, photoURL, emailVerified, displayName } = user;

  const newUser = {
    name: displayName,
    email,
    photo_url: photoURL,
    created_at: timestamp(),
    updated_at: timestamp(),
    email_verified: emailVerified,
    job_applications_count: 0,
    is_premium: false,
  };

  await db.collection(USERS_COLLECTION).doc(uid).set(newUser);

  return user;
};

const socialLogin = async (provider: SocialLoginProvider) => {
  try {
    let selectedProvider: firebase.auth.AuthProvider;

    switch (provider) {
      case "google":
        selectedProvider = new firebase.auth.GoogleAuthProvider();
        break;
      case "github":
        selectedProvider = new firebase.auth.GithubAuthProvider();
        break;
      default:
        throw new Error("Unknown provider");
    }

    const { user, additionalUserInfo } = await auth.signInWithPopup(
      selectedProvider
    );
    if (additionalUserInfo?.isNewUser) {
      await createUser(user);
    }

    return user;
  } catch (error) {
    let errorMessage = "";
    switch (error.code) {
      case "auth/account-exists-with-different-credential":
        errorMessage =
          "An account already exists with the same email address but different sign-in credentials.";
        break;
      case "auth/popup-closed-by-user":
        errorMessage = "The popup has been closed";
        break;
      default:
        errorMessage = `Unable to login with ${provider} right now. Please try again later`;
    }

    throw new Error(errorMessage);
  }
};

const logOut = () => {
  try {
    return auth.signOut();
  } catch (error) {
    throw new Error(error);
  }
};

export const AuthService = {
  socialLogin,
  logOut,
};
