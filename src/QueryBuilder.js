import React, { Component } from 'react';
import Graph from 'react-graph-vis';

class QueryBuilder extends Component {
  render() {
    const graph = {
      nodes: [
        { id: 1, label: "Close 1", color: "#5bc0de" },
        { id: 2, label: "Close 2", color: "#5bc0de" },
        { id: 3, label: "Close 3", color: "#5bc0de" },
        { id: 4, label: "Close 4", color: "#5bc0de" },
        { id: 5, label: "Close 5", color: "#5bc0de" }
      ],
      edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }]
    };
    
    const options = {
      layout: {
        hierarchical: false
      },
      edges: {
        color: "#000000"
      }
    };
    
    const events = {
      select: function(event) {
        var { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
      }
    };

    return (
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h1 className="page-header">Query Builder</h1>
            <div className="row placeholders">
              <div className="col-xs-12 col-sm-12 placeholder">
                <Graph graph={graph} options={options} events={events} style={{ height: "440px" }} />
              </div>
            </div>
        </div>
    );
  }
}

export default QueryBuilder;
