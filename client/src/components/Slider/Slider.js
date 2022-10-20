import ReactSlider from 'react-slider';
import './Slider.css'

const Slider = (props) => {
    const page = props.page;
    return (
        <ReactSlider
            hidden={page == 1}
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
        />
    );
};

export default Slider;