import Navbar from "../../components/Header";
import {
  auth,
  createUserWithEmailAndPassword,
  collection,
  db,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  where,
  query,
  getDocs,
} from "../../Firebase";
import { useState } from "react";
import { useHistory } from "react-router";

export default  function Login() {
  const [email, setEmail] = useState();
  const [passward, setPassward] = useState();
  const [number, setnumber] = useState();
  const [name, setName] = useState();
  const history = useHistory();

  const submit = () => {
    createUserWithEmailAndPassword(auth, email, passward)
      .then(async (res) => {
        await setDoc(doc(db, "users" , res.user.uid ,), {
          email,
          passward,
          number,
          name
        });
        history.push("/profile")
      });
  };
  return (
    <>
      <Navbar />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="passward"
        onChange={(e) => setPassward(e.target.value)}
      />
      <input
        type="text"
        placeholder="contact"
        onChange={(e) => setnumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submit}>submit</button>
    </>
  );
}
