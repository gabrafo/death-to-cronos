import "../styles/theme.css"
import "../styles/global.css"

function App() {
  return (
    <>
      <div className="container"> {/* Used for limiting width, and aligning to the center of the page */}
        <div className="content">
          <section>
            LOGO
          </section>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <section>
            MENU
          </section>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <section>
            FORM
          </section>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <section>
            FOOTER
          </section>
        </div>
      </div>
    </>
  );
}

export default App;