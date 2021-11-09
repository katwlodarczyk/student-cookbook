import PropTypes from "prop-types";
import {Link} from "react-router-dom";

TabBar.propTypes = {
  
};

TabBar.defaultProps = {
  
};

function TabBar(props) {

    return (
      <div class="fixed bottom-0 w-full bg-brand-teal text-white flex flex-row items-center justify-between px-7 py-4 text-xxxs">
        <Link to="/" class="flex flex-col justify-center items-center space-y-2.5">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1998 22.4495C15.5498 22.4495 17.4332 24.3512 17.4332 26.7178V32.3995C17.4332 34.7495 15.5498 36.6662 13.1998 36.6662H7.56649C5.23316 36.6662 3.33316 34.7495 3.33316 32.3995V26.7178C3.33316 24.3512 5.23316 22.4495 7.56649 22.4495H13.1998ZM32.4333 22.4495C34.7667 22.4495 36.6667 24.3512 36.6667 26.7178V32.3995C36.6667 34.7495 34.7667 36.6662 32.4333 36.6662H26.8C24.45 36.6662 22.5667 34.7495 22.5667 32.3995V26.7178C22.5667 24.3512 24.45 22.4495 26.8 22.4495H32.4333ZM13.1998 3.33334C15.5498 3.33334 17.4332 5.25001 17.4332 7.60168V13.2833C17.4332 15.65 15.5498 17.55 13.1998 17.55H7.56649C5.23316 17.55 3.33316 15.65 3.33316 13.2833V7.60168C3.33316 5.25001 5.23316 3.33334 7.56649 3.33334H13.1998ZM32.4333 3.33334C34.7667 3.33334 36.6667 5.25001 36.6667 7.60168V13.2833C36.6667 15.65 34.7667 17.55 32.4333 17.55H26.8C24.45 17.55 22.5667 15.65 22.5667 13.2833V7.60168C22.5667 5.25001 24.45 3.33334 26.8 3.33334H32.4333Z" fill="white"/>
            </svg>
            <span>Home</span>
        </Link>
        <Link to="/shopping-list" class="flex flex-col justify-center items-center space-y-2.5">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5725 33.253C13.7625 33.253 14.7308 34.2197 14.7308 35.4097C14.7308 36.5997 13.7625 37.568 12.5725 37.568C11.3825 37.568 10.4158 36.5997 10.4158 35.4097C10.4158 34.2197 11.3825 33.253 12.5725 33.253ZM31.373 33.253C32.5647 33.253 33.533 34.2197 33.533 35.4097C33.533 36.5997 32.5647 37.568 31.373 37.568C30.183 37.568 29.2163 36.5997 29.2163 35.4097C29.2163 34.2197 30.183 33.253 31.373 33.253ZM5.44617 5.01566L8.91283 5.61566C9.47117 5.71399 9.89617 6.17733 9.9445 6.74399L10.3362 11.4123L11.7926 11.413C12.0302 11.4131 12.2654 11.4132 12.498 11.4133L15.1719 11.4145C15.385 11.4146 15.5958 11.4148 15.8041 11.4149L18.7565 11.4165C18.9419 11.4166 19.1252 11.4167 19.3063 11.4168L21.3751 11.4181C21.539 11.4182 21.7009 11.4183 21.8606 11.4185L23.6803 11.4198C23.824 11.4199 23.9657 11.42 24.1055 11.4201L25.692 11.4215C25.8168 11.4216 25.9398 11.4217 26.061 11.4218L27.1038 11.4229C27.2144 11.423 27.3233 11.4231 27.4306 11.4232L28.6382 11.4246C28.7324 11.4247 28.8249 11.4249 28.916 11.425L29.9356 11.4264C30.0147 11.4265 30.0922 11.4266 30.1684 11.4268L30.8164 11.4278C30.8843 11.428 30.9509 11.4281 31.0162 11.4282L31.738 11.4297C31.7932 11.4298 31.8472 11.4299 31.9 11.43L32.3443 11.4312C32.3903 11.4313 32.4352 11.4314 32.479 11.4315L32.9553 11.433C32.9909 11.4332 33.0257 11.4333 33.0595 11.4334L33.3391 11.4345C33.3675 11.4347 33.3951 11.4348 33.4219 11.4349L33.7047 11.4365C33.7253 11.4366 33.7451 11.4367 33.7642 11.4369L33.9184 11.438C33.9336 11.4382 33.9482 11.4383 33.9622 11.4384L34.0732 11.4396C34.084 11.4397 34.0942 11.4399 34.1039 11.44L34.1794 11.4412C34.1866 11.4413 34.1933 11.4415 34.1996 11.4416L34.2474 11.4428C34.2518 11.4429 34.2558 11.4431 34.2596 11.4432L34.2942 11.4448C34.2964 11.445 34.2983 11.4451 34.3001 11.4453C34.3164 11.4468 34.3188 11.447 34.3212 11.4473C35.2495 11.5823 36.0662 12.0673 36.6228 12.814C37.1795 13.559 37.4128 14.4773 37.2795 15.3973L35.6978 26.3273C35.3995 28.4073 33.5928 29.9757 31.4928 29.9757H13.2912C11.0962 29.9757 9.23783 28.2623 9.0595 26.0707L7.53283 7.91399L5.02117 7.48066C4.3395 7.36066 3.8845 6.71566 4.00117 6.03399C4.12117 5.35233 4.7795 4.90899 5.44617 5.01566ZM11.4582 13.9129L10.5462 13.9123L11.5512 25.8657C11.6245 26.7857 12.3762 27.4757 13.2945 27.4757H31.4895C32.3578 27.4757 33.0995 26.829 33.2228 25.9707L34.8062 15.039C34.8428 14.779 34.7778 14.519 34.6195 14.309C34.4628 14.0973 34.2328 13.9607 33.9728 13.924C33.9608 13.9245 33.932 13.9249 33.8873 13.9253L33.706 13.9263C33.6681 13.9264 33.6264 13.9266 33.581 13.9267L32.6368 13.9282C32.5572 13.9282 32.4743 13.9283 32.3884 13.9283L30.1685 13.9282C30.0446 13.9282 29.9184 13.9281 29.7899 13.9281L27.2564 13.9265C27.1046 13.9264 26.9512 13.9263 26.7962 13.9262L25.3626 13.925C25.1993 13.9249 25.0348 13.9248 24.8692 13.9246L23.3507 13.9233C23.1792 13.9231 23.0069 13.923 22.8339 13.9228L21.7879 13.9219C21.6124 13.9217 21.4364 13.9215 21.26 13.9214L19.6638 13.9199C19.4859 13.9197 19.3078 13.9195 19.1297 13.9194L18.0619 13.9184C17.8842 13.9182 17.7068 13.918 17.5296 13.9179L16.4709 13.9169C16.2953 13.9168 16.1203 13.9166 15.9458 13.9165L14.395 13.9151C14.2251 13.915 14.0561 13.9148 13.8882 13.9147L11.9283 13.9132C11.7702 13.9131 11.6134 13.913 11.4582 13.9129ZM28.8127 17.5728C29.5027 17.5728 30.0627 18.1328 30.0627 18.8228C30.0627 19.5128 29.5027 20.0728 28.8127 20.0728H24.1927C23.501 20.0728 22.9427 19.5128 22.9427 18.8228C22.9427 18.1328 23.501 17.5728 24.1927 17.5728H28.8127Z" fill="white"/>
            </svg>
            <span>Shopping List</span>
        </Link>
        <Link to="/weekly-planner" class="flex flex-col justify-center items-center space-y-2.5">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3225 1.66666C27.0125 1.66666 27.5725 2.22666 27.5725 2.91666L27.5733 4.32967C30.0068 4.49652 32.0279 5.33007 33.4583 6.76349C35.02 8.33182 35.8417 10.5868 35.8334 13.2918V28.4968C35.8334 34.0502 32.3067 37.5002 26.6317 37.5002H12.535C6.86 37.5002 3.33334 34.0018 3.33334 28.3702V13.2885C3.33334 8.05048 6.47843 4.68822 11.6078 4.33025L11.6088 2.91666C11.6088 2.22666 12.1688 1.66666 12.8588 1.66666C13.5488 1.66666 14.1088 2.22666 14.1088 2.91666L14.1083 4.29832H25.0717L25.0725 2.91666C25.0725 2.22666 25.6325 1.66666 26.3225 1.66666ZM33.3333 16.5067H5.83334V28.3702C5.83334 32.6468 8.21334 35.0002 12.535 35.0002H26.6317C30.9533 35.0002 33.3334 32.6902 33.3334 28.4968L33.3333 16.5067ZM27.002 26.9938C27.692 26.9938 28.252 27.5538 28.252 28.2438C28.252 28.9338 27.692 29.4938 27.002 29.4938C26.312 29.4938 25.7453 28.9338 25.7453 28.2438C25.7453 27.5538 26.297 26.9938 26.987 26.9938H27.002ZM19.6062 26.9938C20.2962 26.9938 20.8562 27.5538 20.8562 28.2438C20.8562 28.9338 20.2962 29.4938 19.6062 29.4938C18.9162 29.4938 18.3495 28.9338 18.3495 28.2438C18.3495 27.5538 18.9012 26.9938 19.5912 26.9938H19.6062ZM12.1948 26.9938C12.8848 26.9938 13.4448 27.5538 13.4448 28.2438C13.4448 28.9338 12.8848 29.4938 12.1948 29.4938C11.5048 29.4938 10.9365 28.9338 10.9365 28.2438C10.9365 27.5538 11.4898 26.9938 12.1798 26.9938H12.1948ZM27.002 20.516C27.692 20.516 28.252 21.076 28.252 21.766C28.252 22.456 27.692 23.016 27.002 23.016C26.312 23.016 25.7453 22.456 25.7453 21.766C25.7453 21.076 26.297 20.516 26.987 20.516H27.002ZM19.6062 20.516C20.2962 20.516 20.8562 21.076 20.8562 21.766C20.8562 22.456 20.2962 23.016 19.6062 23.016C18.9162 23.016 18.3495 22.456 18.3495 21.766C18.3495 21.076 18.9012 20.516 19.5912 20.516H19.6062ZM12.1948 20.516C12.8848 20.516 13.4448 21.076 13.4448 21.766C13.4448 22.456 12.8848 23.016 12.1948 23.016C11.5048 23.016 10.9365 22.456 10.9365 21.766C10.9365 21.076 11.4898 20.516 12.1798 20.516H12.1948ZM25.0717 6.79832H14.1083L14.1088 8.40166C14.1088 9.09166 13.5488 9.65166 12.8588 9.65166C12.1688 9.65166 11.6088 9.09166 11.6088 8.40166L11.608 6.83616C7.87423 7.14981 5.83334 9.41308 5.83334 13.2885V14.0067H33.3333L33.3334 13.2885C33.34 11.2302 32.7867 9.63016 31.6883 8.53016C30.7242 7.56317 29.3148 6.98566 27.5739 6.83696L27.5725 8.40166C27.5725 9.09166 27.0125 9.65166 26.3225 9.65166C25.6325 9.65166 25.0725 9.09166 25.0725 8.40166L25.0717 6.79832Z" fill="white"/>
            </svg>
            <span>Weekly Planner</span>
        </Link>
      </div>
    );
  }

export default TabBar;