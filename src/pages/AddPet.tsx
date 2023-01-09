import PetEditorForm from "../components/PetEditorForm"
import "../App.sass"
import "./AddPet.sass"

function AddPet() {
  return (
    <main className="main-container">
      <section className="section-container">
        <h1 className="title-h1">Add a new pet</h1>
        <div className="add-pet-container">
          <PetEditorForm/>
        </div>
      </section>
    </main>
  );
}

export default AddPet;