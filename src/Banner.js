import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">PX</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right app-banner-right">
                        <li><a href="/"><i className="fa fa-user fa-2"></i></a></li>
                        <li><a href="/"><i className="fa fa-sign-out fa-3"></i></a></li>
                    </ul>                
                </div>
            </div>
        </div>
    );
  }
}

export default Banner;
