import React, { Component } from 'react';

class SearchHolder extends Component {

    render(){
        return (
            <div className="col-xs-12 col-sm-12">
                <div className="app-search">
                    <input type="text" className="form-control" placeholder="Search..."/>
                    
                </div>
            </div>    
        );
    }
}

export default SearchHolder;
