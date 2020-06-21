import React, {Component} from 'react';

class PureCanvas extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return (
            <canvas width={window.innerWidth} height={window.innerHeight} ref={node=>node?this.props.contextRef(node.getContext('2d')):null}/>
        );
    }
}

export default PureCanvas;