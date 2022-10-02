import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import "./App.css";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App Use Effect executed");
    dispatch(getCatsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Cat Species Gallery</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure
      </p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => {
          return (
            <div key={cat.id} className="row">
              <div className="column column-left">
                <img
                  src={cat.image.url}
                  alt={cat.name}
                  width="200"
                  height="200"
                />
              </div>
              <div className="column column-right">
                <h2>{cat.name}</h2>
                <h5>Temperament: {cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
