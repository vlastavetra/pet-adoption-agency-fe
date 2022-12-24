import '../App.css';

function Profile() {
  const userName = "John Snow"
  return (
    <main className="main-container">
      <section className="welcome-section">
        <h1 className="title-h1">Hi {userName}</h1>
        <p className="text-medium">You can change some information here</p>
      </section>
    </main>
  );
}

export default Profile;