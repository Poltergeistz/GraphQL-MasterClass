import React, {
    Component
} from 'react';

class Loading extends Component {
    render() {
        return ( <div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <div className="content">
            <div className="header">
            Just one second
            </div>
            <p> We're fetching that content for you.</p>
            </div>
            </div>
        );
    }
}

export default Loading;