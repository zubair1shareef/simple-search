import React from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { key, cxkey } from "../Api";
import axios from "axios";
import Show from "./Show";
const SearchPage = (props) => {
    const goBack = () => {
      props.history.push("/");
    };
    const [state, setState] = React.useState(
      props.location.state ? props.location.state : ""
    );
    const [results, setResults] = React.useState([]);
    const [info, setInfo] = React.useState("");
    const image="https://img.freepik.com/free-vector/blurred-background-with-light-colors_1034-245.jpg?size=338&ext=jpg"
    const random ="https://source.unsplash.com/random/2800x1900?sig=3";

    const searchGoogle = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cxkey}&q=${state}`
        );
        if (response) {
          setResults(response.data.items);
          setInfo(response.data.searchInformation);
          console.log(response)
        }
      } catch (error) {
        console.log(error);
      }
    };
    React.useEffect(() => {
      async function getPosts() {
        if (props.location.state) {
          try {
            const response = await axios.get(
              `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cxkey}&q=${state}`
            );
            if (response) {
              setResults(response.data.items);
              setInfo(response.data.searchInformation);
              console.log(response)
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      getPosts();
    }, []);
    return (
      <div className="search background" >
        <div className="search__form">
          <div className="search__form-logo">
            <img src="slogo.png" alt="logo" onClick={goBack} />
          </div>
          <div className="search__form-input">
            <form className="home__form" onSubmit={searchGoogle}>
              <input
                type="text"
                className="home__input"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
  
              <FaSistrix className="search__icon" />
              <FaMicrophone className="microphone" />
            </form>
          </div>
        </div>
        <Show results={results} info={info} />
      </div>
    );
}

export default SearchPage
