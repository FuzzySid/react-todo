import React,{Component} from 'react';

class AddTodos extends Component{
    state={
        'name': null
    }
    handleChange=(e)=>{
        this.setState({
            ['name']:e.target.value 
        })
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(e.target.item.value);
       this.props.addTodos(this.state);
       console.log(this.state);
        document.querySelector('form').reset();
    }
   
    render(){
        return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="item"></label>
                        <input onChange={this.handleChange} type="text" placeholder="Add a todo..." id="item"/>
                        <button className="btn btn-add">Add</button>
                    </form>
                </div>
        )
    }
}

export default AddTodos;