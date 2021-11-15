import PropTypes from "prop-types";
import DefaultBackgroundImage from '../assets/images/louis-hansel.jpg'
import { useNavigate } from "react-router-dom";

Banner.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string.isRequired,
  center: PropTypes.bool,
  position: PropTypes.string,
  withIcon: PropTypes.bool,
};

Banner.defaultProps = {
  image: DefaultBackgroundImage,
  position: 'center',
  withIcon: false
};

function Banner(props) {
    let navigate = useNavigate();
    const {heading, image, center, position, withIcon} = props;

    return (
     <div 
        style={{ background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: `${position}`}} 
        no-repeat="true" 
        className="relative bg-gray-300 bg-cover shadow-lg h-40 w-full flex "
    >
        <div className="w-full h-full bg-recipe-overlay absolute" />
        <div onClick={navigate(-1)} className={"absolute left-4 z-20 pt-6 " + (withIcon ? 'block' : 'hidden')}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9391 19.3988L21.9416 19.989C21.9416 22.4417 21.798 24.6778 21.5816 26.1355L21.3921 27.042C21.2866 27.522 21.148 28.0687 21.0034 28.3477C20.4744 29.3685 19.4398 30 18.3326 30H18.2362C17.5144 29.9761 15.998 29.3428 15.998 29.3207C13.5581 28.2969 8.85076 25.2071 6.67666 23.0044L6.04488 22.343C5.87944 22.1638 5.69357 21.9517 5.57817 21.7863C5.19272 21.2759 5 20.6444 5 20.0129C5 19.3079 5.21636 18.6525 5.62545 18.1164L6.27455 17.4159L6.41998 17.2664C8.39269 15.1276 13.5435 11.6303 16.238 10.5599L16.6449 10.404C17.1344 10.2286 17.8203 10.0193 18.2362 10C18.7653 10 19.2707 10.123 19.7525 10.3653C20.3544 10.705 20.8344 11.2411 21.0998 11.8726C21.2689 12.3095 21.5343 13.6222 21.5343 13.646C21.7777 14.9696 21.9188 17.058 21.9391 19.3988ZM35 20.0007C35 21.3978 33.8782 22.5306 32.4946 22.5306L26.3292 21.9853C25.2438 21.9853 24.3638 21.0968 24.3638 20.0007C24.3638 18.9029 25.2438 18.0162 26.3292 18.0162L32.4946 17.4709C33.8782 17.4709 35 18.6036 35 20.0007Z" fill="white"/>
          </svg>
        </div>
        <div className={"z-20 p-6 w-full flex " + (center ? 'w-full justify-center' : 'justify-end')}>
            <h1 className={"font-galada text-4xl text-white " + (center ? 'w-full items-center justify-center flex text-center' : 'w-1/3 mr-4 text-right')}> { heading } </h1>
        </div>
     </div>
     
    );
  }

export default Banner;