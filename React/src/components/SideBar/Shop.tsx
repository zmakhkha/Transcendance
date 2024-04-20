import React from "react";

function Shop() {
  let color = "white";
  if (window.location.pathname === "/shop") color = "#1D90F5";
  return (
    <div className="sidebarImgs">
      <svg
        width="60"
        height="60"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.375 15.7402V22.1967C4.375 26.2547 4.375 28.2838 5.65641 29.5445C6.93782 30.8053 9.00021 30.8053 13.125 30.8053H21.875C25.9998 30.8053 28.0621 30.8053 29.3436 29.5445C30.625 28.2838 30.625 26.2547 30.625 22.1967V15.7402"
          stroke={color}
          stroke-width="1.5"
        />
        <path
          d="M10.2085 25.751H16.0418"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M25.952 3.58247L8.96846 3.62409C6.43363 3.49596 5.78371 5.41356 5.78371 6.35096C5.78371 7.18934 5.67367 8.41156 4.1201 10.7087C2.56652 13.0059 2.68326 13.6883 3.55932 15.2786C4.28641 16.5985 6.13576 17.114 7.10003 17.2008C10.1628 17.2692 11.653 14.6703 11.653 12.8439C13.1724 17.4332 17.4934 17.4332 19.4188 16.9084C21.3478 16.3826 23.0004 14.5007 23.3903 12.8439C23.6177 14.9028 24.3077 16.1044 26.3466 16.9299C28.4586 17.7851 30.2748 16.478 31.1861 15.6402C32.0973 14.8024 32.6822 12.9423 31.0576 10.8979C29.9374 9.48803 29.4705 8.15982 29.3171 6.78323C29.2283 5.98559 29.1503 5.12848 28.5791 4.58305C27.7443 3.78596 26.5467 3.54411 25.952 3.58247Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default Shop;
