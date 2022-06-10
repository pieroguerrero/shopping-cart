import { Link } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { HamburgerMenu } from "./components/HambugerMenu";
import { NavBarMenu } from "./components/NavBarMenu/NavBarMenu";
import { useRef } from "react";
import { BaseURLPath } from "../../utilities/constants";

/**
 *
 * Main page navigation horizontal bar
 * @param {Object} props
 * @param {string} props.strPortalDivId
 * @param {Object[]} props.arrOptions
 * @param {string} props.arrOptions.title
 * @param {string} props.arrOptions.uriParameter
 * @returns {JSX.Element}
 */
const NavBar = ({ arrOptions, strPortalDivId }) => {
  const refDivAd = useRef(null);
  return (
    <>
      <header className="bg-white sticky top-0 z-50">
        <div
          ref={refDivAd}
          className="bg-color_primary h-10 grid grid-cols-[40px_1fr_40px] place-items-center  px-4 sm:px-6 lg:px-8"
        >
          <div></div>
          <p className="text-sm font-medium text-white">
            Get free delivery on orders over $100
          </p>
          <button
            type="button"
            onClick={() => refDivAd.current.classList.add("hidden")}
          >
            <svg
              className="h-6 w-6 text-gray-400"
              x-description="Heroicon name: outline/x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              {/* Hamburguer Menu */}
              <HamburgerMenu
                strPortalDivId={strPortalDivId}
                arrOptions={arrOptions}
              />
              {/* <!-- Logo --> */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={BaseURLPath}>
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&amp;shade=600"
                    alt="Shopping App"
                  /> */}

                  <svg
                    className="h-8 w-auto"
                    viewBox="0 0 256 237"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M120.432796,229.054204 C120.655962,225.144459 124.005942,222.15565 127.915732,222.378025 C129.794293,222.484871 131.553388,223.333887 132.805753,224.738161 C134.058119,226.142435 134.701083,227.986843 134.593097,229.865339 C134.36835,233.774993 131.017161,236.762447 127.107461,236.53849 C123.197761,236.314534 120.20963,232.963949 120.432796,229.054204 Z M62.3506014,221.380516 C64.0401755,218.806669 67.4962038,218.089537 70.0703502,219.778656 C71.3070821,220.590182 72.1706359,221.859906 72.4709175,223.308323 C72.771199,224.75674 72.4835933,226.265118 71.6714109,227.501419 C69.9809263,230.074669 66.5246444,230.790577 63.9510959,229.100548 C61.3775473,227.410519 60.6610274,223.954364 62.3506014,221.380516 Z M186.928947,219.19474 C188.248645,218.526774 189.77994,218.411553 191.184733,218.874517 C192.589527,219.33748 193.752278,220.34055 194.41626,221.662257 C195.432063,223.675785 195.134808,226.102969 193.663123,227.811856 C192.191439,229.520744 189.835199,230.174741 187.693268,229.468847 C185.551338,228.762953 184.045607,226.836206 183.878295,224.587171 C183.710982,222.338135 184.915043,220.209799 186.928947,219.19474 Z M75.8146305,191.87541 C78.41798,187.898799 83.7516352,186.784724 87.7291081,189.386756 C91.7056566,191.994397 92.8183552,197.330292 90.2154612,201.30995 C87.6094783,205.284835 82.2750864,206.395377 78.2993379,203.790711 C74.3235893,201.186044 73.211281,195.852021 75.8146305,191.87541 Z M169.439713,188.699242 C171.473771,187.66157 173.837041,187.475577 176.008383,188.182279 C178.179725,188.888981 179.9808,190.430334 181.01444,192.466444 C182.599829,195.572558 182.156875,199.327995 179.892314,201.980007 C177.627754,204.632019 173.988056,205.657748 170.671952,204.578463 C167.355848,203.499178 165.017124,200.527665 164.747317,197.050797 C164.484609,193.665426 166.233792,190.450827 169.196823,188.82736 L169.439713,188.699242 Z M118.26203,183.440917 C120.055292,179.751203 123.89622,177.506667 127.991076,177.755521 C133.564177,178.089026 137.815426,182.871154 137.493842,188.444956 C137.261341,192.540773 134.582358,196.092352 130.707993,197.441084 C126.833629,198.789815 122.528311,197.669589 119.80265,194.603558 C117.076989,191.537527 116.468768,187.130631 118.26203,183.440917 Z M28.6311316,167.753601 C30.3107596,166.904726 32.2589218,166.758279 34.0465802,167.34651 C35.8342385,167.934741 37.3147809,169.209409 38.1621518,170.889796 C39.9253073,174.386238 38.5209012,178.649998 35.0249849,180.414197 C31.5290687,182.178396 27.2648899,180.775262 25.4996484,177.279872 C23.7704323,173.855817 25.0803688,169.69363 28.4197846,167.864834 L28.6311316,167.753601 Z M218.475705,169.770604 C220.622168,166.495373 225.017011,165.57977 228.292821,167.725347 C229.867056,168.756432 230.96693,170.370932 231.350247,172.213327 C231.733564,174.055722 231.36889,175.974928 230.336528,177.548325 C228.188295,180.822394 223.792957,181.73562 220.518308,179.588272 C217.243658,177.440924 216.329243,173.045834 218.475705,169.770604 Z M99.568053,138.319047 C106.511056,134.571094 115.112529,136.016393 120.449295,141.827707 C125.786062,147.63902 126.495169,156.332201 122.17075,162.931582 C118.994217,167.807602 113.561777,170.740127 107.742367,170.720471 C99.8523475,170.714455 92.9737912,165.351649 91.0437381,157.701333 C89.1136849,150.051017 92.6250498,142.066999 99.568053,138.319047 Z M143.110265,137.022663 C151.188952,134.422548 159.958113,138.090594 163.779492,145.668381 C168.034487,154.158611 164.623996,164.491134 156.150909,168.780163 C153.744811,170.000374 151.088227,170.645176 148.390473,170.663764 C139.903673,170.663764 132.680022,164.4854 131.36407,156.101245 C130.048118,147.71709 135.031578,139.622779 143.110265,137.022663 Z M60.1171317,146.592914 C62.7915958,143.486482 67.074102,142.297191 70.9674126,143.579694 C74.8607231,144.862196 77.5979688,148.363875 77.9025769,152.451649 C78.207185,156.539422 76.0191566,160.408117 72.3589252,162.253486 C67.3628687,164.772334 61.2708086,162.765538 58.7499091,157.770516 C56.9030373,154.111043 57.4426675,149.699346 60.1171317,146.592914 Z M179.865573,147.373074 C182.936973,142.694433 189.219616,141.391495 193.89827,144.462876 C198.567696,147.5406 199.868884,153.814937 196.808433,158.495702 C193.736994,163.174317 187.45434,164.477203 182.775712,161.405783 C178.097084,158.334363 176.794172,152.051714 179.865573,147.373074 Z M70.0986042,117.395532 C70.6372422,108.023406 78.5774579,100.806107 87.958306,101.161866 C97.339154,101.517624 104.709932,109.315577 104.537188,118.701579 C104.366384,127.982121 96.8827467,135.439778 87.6399042,135.616185 L87.3241339,135.61937 L86.3823335,135.61937 C76.9705946,135.069408 69.7592778,127.081417 70.1305043,117.699357 L70.1456942,117.386114 L70.0986042,117.395532 Z M151.408944,117.202463 C151.955093,107.696868 160.103642,100.433801 169.609237,100.979951 C174.170105,101.214078 178.445765,103.270467 181.475922,106.687261 C186.000748,111.753637 187.127667,119.005248 184.35376,125.205865 C181.62768,131.299575 175.633884,135.26109 168.980536,135.399035 L168.629764,135.402756 L167.631456,135.402756 C158.125861,134.856607 150.862795,126.708058 151.408944,117.202463 Z M29.0923881,117.986373 C29.361823,113.241094 33.4261972,109.61219 38.1715698,109.879965 C42.9191941,110.153074 46.5481823,114.220407 46.2804715,118.968339 C46.0077156,123.713428 41.9408026,127.339486 37.1956186,127.068391 C32.4504345,126.797295 28.8229533,122.731651 29.0923881,117.986373 Z M209.710531,117.596831 C209.981626,112.851647 214.04727,109.224166 218.792549,109.493601 C223.537827,109.763036 227.166731,113.82741 226.898957,118.572783 C226.625847,123.320407 222.558514,126.949395 217.810583,126.681684 C213.065494,126.408928 209.439435,122.342015 209.710531,117.596831 Z M5.66874979,113.008334 L5.87723333,113.01616 C7.35350621,113.096269 8.73698893,113.761396 9.72151598,114.864349 C10.706043,115.967302 11.2104321,117.417134 11.1230617,118.892995 C10.9466747,121.960865 8.31748481,124.305359 5.24952544,124.130528 C2.18156608,123.955697 -0.164261196,121.327697 0.00901340529,118.259649 C0.178349947,115.26133 2.69096504,112.951503 5.66874979,113.008334 L5.66874979,113.008334 Z M250.512995,112.433114 L250.745343,112.441662 C253.816883,112.623677 256.1626,115.255766 255.991172,118.327914 C255.861737,120.579298 254.388825,122.531018 252.259271,123.272963 C250.129716,124.014907 247.762915,123.400959 246.262535,121.717408 C244.762155,120.033858 244.42368,117.612264 245.404947,115.581845 C246.352376,113.621441 248.349946,112.398469 250.512995,112.433114 L250.512995,112.433114 Z M107.591679,65.9257464 C114.096531,65.8950343 120.060979,69.5407852 122.999534,75.3441431 C125.706134,80.6905613 125.4431,87.058776 122.304812,92.1637757 C119.166524,97.2687753 113.603,100.378525 107.610515,100.377374 C101.090388,100.398013 95.1211409,96.723788 92.2026601,90.8932681 C89.5274859,85.5523378 89.8069015,79.2073466 92.9412087,74.1222496 C96.0755159,69.0371527 101.618239,65.9363123 107.591679,65.9257464 Z M148.249203,65.8036965 C156.138341,65.8138292 163.013439,71.1792215 164.940145,78.829476 C166.866852,86.4797305 163.353222,94.4615104 156.409969,98.2071528 C149.466717,101.952795 140.86666,100.505927 135.531278,94.6945337 C130.195895,88.8831408 129.487469,80.1910446 133.811403,73.5923943 C137.003027,68.7280051 142.431237,65.7996748 148.249203,65.8036965 Z M59.1737193,78.0565283 C62.2425803,73.3766432 68.5240289,72.0703759 73.2042003,75.1388004 C77.8843716,78.2072248 79.1912249,84.4885515 76.123237,89.1690091 C73.0552491,93.8494667 66.7740443,95.1569059 62.0933006,92.0893546 C59.8429556,90.6175714 58.2705218,88.3110526 57.7228141,85.6785225 C57.1751065,83.0459923 57.6971199,80.303716 59.1737193,78.0565283 Z M183.642063,74.2987446 C186.042017,73.0872241 188.825286,72.8799802 191.378201,73.722707 C193.931115,74.5654339 196.04403,76.3889266 197.251079,78.7911326 C199.768563,83.7896953 197.757252,89.8826546 192.75869,92.4001396 C187.760128,94.9176246 181.667168,92.9063154 179.149682,87.9077542 C176.632195,82.909193 178.643503,76.8162325 183.642063,74.2987446 Z M25.6550422,59.0133237 C27.2281715,56.6137607 30.0922056,55.398554 32.9109346,55.934656 C35.7296636,56.4707579 37.9476181,58.6525224 38.5300156,61.4620511 C39.1124131,64.2715798 37.9444841,67.1552165 35.5711238,68.7676057 C33.1977634,70.3799949 30.086675,70.4033932 27.6893311,68.8268842 C24.420106,66.6770202 23.5097873,62.2855751 25.6550422,59.0133237 Z M220.967214,56.1423844 C224.464389,54.3818896 228.726595,55.7885862 230.488819,59.2848905 C232.251043,62.7811947 230.846453,67.0440962 227.351021,68.8080481 C223.850282,70.5688518 219.584904,69.1611085 217.820001,65.6624347 C216.061235,62.1643897 217.470039,57.9028792 220.967214,56.1423844 Z M117.716034,48.1072748 C118.036791,42.5215376 122.823653,38.252644 128.409535,38.5708768 C133.995416,38.8891096 138.266473,43.6740413 137.950765,49.2600662 C137.635058,54.8460911 132.852057,59.1193105 127.26589,58.8061277 C121.675025,58.487469 117.400185,53.6982991 117.716034,48.1072748 Z M78.7923773,32.4799272 C83.0373218,30.3412046 88.2123199,32.0479425 90.3520732,36.2923676 C92.4918264,40.5367926 90.786345,45.712205 86.5424396,47.8529887 C84.5031244,48.8816951 82.1385708,49.057729 79.9694124,48.3423306 C77.800254,47.6269323 76.0043511,46.0787609 74.9771304,44.038697 C72.8394385,39.7932334 74.5474329,34.6186498 78.7923773,32.4799272 Z M165.747855,35.2422811 C168.35124,31.2594242 173.690005,30.1403483 177.673688,32.7424683 C181.657371,35.3445884 182.778142,40.6829976 180.177287,44.6675069 C177.576432,48.6520162 172.238379,49.7744822 168.253044,47.1748924 C166.335585,45.927148 164.99367,43.9674608 164.523629,41.7285822 C164.053588,39.4897037 164.494088,37.1558078 165.747855,35.2422811 Z M63.9957718,7.41950138 C66.7380653,6.03659604 70.0823244,7.13184089 71.4752833,9.86904138 C72.8682421,12.6062419 71.7852763,15.9544974 69.0532057,17.357491 C67.7278846,18.0352293 66.1868418,18.1558425 64.7722155,17.6925524 C63.3575892,17.2292623 62.1864469,16.2204085 61.5188023,14.8899739 C60.1459691,12.1426243 61.2534783,8.80240673 63.9957718,7.41950138 Z M184.310742,9.0602293 C185.544867,7.17203864 187.795145,6.21352185 190.011747,6.63185823 C192.228349,7.0501946 193.974482,8.76294863 194.435517,10.9710648 C194.896552,13.1791809 193.981641,15.4475376 192.117618,16.7178725 C190.253596,17.9882074 187.807779,18.010194 185.92122,16.7735748 C183.348335,15.0870756 182.627643,11.6353406 184.310742,9.0602293 Z M125.403517,0.399673978 C128.111571,-0.547322934 131.12343,0.230539144 133.034243,2.37043481 C134.945057,4.51033048 135.378383,7.59068604 134.1321,10.1747028 C132.885818,12.7587195 130.205453,14.3373289 127.341234,14.1742056 C123.433098,13.951629 120.444398,10.604622 120.663869,6.69631024 C120.824716,3.83196209 122.695462,1.34667089 125.403517,0.399673978 Z"
                        fill="#006BFE"
                      ></path>
                    </g>
                  </svg>
                </Link>
              </div>

              {/* <!-- Dynamic options --> */}

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <NavBarMenu arrOptions={arrOptions} />
              </div>

              {/* Static Options */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span
                    className="h-6 w-px bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                {/* <!-- Search --> */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </a>
                </div>

                {/* <!-- Cart --> */}
                <div className="ml-4 flow-root lg:ml-6">
                  <ShoppingCart strPortalDivId={strPortalDivId} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export { NavBar };
