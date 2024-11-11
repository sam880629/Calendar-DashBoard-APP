import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

const Start = () => {
  const [open, toggle] = useState(false);

  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: "0.0175, 0.0" },
      to: { factor: 150, opacity: 1, scale: 1, freq: "0.0, 0.0" },
      config: { duration: 3000 },
    }),
    [open]
  );

  const navigate = useNavigate();

  const goDashBoard = () => {
    toggle(!open);
    setTimeout(() => {
      navigate("/dashBoard");
    }, 1500);
  };

  return (
    <div
      className="flex flex-col  items-center justify-center h-full ml-2 md:xl:m-0"
      onClick={goDashBoard}
    >
      <animated.svg
        className="w-[200px] md:w-[400px] z-10"
        style={{ scale, opacity }}
        viewBox="0 0 1278 446"
      >
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="2"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        {/* hello  */}
        <g filter="url(#water)">
          <path
            d="M179.53551,113.735463 C239.115435,113.735463 292.796357,157.388081 292.796357,245.873118 L292.796357,415.764388 L198.412318,415.764388 L198.412318,255.311521 C198.412318,208.119502 171.866807,198.681098 151.220299,198.681098 C131.753591,198.681098 94.5898754,211.658904 94.5898754,264.749925 L94.5898754,415.764388 L0.205836552,415.764388 L0.205836552,0.474616471 L94.5898754,0.474616471 L94.5898754,151.489079 C114.646484,127.893069 145.321296,113.735463 179.53551,113.735463 Z M627.269795,269.469127 C627.269795,275.95803 626.679895,285.396434 626.089994,293.065137 L424.344111,293.065137 C432.012815,320.790448 457.378525,340.257156 496.901841,340.257156 C520.497851,340.257156 554.712065,333.768254 582.437376,322.560149 L608.392987,397.47748 C608.392987,397.47748 567.09997,425.202792 494.54224,425.202792 C376.562192,425.202792 325.240871,354.414762 325.240871,269.469127 C325.240871,183.343692 377.152092,113.735463 480.974535,113.735463 C574.178773,113.735463 627.269795,171.545687 627.269795,269.469127 Z M424.344111,236.434714 L528.166554,236.434714 C528.166554,216.378105 511.649347,189.242694 476.255333,189.242694 C446.17042,189.242694 424.344111,216.378105 424.344111,236.434714 Z M659.714308,0.474616471 L754.098347,0.474616471 L754.098347,415.764388 L659.714308,415.764388 L659.714308,0.474616471 Z M810.13887,0.474616471 L904.522909,0.474616471 L904.522909,415.764388 L810.13887,415.764388 L810.13887,0.474616471 Z M1097.42029,113.735463 C1191.80433,113.735463 1257.87315,183.343692 1257.87315,269.469127 C1257.87315,355.594563 1192.98413,425.202792 1097.42029,425.202792 C997.727148,425.202792 936.967423,355.594563 936.967423,269.469127 C936.967423,183.343692 996.547347,113.735463 1097.42029,113.735463 Z M1097.42029,340.257156 C1133.9941,340.257156 1163.48912,308.402543 1163.48912,269.469127 C1163.48912,230.535711 1133.9941,198.681098 1097.42029,198.681098 C1060.84647,198.681098 1031.35146,230.535711 1031.35146,269.469127 C1031.35146,308.402543 1060.84647,340.257156 1097.42029,340.257156 Z"
            fill="White"
          />
        </g>
      </animated.svg>
      {/* welcome */}
      <animated.svg
        className="w-[200px] md:w-[400px] z-10 "
        style={{ scale, opacity }}
        viewBox="0 0 1278 200"
      >
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="2"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <path
            d="M21.4148 70L0.823864 0.181816H21.9602L31.5057 43.1364H32.0511L43.3693 0.181816H60.0057L71.3239 43.2727H71.8693L81.4148 0.181816H102.551L81.9602 70H63.8239L51.9602 31H51.4148L39.5511 70H21.4148ZM127.957 70.9545C122.366 70.9545 117.548 69.8864 113.503 67.75C109.48 65.5909 106.378 62.5 104.196 58.4773C102.037 54.4318 100.957 49.5909 100.957 43.9545C100.957 38.5455 102.048 33.8182 104.23 29.7727C106.412 25.7273 109.491 22.5795 113.469 20.3295C117.446 18.0795 122.139 16.9545 127.548 16.9545C131.503 16.9545 135.082 17.5682 138.287 18.7955C141.491 20.0227 144.23 21.8068 146.503 24.1477C148.776 26.4659 150.526 29.2841 151.753 32.6023C152.98 35.9205 153.594 39.6591 153.594 43.8182V48.1818H106.821V37.8182H136.276C136.253 36.3182 135.866 35 135.116 33.8636C134.389 32.7045 133.401 31.8068 132.151 31.1705C130.923 30.5114 129.526 30.1818 127.957 30.1818C126.435 30.1818 125.037 30.5114 123.764 31.1705C122.491 31.8068 121.469 32.6932 120.696 33.8295C119.946 34.9659 119.548 36.2955 119.503 37.8182V49C119.503 50.6818 119.855 52.1818 120.56 53.5C121.264 54.8182 122.276 55.8523 123.594 56.6023C124.912 57.3523 126.503 57.7273 128.366 57.7273C129.662 57.7273 130.844 57.5455 131.912 57.1818C133.003 56.8182 133.935 56.2955 134.707 55.6136C135.48 54.9091 136.048 54.0682 136.412 53.0909H153.594C153.003 56.7273 151.605 59.8864 149.401 62.5682C147.196 65.2273 144.276 67.2955 140.639 68.7727C137.026 70.2273 132.798 70.9545 127.957 70.9545ZM180.091 0.181816V70H161.273V0.181816H180.091ZM214.906 70.9545C209.224 70.9545 204.361 69.8295 200.315 67.5795C196.27 65.3068 193.168 62.1477 191.009 58.1023C188.849 54.0341 187.77 49.3182 187.77 43.9545C187.77 38.5909 188.849 33.8864 191.009 29.8409C193.168 25.7727 196.27 22.6136 200.315 20.3636C204.361 18.0909 209.224 16.9545 214.906 16.9545C220.043 16.9545 224.486 17.8864 228.236 19.75C232.009 21.5909 234.929 24.2045 236.997 27.5909C239.065 30.9545 240.111 34.9091 240.134 39.4545H222.679C222.429 36.7045 221.634 34.6136 220.293 33.1818C218.974 31.7273 217.27 31 215.179 31C213.543 31 212.111 31.4773 210.884 32.4318C209.656 33.3636 208.702 34.7841 208.02 36.6932C207.338 38.5795 206.997 40.9545 206.997 43.8182C206.997 46.6818 207.338 49.0682 208.02 50.9773C208.702 52.8636 209.656 54.2841 210.884 55.2386C212.111 56.1705 213.543 56.6364 215.179 56.6364C216.565 56.6364 217.793 56.3182 218.861 55.6818C219.929 55.0227 220.793 54.0682 221.452 52.8182C222.134 51.5455 222.543 50 222.679 48.1818H240.134C240.065 52.7955 239.009 56.8182 236.963 60.25C234.918 63.6591 232.02 66.2955 228.27 68.1591C224.543 70.0227 220.088 70.9545 214.906 70.9545ZM273.125 70.9545C267.443 70.9545 262.58 69.8295 258.534 67.5795C254.489 65.3068 251.386 62.1477 249.227 58.1023C247.068 54.0341 245.989 49.3182 245.989 43.9545C245.989 38.5909 247.068 33.8864 249.227 29.8409C251.386 25.7727 254.489 22.6136 258.534 20.3636C262.58 18.0909 267.443 16.9545 273.125 16.9545C278.807 16.9545 283.67 18.0909 287.716 20.3636C291.761 22.6136 294.864 25.7727 297.023 29.8409C299.182 33.8864 300.261 38.5909 300.261 43.9545C300.261 49.3182 299.182 54.0341 297.023 58.1023C294.864 62.1477 291.761 65.3068 287.716 67.5795C283.67 69.8295 278.807 70.9545 273.125 70.9545ZM273.261 57.0455C274.852 57.0455 276.227 56.5114 277.386 55.4432C278.545 54.375 279.443 52.8523 280.08 50.875C280.716 48.8977 281.034 46.5455 281.034 43.8182C281.034 41.0682 280.716 38.7159 280.08 36.7614C279.443 34.7841 278.545 33.2614 277.386 32.1932C276.227 31.125 274.852 30.5909 273.261 30.5909C271.58 30.5909 270.136 31.125 268.932 32.1932C267.727 33.2614 266.807 34.7841 266.17 36.7614C265.534 38.7159 265.216 41.0682 265.216 43.8182C265.216 46.5455 265.534 48.8977 266.17 50.875C266.807 52.8523 267.727 54.375 268.932 55.4432C270.136 56.5114 271.58 57.0455 273.261 57.0455ZM307.898 70V17.6364H325.761V27.5909H326.307C327.398 24.3182 329.261 21.7273 331.898 19.8182C334.534 17.9091 337.67 16.9545 341.307 16.9545C344.989 16.9545 348.159 17.9318 350.818 19.8864C353.477 21.8182 355.08 24.3864 355.625 27.5909H356.17C357.057 24.3864 358.943 21.8182 361.83 19.8864C364.716 17.9318 368.102 16.9545 371.989 16.9545C377.011 16.9545 381.08 18.5682 384.193 21.7955C387.33 25.0227 388.898 29.3182 388.898 34.6818V70H370.08V39.4545C370.08 37.1591 369.5 35.3636 368.341 34.0682C367.182 32.75 365.625 32.0909 363.67 32.0909C361.739 32.0909 360.205 32.75 359.068 34.0682C357.955 35.3636 357.398 37.1591 357.398 39.4545V70H339.398V39.4545C339.398 37.1591 338.818 35.3636 337.659 34.0682C336.5 32.75 334.943 32.0909 332.989 32.0909C331.693 32.0909 330.58 32.3864 329.648 32.9773C328.716 33.5682 327.989 34.4205 327.466 35.5341C326.966 36.625 326.716 37.9318 326.716 39.4545V70H307.898ZM423.27 70.9545C417.679 70.9545 412.861 69.8864 408.815 67.75C404.793 65.5909 401.69 62.5 399.509 58.4773C397.349 54.4318 396.27 49.5909 396.27 43.9545C396.27 38.5455 397.361 33.8182 399.543 29.7727C401.724 25.7273 404.804 22.5795 408.781 20.3295C412.759 18.0795 417.452 16.9545 422.861 16.9545C426.815 16.9545 430.395 17.5682 433.599 18.7955C436.804 20.0227 439.543 21.8068 441.815 24.1477C444.088 26.4659 445.838 29.2841 447.065 32.6023C448.293 35.9205 448.906 39.6591 448.906 43.8182V48.1818H402.134V37.8182H431.588C431.565 36.3182 431.179 35 430.429 33.8636C429.702 32.7045 428.713 31.8068 427.463 31.1705C426.236 30.5114 424.838 30.1818 423.27 30.1818C421.747 30.1818 420.349 30.5114 419.077 31.1705C417.804 31.8068 416.781 32.6932 416.009 33.8295C415.259 34.9659 414.861 36.2955 414.815 37.8182V49C414.815 50.6818 415.168 52.1818 415.872 53.5C416.577 54.8182 417.588 55.8523 418.906 56.6023C420.224 57.3523 421.815 57.7273 423.679 57.7273C424.974 57.7273 426.156 57.5455 427.224 57.1818C428.315 56.8182 429.247 56.2955 430.02 55.6136C430.793 54.9091 431.361 54.0682 431.724 53.0909H448.906C448.315 56.7273 446.918 59.8864 444.713 62.5682C442.509 65.2273 439.588 67.2955 435.952 68.7727C432.338 70.2273 428.111 70.9545 423.27 70.9545Z"
            fill="White"
          />
        </g>
       
      </animated.svg>
      <animated.div className="bg-white  font-bold z-10  border rounded-xl cursor-pointer shadow-lg"
      style={{opacity}}>
          <Button variant="contained" color="white" sx={{fontWeight:700}}>Start DashBoard</Button>
       </animated.div>
    </div>
  );
};

export default Start;
