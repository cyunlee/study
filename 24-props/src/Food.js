
import PropTypes from 'prop-types';
//리액트에서 제공하는 기능
//prop-types 라이브러리를 PropTypes 이름으로 임포트

const styles = {
    color: 'red',
}

function FoodComponent(props) {
    return(
        <div>
            <p>여기는 Food Component</p>
            <p>내가 좋아하는 음식은 <b style={styles}>{props.name}</b></p>
        </div>
    )
}

FoodComponent.defaultProps = {
    name: 'default',
}

FoodComponent.propTypes = {
    name: PropTypes.string,
}

export default FoodComponent;


