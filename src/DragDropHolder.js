import React from 'react';

const DragDropHolder = () => {
    return (
        <div className="col-xs-1 col-sm-1 placeholder" style={{"paddingTop":"20%", "paddingLeft":"0", "paddingRight":"0"}}>
            <span> Drag & Drop </span>
            <i className="fa fa-arrows-h fa-2x" aria-hidden="true"></i>
        </div>
    );
}

export default DragDropHolder;
