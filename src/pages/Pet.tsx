import '../App.css';

function Pet() {
  const petName = "Blackie the cat"
  return (
    <main className="main-container">
      <section className="welcome-section">
        <h1 className="title-h1">Hi i'm {petName}</h1>
        <p className="text-medium">Some general information about pet</p>
      </section>
    </main>
  );
}

export default Pet;