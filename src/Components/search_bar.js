import React,{Component} from 'react';
import '../App.css';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term : ''};
    }

    render(){
        return(
            <div> 
            <input 
                value = {this.state.term}
            
            onChange = {  event  =>this.setState({term : event.target.value})} />
            {/* Value of state : {this.state.term}; */}
            </div>
        );
    }

   


 }
// const SearchBar = () =>{
//     return(
        
//             <input/>
//             );  
// }
export default SearchBar;
