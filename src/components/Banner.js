import PropTypes from "prop-types";
import DefaultBackgroundImage from '../assets/images/louis-hansel.jpg'

Banner.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

Banner.defaultProps = {
  image: DefaultBackgroundImage,
};

function Banner(props) {
    const {heading, image, center} = props;

    return (
     <div 
        style={{ background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
        no-repeat="true" 
        className={"bg-gray-300 bg-cover h-40 w-full flex p-6 "+ (center ? 'justify-center' : 'justify-end')}
    >
         <h1 className={"font-galada text-4xl text-white " + (center ? 'w-full items-center justify-center flex text-center' : 'w-1/3 mr-4 text-right')}> { heading } </h1>
     </div>
     
    );
  }

export default Banner;