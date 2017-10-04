import React, { Component } from 'react';
import {Draggable} from '@shopify/draggable';
class ListContainer extends Component {
    state = {
        listData: []
    }

    componentDidMount(){
        this.setState({listData: this.props.dataSet.data});
        new Draggable(document.querySelectorAll('.item-list'))
        .on('drag:start', () => console.log('drag:start'))
        .on('drag:move',  () => console.log('drag:move'))
        .on('drag:stop',  () => console.log('drag:stop'));
    }

    render() {
        const { dataSet } = this.props;

        return (
            <div className="col-sm-12 col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{dataSet.title}</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="item-list">
                        {
                            this.state.listData.map(item => <li key={item.id}>{item.name}</li>)
                        }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListContainer;
