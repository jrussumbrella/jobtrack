import { firebase } from "lib/firebase";

const formatDate = (date: firebase.firestore.Timestamp) => {
  return new Date(date.seconds * 1000).toLocaleString();
};

export default formatDate;
