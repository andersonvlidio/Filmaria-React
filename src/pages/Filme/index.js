import React, {Component} from 'react'

class Filme extends Component{
    constructor(props){
        super(props);
        this.state={
            filme:[]
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            this.setState({filme: json})
        })
    }
    render(){
        return(
            <div className='container'>
                <main key={this.state.filme.id} className='filme'>
                    <h3>{this.state.filme.nome}</h3>
                    <img src={this.state.filme.foto} alt='foto'/>
                    
                    {this.state.filme.length !== 0 &&
                    <h4>Sinopse</h4>
                    }
                    {this.state.filme.sinopse}
                    
                </main>
                
            </div>
        );
    }
}


export default Filme;