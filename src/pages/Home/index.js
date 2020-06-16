import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './home.css'

class Home extends Component{

    constructor(props){
        super(props);
        this.state= {
            filmes: []
        }
    }

    componentDidMount(){
        let url = "https://sujeitoprogramador.com/r-api/?api=filmes/"
        fetch(url)
        .then((response) => response.json())
        .then((json) =>{
            this.setState( {filmes: json});
        })
    }



    render(){
        return(
            <div className='container'>
                <div className='lista-filmes'>
                    {this.state.filmes.map( (filme)=> {
                        return(
                            <main key={filme.id} className='filme'>
                                <h3>{filme.nome}</h3>
                                <img src={filme.foto} alt='foto'/>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </main>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home;