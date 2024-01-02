import PropTypes from 'prop-types';



function Bestseller(props){
    return(
    <div class='container1'>
        <div className='bestseller'>이번주 베스트셀러</div>
        <br/>
        <div className='image'></div><br/>
        <div class='container2'>
            <div className='title'><b>{props.title}</b></div><br/>
            <div className='author'><b>저자: {props.author}</b></div>
            <div className='price'><b>판매가: {props.price}</b></div>
            <div className='type'><b>구분: {props.type}</b></div>
        </div>
    </div>
    )
}

Bestseller.propTyes = {
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.string,
    type: PropTypes.string,
}

export default Bestseller;