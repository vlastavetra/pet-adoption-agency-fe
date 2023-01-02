import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import "../App.css"

function Home() {
  const {user} = useContext(AuthContext)
  return (
    <main className="main-container">
      <section className="welcome-section">
        {user && <p className="title-h1">Hi {user}!</p>}
        <h1 className="title-h1">Welcome to the Pet Adoption Agency</h1>
        {!user && 
          <>
            <p className="text-medium">Go ahead and sign up to adopt your pet.</p>
            <p className="text-medium">or</p>
          </>
        }
        <p className="text-medium">Go ahead and use our search to find your perfect pet match.</p>
      </section>
    </main>
  );
}

export default Home;