import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "../App.sass"

function Home() {
  const { user } = useContext(AuthContext)
  return (
    <main className="main-container">
      {user && <p className="title-h1">Hi {user}!</p>}
      <h1 className="title-h1">Welcome to the Pet Adoption Agency</h1>
      {!user &&
        <>
          <p className="text-medium main-text-container">Go ahead and sign up to adopt your pet.</p>
          <p className="text-medium main-text-container">or</p>
        </>
      }
      <p className="text-medium main-text-container">Go ahead and use our search to find your perfect pet match.</p>
    </main>
  );
}

export default Home;