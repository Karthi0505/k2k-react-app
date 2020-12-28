
import FishIcon from './images/fish_icon.png';

function App() {
  return (
    <div className="grid-container">
      <header className="d-flex align-items-center">
        <a href="/">
          <img src={FishIcon} alt="Kadal to Kitchen logo" />
        </a>
      </header>
      <main>
        <div className="container">
          <div className="content row">
            <div className="main col-md-9 mr-sm-auto col-lg-9 pt-3 px-4">

            </div>
          </div>
        </div>
      </main>
      <footer className="d-flex justify-content-center align-items-center">
          <p>All right is reserved</p>
      </footer>
    </div>
  );
}

export default App;
