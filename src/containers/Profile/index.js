import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
import { useEffect, useState } from "react";
import Navbar from "../../components/Header";
import { Fab } from "@mui/material";
import { Logout, Password } from "@mui/icons-material";
import SimplePaper from "../../components/paper";
import { Container } from "@mui/material";

export default function Profile() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  useEffect(() => {
    const dataSet = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.uid);
          const docRef = doc(db, "users", user.uid);
          const docSnap = getDoc(docRef).then((data) => {
            if (data.exists()) {
              console.log(data.data().number);
              setname(data.data().name);
              setemail(data.data().email);
              setphone(data.data().number);
            } else {
              console.log("No Such Document");
            }
          });
        } else {
          console.log("No User");
        }
      });
    };
    dataSet();
  }, []);

  return (
    <>
      <Navbar title="Profile" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fab size="medium" color="light" aria-label="add">
          <Logout />
        </Fab>
      </div>
      <Container
        style={{
          backgroundColor: "white",
          // display: "flex",
          // justifyContent: "center",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Contact: {phone}</h1>
      </Container>
    </>
  );
}

// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });
// console.log("Document written with ID: ", docRef.id);
// Add a new document with a generated id
// const newCityRef = doc(collection(db, "cities"));
// later...
// await setDoc(newCityRef, {NAME: "uMAIR"});
// const wahRef = doc(db , "cities" , "BJ");
// await updateDoc( wahRef , {
//   name: "karachi",
//   gender: "Male",
//   timeStamp: serverTimestamp()
// })
//   const citiesRef = collection(db, "cities");

//   await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 860000,
//     regions: ["west_coast", "norcal"],
//   });
//   await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 3900000,
//     regions: ["west_coast", "socal"],
//   });
//   await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.",
//     state: null,
//     country: "USA",
//     capital: true,
//     population: 680000,
//     regions: ["east_coast"],
//   });
//   await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo",
//     state: null,
//     country: "Japan",
//     capital: true,
//     population: 9000000,
//     regions: ["kanto", "honshu"],
//   });
//   await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing",
//     state: null,
//     country: "China",
//     capital: true,
//     population: 21500000,
//     regions: ["jingjinji", "hebei"],
//   });
//   const docRef = doc(db, "cities" , "SF")
//   const docSnap = await getDoc(docRef)
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
//   const docRef = await addDoc(collection(db, "cities"), {
//    number, name
//   });
//   console.log("Document written with ID: ", docRef.id);
//   history.push("/profile")
// })
// .catch((err) => {
//   console.log(err);
