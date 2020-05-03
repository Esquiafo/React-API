import React, { Fragment } from "react";



function List ({data}){
    let undef='Undefined'
        return(
        <Fragment>
            <h1>List of Country</h1>
            <ul>
              
                {data.map((data, index) => { 
                    return <li key={index}>
                        
                        <div>
                        <img className='flagcountries' src={data.flag} alt=''></img><br></br>
                        </div>
                        <article>
                        <div>
                        Name: {data.name}<br></br>
                        </div>
                        <div>
                        Alter Name: {data.altSpellings[2]||undef}<br></br>  
                        </div>
                        
                        <div>
                        Capital: {data.capital||undef}
                        </div>

                       
                        <div>
                        Region:  {data.region}<br></br> 
                        </div>
                        <div>
                        Subregion {data.subregion}<br></br> 
                        </div>
                        <div>
                        Population {data.population}<br></br>
                        </div>
                        <div>
                        Timezone: {data.timezones[0]}<br></br> 
                        </div>
                        </article>
                        <br></br>
                        </li> })}

            </ul>
        </Fragment>
        );
}
export default List