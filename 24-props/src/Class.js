import React, {Component} from 'react';
import PropTypes from 'prop-types'; //

class Class extends Component {
    render() {
        const {text, valid} = this.props;
        return(
            <div>
                <p>
                    {text}
                </p>
                <button onClick={valid}>valid 버튼</button>
            </div>
        )
    }
}

Class.defaultProps = {
    text: '이건 기본 text props입니다.',
  };

Class.propTypes = {
    text: PropTypes.string,
}

export default Class;