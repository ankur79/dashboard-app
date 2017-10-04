import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


import ListContainer from './ListContainer';
import TemplateView from './TemplateView';
import DragDropHolder from './DragDropHolder';
import SearchHolder from './SearchHolder';
import { ApiList } from './DataSet';


class SolutionBuilder extends Component {
  state = {
      showModal: false
  }
  render() {
    return (
      <div>
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main content-container">
          <h1 className="page-header">Solution Builder</h1>
            <div className="row">
              <div className="col-xs-7 col-sm-7 placeholder">
                <SearchHolder />
                <Button onClick={() =>  this.setState({showModal: true})} className="btn btn-primary">Add
                </Button>
               
                </div> 
            </div>
            <div className="row placeholders">
              <div className="col-xs-7 col-sm-7 placeholder">
                <TemplateView />
              </div>
              <DragDropHolder/>
              <div className="col-xs-4 col-sm-4 placeholder">
                <ListContainer dataSet={ApiList}/>
              </div>
            </div>
        </div>
  
      </div>
    );
  }
}

export default SolutionBuilder;
