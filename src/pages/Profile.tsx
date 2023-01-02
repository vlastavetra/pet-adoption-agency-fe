import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import "../App.css";

function Profile() {
  const {user} = useContext(AuthContext);
  return (
    <main className="main-container">
      <section className="welcome-section">
        <h1 className="title-h1">Hi {user}!</h1>
        <p className="text-medium">You can change your information here</p>
      </section>
      <form action="">
        
      </form>
    </main>
  );
}

export default Profile;