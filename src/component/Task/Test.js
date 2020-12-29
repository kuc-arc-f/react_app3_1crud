
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import LibTask from '../../libs/LibTask';
 
//
class Test extends Component {
    constructor(props){
        super(props)
        this.state = {title: '', content: ''}
        this.handleClick = this.handleClick.bind(this);
        this.db = null
    }
    componentDidMount(){
    }
    handleClick(){
console.log("#-handleClick")
    }
    render() {
        return (
        <div className="container">
            <Link to="/task" className="btn btn-outline-primary mt-2">Back</Link>
            <hr className="mt-2 mb-2" />
            <h1 className="mt-2">Test</h1>
            <hr />
            <div className="form-group">
                <button className="btn btn-primary" onClick={this.handleClick}>test
                </button>
            </div>
        
        </div>
        )
    }
}
export default Test;

