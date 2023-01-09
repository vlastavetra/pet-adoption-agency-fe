import { useState } from "react"
import axios from "axios"
import "../App.sass"
import "./Search.sass"
import PetsList from "../components/PetsList"
import Button from "../elements/Button"

function Search() {
  const [pets, setPets] = useState<any[]>([])
  const [searchData, setSearchData] = useState({ type: "", status: "", height: "", weight: "", petName: "" })
  const [advanced, showAdvanced] = useState(false)

  const getPets = async () => {
    try {
      const res = await axios.get(`
        http://127.0.0.1:4000/pet?search=type-${searchData.type}/status-${searchData.status}/height-${searchData.height}/weight-${searchData.weight}/petName-${searchData.petName}
      `)
      setPets(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const onChangeHandler = (e?: { target: { value?: any; name?: any } } | undefined) => {
    const { name, value } = e!.target
    setSearchData({ ...searchData, [name]: value })
  }

  const onClickHandler = async (e?: Event) => {
    e?.preventDefault()
    getPets()
  }

  return (
    <main className="main-container">
      <h1 className="title-h1">Search</h1>
      <section className="section-container form-section-container">
        <form action="" className="form search-form">
          <fieldset className="form-fieldset">
            <label htmlFor="type" className="form-label">Type of animal</label>
            <select className="form-input" id="type" name="type" onChange={onChangeHandler} value={searchData.type}>
              <option value="">All</option>
              <option value="Cat">Cats</option>
              <option value="Dog">Dogs</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>
          <div className="search-button-container">
            <Button
              text="More search options"
              color="yellow"
              onClickHandler={() => showAdvanced!(!advanced)}
            />
          </div>
          {advanced &&
            <div className="search-advanced-container">
              <fieldset className="form-fieldset">
                <label htmlFor="status" className="form-label">Adoption Status</label>
                <select className="form-input" id="status" name="status" onChange={onChangeHandler} value={searchData.status}>
                  <option value="">All</option>
                  <option value="Adopted">Adopted</option>
                  <option value="Fostered">Fostered</option>
                  <option value="Available">Available</option>
                </select>
              </fieldset>
              <fieldset className="form-fieldset">
                <label htmlFor="height" className="form-label">Height</label>
                <input
                  className="form-input"
                  id="height"
                  name="height"
                  type="number"
                  onChange={onChangeHandler}
                  value={searchData.height}
                >
                </input>
              </fieldset>
              <fieldset className="form-fieldset">
                <label htmlFor="weight" className="form-label">Weight</label>
                <input
                  className="form-input"
                  id="weight"
                  name="weight"
                  type="number"
                  onChange={onChangeHandler}
                  value={searchData.weight}
                >
                </input>
              </fieldset>
              <fieldset className="form-fieldset">
                <label htmlFor="petName" className="form-label">Name</label>
                <input
                  className="form-input"
                  id="petName"
                  name="petName"
                  type="text"
                  onChange={onChangeHandler}
                  value={searchData.petName}
                >
                </input>
              </fieldset>
            </div>
          }
          <fieldset className="form-fieldset">
            <Button
              text="Show results"
              color="blue"
              className="button-search"
              onClickHandler={onClickHandler!}
            />
          </fieldset>
        </form>
      </section>
      <section className="section-container">
        <PetsList pets={pets} />
      </section>
    </main>
  );
}

export default Search;