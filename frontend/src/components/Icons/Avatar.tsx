/* eslint-disable no-tabs */
import React, { FC, ReactElement } from 'react';

interface AvatarProps {
  // fill?: '#b8bac0' | '#fff' | '#d7dbe0' | '#5c546a';
  width?: string;
  height?: string;
}

export const Avatar: FC<AvatarProps> = ({ width, height }): ReactElement => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 480 480"
    enableBackground="new 0 0 480 480"
    xmlSpace="preserve"
    width={width}
    height={height}
  >
    <g>
      <g>
        <circle fill="#b8bac0" cx="240" cy="240" r="240" />
      </g>
      <g>
        <g>
          <path
            fill="#fff"
            d="M240,360.07c-27.944,0-53.297-11.991-72.003-31.372c-0.014,11.615-0.436,28.379-3.516,40.611
            c2.02,1.235,3.588,3.262,3.894,5.784c3.992,32.484,34.781,56.977,71.625,56.977c36.836,0,67.625-24.496,71.625-56.977
            c0.31-2.525,1.844-4.549,3.895-5.78c-3.08-12.233-3.503-28.999-3.517-40.615C293.297,348.079,267.944,360.07,240,360.07z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill="#d7dbe0"
            d="M310.44,330.174c-18.549,18.477-43.242,29.896-70.44,29.896
            c-27.944,0-53.297-11.991-72.003-31.372c-0.014,11.615-0.436,28.379-3.516,40.611c2.02,1.235,3.588,3.262,3.894,5.784
            c1.765,14.359,8.778,27.144,19.223,36.954C235.766,405.265,290.437,357.702,310.44,330.174z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill="#fff"
            d="M312,160.07H176c-22.055,0-40,17.945-40,40v48c0,61.758,46.656,112,104,112s104-50.242,104-112
				    v-56C344,174.426,329.648,160.07,312,160.07z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill="#5c546a"
            d="M296,72.07H192c-15.047,0-27.695,10.438-31.102,24.449C133.359,100.02,112,123.598,112,152.07v40
            c0,20.617,8.752,39.851,24,53.52v-45.52c0-22.055,17.945-40,40-40h136c17.648,0,32,14.355,32,32v53.511
            c15.251-13.667,24-32.899,24-53.511v-48C368,104.371,335.703,72.07,296,72.07z"
          />
        </g>
      </g>
      <g>
        <path
          fill="#5c546a"
          d="M61.632,400.544C105.562,449.319,169.191,480,240,480s134.438-30.681,178.368-79.456
          c-7.66-10.356-18.462-18.77-32.352-22.659c-0.32-0.09-0.641-0.16-0.969-0.207l-63.859-9.582c-0.391-0.059-1.227-0.09-1.625-0.09
          c-4.039,0-7.445,3.012-7.938,7.023c-4,32.48-34.789,56.977-71.625,56.977c-36.844,0-67.633-24.492-71.625-56.977
          c-0.5-4.129-4.219-7.234-8.141-7.02c-0.469-0.027-0.93,0.012-1.422,0.086l-63.859,9.582c-0.328,0.047-0.648,0.117-0.969,0.207
          C80.094,381.775,69.292,390.188,61.632,400.544z"
        />
      </g>
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
);

Avatar.defaultProps = {
  // fill: '#fff',
  width: '60',
  height: '60',
};

export default Avatar;
