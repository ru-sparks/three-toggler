import React from 'react';

class ClassicToggle extends React.Component {
    state = {
        smile: true
    }

    render() {
        return (
            <p className="toggle" onClick={() => this.setState({smile: !this.state.smile})}>{this.state.smile? "😊" : "😒"}</p>
        )
    }
}

 export default ClassicToggle;