const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container px-6 mx-auto">
          {/* Logo and Title */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <img className="w-auto h-7" src="" alt="" />
              <span className="text-xl font-semibold text-yellow-400">Delicious Restaurant 👑</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center mb-6 gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="Home"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="About"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="Teams"
              >
                Teams
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="Privacy"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="Cookies"
              >
                Cookies
              </a>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="my-6 border-gray-700" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-between text-center sm:text-left">
            <p className="text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} Delicious Restaurant. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/subahanali523"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>

              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                </svg>
              </a>

              <a
                href="https://github.com/Subahan-1D"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                aria-label="Github"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.461 18.685 14.4891 19.1897 14.523 19.655C14.9465 19.7462 15.3119 19.7636 15.644 19.573C18.065 18.722 19.618 16.084 19.443 12.937C19.2687 9.77406 15.7957 6.38603 12.026 6.388C10.736 6.38995 9.55402 7.125 9.01602 8.105C8.47002 9.099 7.21102 10.015 6.00302 9.993C4.79402 9.971 3.87402 9.176 3.87402 8.443C3.87402 7.710 4.39402 6.830 5.00502 6.679C5.50902 6.55006 5.90402 6.843 5.90402 7.186C5.90402 7.546 5.92002 8.267 6.09502 8.513C6.53602 9.484 7.73702 9.115 8.00302 9.441C8.04547 9.64462 8.17302 9.828 8.38502 9.928C8.55772 9.99234 8.73452 10.0218 8.90202 10.021C8.86202 9.954 8.85202 9.746 8.85202 9.547C8.85202 9.211 8.81402 9.094 8.76602 9.028C8.68002 8.869 8.62302 8.701 8.70802 8.579C9.02 8.393 9.29002 8.179 9.40002 8.121C9.48202 8.088 9.45402 8.413 9.43802 8.712C9.50302 8.716 9.70702 8.739 9.77102 8.843C9.87402 9.034 9.56102 9.099 9.31102 8.987C9.28602 8.921 9.34802 9.097 9.57002 8.957C9.77202 8.826 9.84902 8.535 9.90202 8.345C9.81802 8.014 9.35302 7.950 8.95402 8.060C8.51202 8.175 8.10402 8.046 7.76802 8.179C7.46202 8.289 7.14202 8.553 7.01902 8.936C6.99302 9.124 7.32902 9.353 7.57702 9.309C7.69802 9.245 8.05402 9.399 8.20402 9.698C8.20402 10.094 8.11902 10.295 8.07302 10.583Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
