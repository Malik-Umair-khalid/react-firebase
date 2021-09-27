import Navbar from "../../components/Header";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../../Firebase";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";


export default function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [user, setuser] = useState();
  const history = useHistory();
  onAuthStateChanged(auth, (user) => {
    if (user) { 
      history.push("/profile");
    }
  });
  const submit = () => {
    // signInWithEmailAndPassword(auth, name, email)
    // .then((res) =>{
    //     console.log(res)
    // })
    // .catch((err) =>{
    //      console.log(err)
    // })
  };
  return (
    <>
      <Navbar />
 
      <h1>Login</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={submit}>submit</button>
    </>
  );
}
