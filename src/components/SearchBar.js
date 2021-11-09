import PropTypes from "prop-types";
import {Link} from "react-router-dom";

SearchBar.propTypes = {
  
};

SearchBar.defaultProps = {
  
};

function SearchBar(props) {

    return (
        <div>
        <label htmlFor="search" className="sr-only block text-sm font-medium text-gray-700">
            Search
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1158 1C14.5908 1 18.2308 4.64 18.2308 9.115C18.2308 11.2263 17.4206 13.1519 16.0947 14.5971L18.7037 17.2006C18.9478 17.4447 18.9487 17.8398 18.7045 18.0839C18.5828 18.2072 18.422 18.2681 18.262 18.2681C18.1028 18.2681 17.9428 18.2073 17.8203 18.0856L15.1799 15.4525C13.7909 16.5649 12.0297 17.2308 10.1158 17.2308C5.64083 17.2308 2 13.59 2 9.115C2 4.64 5.64083 1 10.1158 1ZM10.1158 2.25C6.33 2.25 3.25 5.32917 3.25 9.115C3.25 12.9008 6.33 15.9808 10.1158 15.9808C13.9008 15.9808 16.9808 12.9008 16.9808 9.115C16.9808 5.32917 13.9008 2.25 10.1158 2.25Z" fill="#333333"/>
                        </svg>
            </div>
            <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-brand-teal focus:border-brand-teal block w-full pl-10 text-xs border-gray-300 rounded-md"
            placeholder="Search for a recipe"
            />
        </div>
        </div>
    );
  }

export default SearchBar;