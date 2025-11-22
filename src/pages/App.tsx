import "../styles/theme.css"
import "../styles/global.css"

function App() {
  return (
    <>
      <div className="container-fluid"> {/** Stretches the full width (used for customizing background) */}
        <div className="container"> {/* Used for limiting width, and aligning to the center of the page */}
          <div className="content">
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur autem tenetur cupiditate! Veniam dolor saepe nam excepturi perferendis sit consequuntur voluptatum optio unde, reprehenderit illo quibusdam suscipit repudiandae similique.
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;