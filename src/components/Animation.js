import React, {Component} from 'react';
import OkeCanvas from "./OkeCanvas";

class Animation extends Component {
    state={
        angle: 0,
    };
    componentDidMount() {
        this.rAf =requestAnimationFrame(this.updateAnimeState);
    }
    updateAnimeState(){
        this.setState(prev => ({angle:prev.angle +1}));
        this.rAf = requestAnimationFrame(this.updateAnimeState)
    }
    componentWillMount() {
        cancelAnimationFrame(this.rAf)
    }

    render() {
        this.updateAnimeState = this.updateAnimeState.bind(this);
        return (
            <OkeCanvas angle={this.state.angle}/>
        );
    }
}

export default Animation;