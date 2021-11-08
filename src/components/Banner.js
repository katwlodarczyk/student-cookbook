import PropTypes from "prop-types";
import DefaultBackgroundImage from '../assets/images/louis-hansel.png'

Banner.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string.isRequired
};

Banner.defaultProps = {
  image: DefaultBackgroundImage
};

function Banner(props) {
    const {heading, image} = props;

    // var bannerImage = {
    //     backgroudImage: `url(${image})`
    // }

    return (
     <div style={{ background: `url(${image})` }} no-repeat  class="bg-gray-300 flex justify-end p-6">
         <h1 class="w-1/3 mr-4 font-galada text-4xl text-white text-right"> { heading } </h1>
     </div>
     
    );
  }

export default Banner;