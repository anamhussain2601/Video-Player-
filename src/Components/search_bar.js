import React,{Component} from 'react';
import '../App.css';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term : ''};
    }

    render(){
        return(
            <div className = "search-bar"> 
            <input 
                value = {this.state.term}
            
            onChange = {  event  =>this.onInputChange( event.target.value)} />
            {/* Value of state : {this.state.term}; */}
            </div>
        );
    }

   onInputChange(term){
            this.setState({term});
            this.props.onSearchTermChange(term);
   }


 }
// const SearchBar = () =>{
//     return(
        
//             <input/>
//             );  
// }
export default SearchBar;
