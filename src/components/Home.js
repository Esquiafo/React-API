import React  from "react";
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () =>{
        return(
            <div className=''>
                
             <header className='App-header'>
                 <div className='App-center'>
             <img src={process.env.PUBLIC_URL + '/image/poke.png' }alt='logoPokemon' className='App-logo' />

                
                </div>
                <hi>Countries data</hi>
                <Link to='/countries'>See countries</Link>
             </header>
            </div>
        );
    
}
export default Home
