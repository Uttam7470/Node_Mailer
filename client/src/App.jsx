// import { useState } from "react";
// import axios from "axios";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [dataSaved, setDataSaved] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:6969/sendEmail", {
//         name,
//         email,
//         message,
//       });
//       if (response.status === 200 && response.statusText === "Ok") {
//         setDataSaved(!dataSaved);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <>
//       {dataSaved ? <p className="success">Email Sent</p> : ""}
//       <h2>Basic Nodemailer App</h2>
//       <form action="" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           name="name"
//           onChange={(e) => setName(e.target.value)}
//         />{" "}
//         <br />
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           name="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />{" "}
//         <br />
//         <textarea
//           name="message"
//           value={message}
//           id=""
//           placeholder="Enter your message"
//           onChange={(e) => setMessage(e.target.value)}
//         >
//           {message}
//         </textarea>
//         <br />
//         <button type="submit">Send Email</button>
//       </form>
//     </>
//   );
// }

// export default App;


import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Link to the CSS file

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dataSaved, setDataSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Clear any previous errors
    try {
      const response = await axios.post("http://localhost:6969/sendEmail", {
        name,
        email,
        message,
      });
      if (response.status === 200 && response.statusText === "OK") {
        setDataSaved(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (e) {
      setError("Failed to send email. Please try again.");
    }
  }

  return (
    <div className="container">
      {dataSaved && <p className="success">Email Sent</p>}
      {error && <p className="error">{error}</p>}
      <h2>Basic Nodemailer App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          value={message}
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default App;
