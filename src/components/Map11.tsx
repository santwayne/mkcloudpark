import React, { useState } from 'react';

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  // Color theme
  const ACCENT_COLOR = '#173b82'; // Primary blue
  const HOVER_COLOR = '#ffffff'; // White for hover
  const BACKGROUND_DARK = '#0a1628'; // Very dark blue
  const CARD_BACKGROUND = '#0f2847'; // Slightly lighter card background
  const TEXT_COLOR = '#e8edf5'; // Light text

  // Complete State/Province data
  const statesData = {
    // Canadian Provinces
    'BRITISH COLUMBIA': { loads: 729, code: 'BC' },
    'ALBERTA': { loads: 431, code: 'AB' },
    'SASKATCHEWAN': { loads: 499, code: 'SK' },
    'MANITOBA': { loads: 379, code: 'MB' },
    'ONTARIO': { loads: 1236, code: 'ON' },
    'QUEBEC': { loads: 1226, code: 'QC' },
    'NEWFOUNDLAND AND LABRADOR': { loads: 590, code: 'NL' },
    'NOVA SCOTIA': { loads: 457, code: 'NS' },
    'NEW BRUNSWICK': { loads: 619, code: 'NB' },

    // US States
    'MAINE': { loads: 421, code: 'ME' },
    'NEW HAMPSHIRE': { loads: 673, code: 'NH' },
    'VERMONT': { loads: 306, code: 'VT' },
    'MASSACHUSETTS': { loads: 316, code: 'MA' },
    'RHODE ISLAND': { loads: 590, code: 'RI' },
    'CONNECTICUT': { loads: 308, code: 'CT' },
    'NEW YORK': { loads: 1317, code: 'NY' },
    'NEW JERSEY': { loads: 1229, code: 'NJ' },
    'PENNSYLVANIA': { loads: 367, code: 'PA' },
    'DELAWARE': { loads: 372, code: 'DE' },
    'MARYLAND': { loads: 428, code: 'MD' },
    'VIRGINIA': { loads: 317, code: 'VA' },
    'WEST VIRGINIA': { loads: 415, code: 'WV' },
    'NORTH CAROLINA': { loads: 459, code: 'NC' },
    'SOUTH CAROLINA': { loads: 406, code: 'SC' },
    'GEORGIA': { loads: 634, code: 'GA' },
    'FLORIDA': { loads: 638, code: 'FL' },
    'ALABAMA': { loads: 313, code: 'AL' },
    'MISSISSIPPI': { loads: 612, code: 'MS' },
    'LOUISIANA': { loads: 630, code: 'LA' },
    'ARKANSAS': { loads: 374, code: 'AR' },
    'TENNESSEE': { loads: 622, code: 'TN' },
    'KENTUCKY': { loads: 613, code: 'KY' },
    'MISSOURI': { loads: 628, code: 'MO' },
    'ILLINOIS': { loads: 633, code: 'IL' },
    'INDIANA': { loads: 433, code: 'IN' },
    'OHIO': { loads: 615, code: 'OH' },
    'MICHIGAN': { loads: 643, code: 'MI' },
    'WISCONSIN': { loads: 621, code: 'WI' },
    'IOWA': { loads: 555, code: 'IA' },
    'MINNESOTA': { loads: 618, code: 'MN' },
    'NORTH DAKOTA': { loads: 548, code: 'ND' },
    'SOUTH DAKOTA': { loads: 342, code: 'SD' },
    'NEBRASKA': { loads: 366, code: 'NE' },
    'KANSAS': { loads: 364, code: 'KS' },
    'OKLAHOMA': { loads: 623, code: 'OK' },
    'TEXAS': { loads: 616, code: 'TX' },
    'MONTANA': { loads: 316, code: 'MT' },
    'WYOMING': { loads: 307, code: 'WY' },
    'COLORADO': { loads: 437, code: 'CO' },
    'NEW MEXICO': { loads: 504, code: 'NM' },
    'ARIZONA': { loads: 620, code: 'AZ' },
    'UTAH': { loads: 425, code: 'UT' },
    'NEVADA': { loads: 446, code: 'NV' },
    'IDAHO': { loads: 306, code: 'ID' },
    'WASHINGTON': { loads: 467, code: 'WA' },
    'OREGON': { loads: 427, code: 'OR' },
    'CALIFORNIA': { loads: 631, code: 'CA' }
  };

  const handleStateClick = (stateName) => {
    setSelectedState(selectedState === stateName ? null : stateName);
  };

  const displayState = hoveredState || selectedState;

  // SVG path component with hover
  const StatePath = ({ name, d, viewBox }) => {
    const isHovered = hoveredState === name;
    const isSelected = selectedState === name;

    return (
      <svg
        viewBox={viewBox || "0 0 206 389"}
        className="absolute"
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <g>
          <path
            d={d}
            style={{
              fill: isHovered ? HOVER_COLOR : isSelected ? ACCENT_COLOR : 'transparent',
              fillOpacity: isHovered ? 0.4 : isSelected ? 0.3 : 0,
              stroke: isHovered ? HOVER_COLOR : 'rgba(255,255,255,0.3)',
              strokeWidth: isHovered ? 2 : 1,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              pointerEvents: 'auto'
            }}
            onMouseEnter={() => setHoveredState(name)}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(name)}
          />
        </g>
      </svg>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BACKGROUND_DARK, color: TEXT_COLOR }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Map Only */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/63d957ed9a778584aad24d2d/63ffc7db38f07b351844aedf_fullmap.svg"
                alt="Map of service area"
                className="w-full h-auto"
                style={{ filter: 'brightness(0.7)' }}
              />

              {/* Interactive overlays - Use original map SVG structure */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1200 800"
                style={{ pointerEvents: 'none' }}
              >
                {/* BRITISH COLUMBIA - Example with actual paths from your document */}
                <g
                  onMouseEnter={() => setHoveredState('BRITISH COLUMBIA')}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => handleStateClick('BRITISH COLUMBIA')}
                  style={{
                    cursor: 'pointer',
                    pointerEvents: 'auto',
                    fill: hoveredState === 'BRITISH COLUMBIA' ? HOVER_COLOR :
                      selectedState === 'BRITISH COLUMBIA' ? ACCENT_COLOR : 'transparent',
                    fillOpacity: hoveredState === 'BRITISH COLUMBIA' ? 0.4 :
                      selectedState === 'BRITISH COLUMBIA' ? 0.3 : 0,
                    stroke: hoveredState === 'BRITISH COLUMBIA' ? HOVER_COLOR : 'rgba(255,255,255,0.2)',
                    strokeWidth: hoveredState === 'BRITISH COLUMBIA' ? 2 : 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <path d="M55.3269 354.606C49.5194 350.886 40.808 339.543 40.808 335.641C40.808 333.463 40.2636 332.737 38.1765 331.92C35.4542 330.922 33.4578 327.383 32.1874 321.757C31.9152 320.214 30.7355 317.583 29.5559 315.859C28.4669 314.135 26.8336 310.868 25.9261 308.599C25.0187 306.331 22.6594 301.794 20.663 298.345C18.4852 294.625 16.4889 289.997 15.8537 286.549C15.2184 283.463 14.1296 279.562 13.4944 277.928C12.3147 275.115 12.4054 274.843 14.9462 272.756C16.3981 271.576 18.3945 270.487 19.3927 270.487C21.2075 270.487 26.5614 275.66 35.3634 285.823C38.0857 288.999 40.808 292.084 41.2617 292.629C41.8062 293.173 43.6211 295.442 45.3452 297.71C47.0693 299.979 48.7027 301.975 48.9749 302.247C50.2453 303.336 52.5139 311.322 53.1491 316.676C53.6935 321.757 54.3287 323.209 58.2307 328.381C63.4938 335.278 63.9476 336.276 64.7643 343.445C65.1272 346.349 65.9439 350.341 66.6698 352.247C67.305 354.152 67.668 355.967 67.305 356.24C66.0346 357.51 58.3215 356.512 55.3269 354.606Z" />
                  <path d="M199.155 388.816C198.338 388.544 179.645 382.737 165.126 378.199C160.136 376.657 107.142 356.784 85.2725 348.254C81.552 346.802 77.2871 345.169 75.7444 344.624C72.2962 343.354 71.661 342.447 71.661 338.272C71.661 335.913 71.0258 334.37 69.7554 333.281C64.4923 328.926 62.5867 326.748 62.5867 325.024C62.5867 323.935 62.2237 323.118 61.77 323.118C59.5921 323.118 56.4161 318.309 55.8716 314.135C54.9642 307.329 51.9697 301.431 46.6159 295.986C41.8065 291.086 41.8064 290.995 42.2602 286.639C42.7139 283.1 42.5324 282.284 41.4434 282.284C40.7175 282.284 39.9009 281.921 39.7194 281.558C39.5379 281.195 37.4507 279.743 35.0914 278.382C32.7321 277.021 30.7358 275.387 30.7358 274.752C30.7358 274.117 30.4636 272.847 30.2821 271.848C29.7376 269.398 29.7376 267.765 29.8284 258.055C29.9191 249.888 30.0098 249.616 32.7321 247.348C35.2729 245.17 35.4544 244.807 34.4563 242.175C33.9118 240.633 33.4581 237.729 33.4581 235.733C33.4581 233.01 32.5507 230.923 29.8284 226.93C26.7431 222.575 26.2894 221.214 26.6524 218.582C26.9246 216.858 28.0135 214.771 29.0117 213.954C31.0988 212.23 30.9173 210.778 27.7412 204.608C26.1986 201.522 25.9264 199.254 25.9264 189.181C25.9264 177.838 26.0172 177.385 28.2857 175.116C29.5561 173.846 32.7321 172.031 35.4544 171.033C41.9879 168.583 47.1603 163.955 47.1603 160.506C47.1603 156.877 49.1567 152.612 52.5142 148.891C55.055 146.078 55.3272 145.171 55.3272 140.18C55.3272 135.098 55.055 134.372 52.6049 132.195C49.5196 129.381 44.0751 119.128 42.5324 113.229C41.625 109.69 41.8065 107.785 43.9843 98.9825C46.1621 89.9989 46.3436 88.1841 45.4362 83.6469C44.8917 80.8339 44.2566 74.6634 43.8936 69.854C43.6214 65.1353 43.1676 60.4166 42.9861 59.3277C42.8047 58.2388 42.3509 55.7887 42.0787 53.8831C41.8065 51.9775 40.3546 45.2626 38.9027 39.0013C37.4508 32.74 35.9989 26.7509 35.7267 25.662C35.4545 24.3916 34.0026 23.1212 31.9155 22.2138C25.5634 19.5822 24.7467 19.5822 22.9319 22.5767C21.7522 24.5731 19.8466 25.8435 15.7632 27.2954C12.7687 28.3843 8.68522 30.0177 6.68887 31.0158C4.69252 31.9233 3.05913 32.74 2.87764 32.74C2.7869 32.74 3.05911 31.3788 3.42208 29.7455C4.69249 25.2083 3.8758 14.3191 2.06093 11.5968C0.155326 8.78379 0.427577 0.344672 2.42393 0.707645C3.05913 0.889131 12.2242 6.60593 22.8411 13.5024C51.6067 32.2863 83.0039 51.4331 98.2488 59.4185C105.78 63.3205 112.223 66.7687 112.768 67.1317C115.218 68.8558 143.257 83.0117 153.602 87.8211C160.136 90.8156 174.201 96.6232 184.909 100.707C195.616 104.881 204.781 108.511 205.144 108.874C205.507 109.237 205.416 110.507 204.963 111.687C204.418 112.866 199.7 125.933 194.437 140.634C189.173 155.334 183.275 171.668 181.279 176.931C160.317 234.099 155.871 247.075 155.871 251.613C155.871 254.335 155.326 257.148 154.51 258.237C152.513 261.05 153.693 264.952 157.05 267.13C161.315 269.852 166.76 280.015 167.395 286.367C167.758 289.815 168.756 292.901 170.48 295.623C171.932 297.892 173.021 300.069 173.021 300.614C173.021 301.068 174.019 302.519 175.199 303.881C176.379 305.151 177.83 308.146 178.466 310.505C179.101 312.864 180.008 315.042 180.462 315.314C181.642 316.04 185.362 323.844 186.179 327.02C186.542 328.563 189.718 335.641 193.257 342.81C196.977 350.341 199.7 357.056 199.7 358.69C199.7 360.232 198.974 365.314 198.157 370.032C196.524 378.835 196.796 382.555 199.155 386.275C200.789 388.544 200.698 389.27 199.155 388.816Z" />
                </g>




                <g
                  onMouseEnter={() => setHoveredState('STATE NAME')}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => handleStateClick('STATE NAME')}
                  style={{
                    cursor: 'pointer',
                    pointerEvents: 'auto',
                    fill: hoveredState === 'ALBERTA' ? HOVER_COLOR :
                      selectedState === 'ALBERTA' ? ACCENT_COLOR : 'transparent',
                    fillOpacity: hoveredState === 'ALBERTA' ? 0.4 :
                      selectedState === 'ALBERTA' ? 0.3 : 0,
                    stroke: hoveredState === 'ALBERTA' ? HOVER_COLOR : 'rgba(255,255,255,0.2)',
                    strokeWidth: hoveredState === 'ALBERTA' ? 2 : 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <path d="M91.4408 292.03C42.8932 279.236 48.0655 281.141 45.2525 274.698L42.8025 269.254L44.7988 259.181C46.8859 248.564 46.7951 245.933 43.9821 240.397C43.0746 238.492 40.3523 233.229 38.0838 228.692C35.8152 224.154 33.0022 217.802 32.004 214.626C30.9151 211.45 28.9187 207.095 27.4669 204.917C26.015 202.739 24.5631 199.472 24.2001 197.657C23.8372 195.842 22.476 193.029 21.0241 191.396C19.5722 189.763 18.3925 187.948 18.3925 187.494C18.3925 187.04 17.5759 185.316 16.4869 183.864C15.398 182.322 14.2184 178.601 13.7647 175.153C13.2202 171.342 12.1313 167.894 10.6794 165.897C9.4997 164.173 8.04779 161.632 7.59407 160.271C7.04961 158.91 5.23475 156.914 3.51063 155.734C0.334615 153.647 -0.845025 150.38 1.15133 149.11C1.69579 148.838 2.05876 146.297 2.05876 143.484C2.05876 138.584 8.04776 121.433 48.5192 10.1819L52.149 0.109375L72.2033 6.82439C83.274 10.5449 100.061 15.8079 109.499 18.5302C118.936 21.2525 135.724 26.2434 146.613 29.4194C157.593 32.5954 166.758 35.4992 166.758 35.4992C166.758 35.4992 162.605 59.2298 158.046 75.3355C153.488 91.4412 148.428 115.535 141.531 144.21C138.536 156.914 134.998 171.433 133.818 176.423C127.738 201.559 122.384 224.064 119.48 236.314C104.054 300.923 105.415 295.842 104.508 295.66C104.417 295.479 98.428 293.936 91.4408 292.03Z" />
                </g>

                <g
                  onMouseEnter={() => setHoveredState('SASKATCHEWAN')}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => handleStateClick('SASKATCHEWAN')}
                  style={{
                    cursor: 'pointer',
                    pointerEvents: 'auto',
                    fill: hoveredState === 'SASKATCHEWAN' ? HOVER_COLOR :
                      selectedState === 'SASKATCHEWAN' ? ACCENT_COLOR : 'transparent',
                    fillOpacity: hoveredState === 'SASKATCHEWAN' ? 0.4 :
                      selectedState === 'SASKATCHEWAN' ? 0.3 : 0,
                    stroke: hoveredState === 'SASKATCHEWAN' ? HOVER_COLOR : 'rgba(255,255,255,0.2)',
                    strokeWidth: hoveredState === 'SASKATCHEWAN' ? 2 : 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <path d="M128.709 283.832C128.527 283.651 125.079 283.197 121.086 282.834C117.094 282.471 112.829 282.108 111.558 281.927C110.288 281.745 106.658 281.291 103.391 281.019C100.125 280.747 96.4949 280.293 95.2245 280.112C93.9541 279.93 90.3243 279.477 87.0576 279.204C83.7908 278.932 71.1775 276.391 58.9272 273.578C46.6769 270.765 36.0599 268.497 35.334 268.315C31.2505 267.408 28.8912 266.863 23.5373 265.684C20.2706 264.958 16.8223 264.141 15.8242 263.959C14.826 263.778 10.8333 262.871 6.93129 262.054C1.21447 260.783 -0.0558673 260.148 0.307106 258.969C0.760822 257.607 7.83879 228.297 8.47399 225.303C8.65548 224.577 10.0166 218.679 11.65 212.145C13.1926 205.612 15.9149 194.178 17.7298 186.737C19.5446 179.296 22.9929 164.777 25.4429 154.523C27.893 144.269 30.1616 135.104 30.3431 134.106C30.5246 133.108 31.9765 127.209 33.4284 120.948C34.971 114.687 38.0563 101.801 40.3248 92.3641C42.5934 82.836 45.8602 69.406 47.4936 62.4188C49.1269 55.4316 52.0307 43.5443 53.8456 35.9219C53.8456 35.9219 56.0596 26.917 57.203 22.1289C58.3465 17.3407 56.8654 22.5386 60.7421 4.70617C61.5587 1.07644 62.0125 0.16903 63.2829 0.532003C64.6441 0.894976 70.996 2.2561 77.0758 3.34502C78.2555 3.61725 80.0704 3.8895 81.0686 4.16173C84.0631 4.79693 121.722 12.1471 124.172 12.5101C125.442 12.6915 131.34 13.8713 137.329 15.0509C143.318 16.2306 149.852 17.4102 151.848 17.5917C155.387 17.9547 155.478 18.0454 155.296 21.0399C155.206 22.7641 154.117 31.7477 152.846 40.9127C151.576 50.0778 150.215 59.7873 149.943 62.2374C146.748 88.3306 144.774 93.1997 142.774 117.954C142.592 120.676 142.139 126.574 141.867 131.111C141.594 135.649 141.141 141.093 140.959 143.362C140.778 145.63 140.324 151.529 140.052 156.52C139.779 161.51 139.326 167.046 139.144 168.77C138.963 170.494 138.509 176.483 138.237 181.928C137.965 187.372 137.511 192.908 137.329 194.178C137.148 195.448 136.694 201.347 136.422 207.336C136.059 213.325 135.696 218.86 135.514 219.586C135.333 220.312 134.97 226.029 134.607 232.29C134.244 238.551 133.881 244.268 133.7 244.994C133.518 245.72 133.155 251.437 132.792 257.698C132.429 263.96 131.976 269.767 131.794 270.674C131.613 271.582 131.431 274.939 131.34 278.206C131.25 283.56 130.342 285.375 128.709 283.832Z" />
                </g>
                {/* 4. If your state has multiple paths, add more <path> elements inside the <g> */}

              </svg>
            </div>
          </div>

          {/* Right Side - Info Panel */}
          <div className="relative">
            <div className="sticky top-8">

              <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight" style={{ color: TEXT_COLOR }}>
                Map of<br />Service Area
              </h2>

              {/* Bottom Bar Info */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: displayState ? HOVER_COLOR : 'transparent',
                        border: `2px solid ${displayState ? HOVER_COLOR : 'rgba(255,255,255,0.3)'}`
                      }}
                    />
                    <p className="text-base font-medium" style={{ color: TEXT_COLOR }}>
                      {displayState || 'Select a State'}
                    </p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold" style={{ color: TEXT_COLOR }}>
                  Number of loads delivered
                </h4>
              </div>

              {/* Loads Display */}
              {displayState && statesData[displayState] ? (
                <div className="mb-12">
                  <div
                    className="text-7xl font-bold mb-4"
                    style={{ color: HOVER_COLOR }}
                  >
                    {statesData[displayState].loads.toLocaleString()}
                  </div>
                  <p className="text-lg opacity-70" style={{ color: TEXT_COLOR }}>
                    loads delivered to {displayState}
                  </p>
                </div>
              ) : (
                <div className="mb-12">
                  <p className="text-2xl opacity-50" style={{ color: TEXT_COLOR }}>
                    Hover over a state to see load data
                  </p>
                </div>
              )}

              {/* Request Quote Button */}
              <a
                href="/request-a-quote"
                className="inline-block text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: ACCENT_COLOR,
                  border: `2px solid ${ACCENT_COLOR}`
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = HOVER_COLOR;
                  e.target.style.color = ACCENT_COLOR;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = ACCENT_COLOR;
                  e.target.style.color = 'white';
                }}
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;