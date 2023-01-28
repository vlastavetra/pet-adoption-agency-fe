import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import Loader from "../components/Loader"
import "./Dashboard.sass"

function Dashboard() {
  const { token } = useContext(AuthContext)

  const [users, setUsers] = useState<[{
    _id?: string,
    firstname?: string
    lastname?: string
    email?: string
    phone?: string
    isAdmin?: boolean
  }]>([{}]) || null
  const [pets, setPets] = useState<[{
    _id?: string,
    name?: string
    type?: string
    adoptionStatus?: string
    color?: string
    breed?: string
  }]>([{}]) || null
  const [loader, showLoader] = useState(false)

  const getUsers = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}user`, { headers: { authorization: `Bearer ${token}` } })
      setUsers(res.data)
      showLoader(false)
    } catch (err) {
      console.log(err)
    }
  }

  const getPets = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}pet`, { headers: { authorization: `Bearer ${token}` } })
      setPets(res.data)
      showLoader(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
    getPets()
    showLoader(true)
  }, [])

  return (
    <main className="main-container">
      <h1 className="title-h1">Dashboard</h1>
      {loader && <Loader />}
      {!loader &&
        <>
          <section className="section-container">
            <h2 className="title-h2">Users</h2>
            <table className="dashboard-table">
              <thead>
                <tr className="dashboard-table-tr-head">
                  <th className="dashboard-table-th-head">Firstname</th>
                  <th className="dashboard-table-th-head">Lastname</th>
                  <th className="dashboard-table-th-head">Email</th>
                  <th className="dashboard-table-th-head">Phone</th>
                  <th className="dashboard-table-th-head">Role</th>
                  <th className="dashboard-table-th-head">Info</th>
                </tr>
              </thead>
              <tbody>
                {users && users.map((user) => {
                  return (
                    <tr className="dashboard-table-tr-body" key={crypto.randomUUID()}>
                      <td className="dashboard-table-td-body">{user.firstname}</td>
                      <td className="dashboard-table-td-body">{user.lastname}</td>
                      <td className="dashboard-table-td-body">{user.email}</td>
                      <td className="dashboard-table-td-body">{user.phone}</td>
                      <td className="dashboard-table-td-body">{user.isAdmin ? "Admin" : "User"}</td>
                      <td className="dashboard-table-td-body">
                        <Link
                          to={`/user/${user._id}`}
                          className="dashboard-table-link"
                        >
                          Show more
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
          <section className="section-container">
            <h2 className="title-h2">Pets</h2>
            <table className="dashboard-table">
              <thead>
                <tr className="dashboard-table-tr-head">
                  <th className="dashboard-table-th-head">Name</th>
                  <th className="dashboard-table-th-head">Type</th>
                  <th className="dashboard-table-th-head">Status</th>
                  <th className="dashboard-table-th-head">Color</th>
                  <th className="dashboard-table-th-head">Breed</th>
                  <th className="dashboard-table-th-head">Info</th>
                </tr>
              </thead>
              <tbody>
                {pets && pets.map((pet) => {
                  return (
                    <tr className="dashboard-table-tr-body" key={crypto.randomUUID()}>
                      <td className="dashboard-table-td-body">{pet.name}</td>
                      <td className="dashboard-table-td-body">{pet.type}</td>
                      <td className="dashboard-table-td-body">{pet.adoptionStatus}</td>
                      <td className="dashboard-table-td-body">{pet.color}</td>
                      <td className="dashboard-table-td-body">{pet.breed}</td>
                      <td className="dashboard-table-td-body">
                        <Link
                          to={`/pet/${pet._id}`}
                          className="dashboard-table-link"
                        >
                          Show more
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
        </>
      }
    </main>
  )
}

export default Dashboard
