import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


//this redirects after 2 seconds!

class PageNotFound extends Component{
    constructor(props){
        super(props);
        this.state = {
            showRedirect: false
        }
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({
                showRedirect: true
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <h1>NOPE</h1>
                {this.state.showRedirect ? <Redirect to="/"/> : null}
            </div>
        )
    }
}

export default PageNotFound;