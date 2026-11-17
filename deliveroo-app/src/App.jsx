import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Aside from "./components/Aside";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <>
          <Header />
          <Hero data={data} />
          <main>
            <div className="container">
              <div>
                {data.categories.map((category, index) => {
                  return (
                    category.meals.length > 0 && (
                      <Category
                        category={category}
                        key={category.name + index}
                      />
                    )
                  );
                })}
              </div>
              <Aside />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;
