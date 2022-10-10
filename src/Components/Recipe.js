import React, {useState} from 'react'
import Extension from './Extension';

const Recipe = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const YOUR_APP_ID = "4f707081";
    const YOUR_APP_KEY=  "0c3a8f0d7d9d4e91321f1d99030f1cc3";
   
    const submitHandler = e =>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
            response => response.json()
        ).then(
            data => setData(data.hits)
        )
    }

  return (
    <div>
        <center>
            <h4>Food Recipe App</h4>
            <form onSubmit={submitHandler}>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} /> <br />
                <input type='submit' className="btn btn-primary m-3" value="search" />
            </form>
            {data.length >=1 ? <Extension data={data} /> : null}          
        </center>
    </div>
  )
}

export default Recipe;