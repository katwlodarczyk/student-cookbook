import PropTypes from "prop-types";
import DefaultBackgroundImage from '../assets/images/louis-hansel.jpg'

Banner.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string.isRequired,
  center: PropTypes.bool,
  position: PropTypes.string,
};

Banner.defaultProps = {
  image: DefaultBackgroundImage,
  position: 'center',
};

function Banner(props) {
    const {heading, image, center, position} = props;

    return (
     <div 
        style={{ background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: `${position}`}} 
        no-repeat="true" 
        className="relative bg-gray-300 bg-cover shadow-lg h-40 w-full flex "
    >
        <div className="w-full h-full bg-overlay absolute" />
        <div className={"z-20 w-full p-6 flex " + (center ? 'justify-center' : 'justify-end')}>
            <h1 className={"font-galada text-4xl text-white " + (center ? 'w-full items-center justify-center flex text-center' : 'w-1/3 mr-4 text-right')}> { heading } </h1>
        </div>
     </div>
     
    );
  }

export default Banner;