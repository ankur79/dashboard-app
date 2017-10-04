import React, { Component } from 'react';

class TemplateView extends Component {
    render() {
        return (
            <div className="col-sm-12 col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Solution View</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 template-blank">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 template-blank">
                            </div>
                            <div className="col-sm-6 col-md-6 template-blank">
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-sm-12 col-md-12 template-blank">
                            </div>
                        </div>                                               
                    </div>
                </div>
            </div>
        );
    }
}

export default TemplateView;
