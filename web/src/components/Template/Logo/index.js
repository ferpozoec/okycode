import React from 'react'
import { Link } from 'gatsby'
import { Svg } from './styles'

export const Logo = props => {
  return (
    <Link to={props.path}>
         <Svg
      viewBox="0 0 4098 676"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <g fill="#fff" fillRule="nonzero">
        <path d="M1496.75 291.905c0-144.183-120.267-261.716-266.5-261.716-144.867 0-267.184 118.216-267.184 258.3 0 146.916 118.9 264.45 267.184 264.45 146.233 0 266.5-118.217 266.5-261.034zm-51.25.684c0 116.85-97.717 213.883-215.25 213.883-118.9 0-215.934-97.033-215.934-216.617 0-115.483 99.084-213.2 215.934-213.2 117.533 0 215.25 97.717 215.25 215.934zM1866.43 544.055l-155.117-185.866 145.55-187.917h-62.183l-174.25 226.867V39.072h-50.567v504.983h50.567v-77.216l58.767-72.434 124.366 149.65h62.867zM2229.96 170.272h-53.983L2049.56 468.205l-118.216-297.933h-55.35l144.866 361.483-60.816 143.5h53.983l215.933-504.983zM2780.11 403.289h-110.016c-41 43.05-76.534 59.45-125.05 59.45-92.934 0-169.467-77.9-169.467-172.2 0-94.984 71.067-170.15 167.417-170.15 58.766 0 98.4 19.133 132.566 63.55h104.55c-44.416-97.717-135.3-153.75-239.166-153.75-142.817 0-259.667 116.85-259.667 259.666 0 145.55 118.217 263.084 265.817 263.084 103.183 0 193.383-57.4 233.016-149.65zM3216.76 357.505c0-112.75-88.15-200.9-202.266-200.9-110.017 0-200.217 89.517-200.217 198.167 0 109.333 90.2 198.167 200.9 198.167 110.017 0 201.583-88.834 201.583-195.434zm-91.566-2.733c0 63.55-49.2 114.8-109.334 114.8-61.5 0-110.016-51.25-110.016-116.167 0-62.183 49.883-113.433 109.333-113.433 60.817 0 110.017 51.933 110.017 114.8zM3650 544.055V39.072h-90.884v159.9c-26.65-29.383-70.383-47.15-118.216-47.15-105.917 0-189.284 88.833-189.284 202.267 0 112.066 82.684 198.85 189.967 198.85 51.25 0 88.833-17.084 125.05-58.084v49.2H3650zm-84.05-191.333c0 65.6-48.517 116.85-110.017 116.85-63.55 0-112.75-52.617-112.75-119.583 0-64.234 48.517-114.8 110.7-114.8 63.55 0 112.067 51.25 112.067 117.533zM4097.58 360.239c0-117.534-82.683-203.634-195.433-203.634-111.384 0-199.534 88.15-199.534 199.534 0 110.7 89.517 196.8 205 196.8 76.534 0 155.117-43.05 180.4-120.95h-99.083c-23.233 27.333-45.783 37.583-83.367 37.583-53.983 0-93.616-28.7-104.55-74.483h293.15c2.734-12.984 3.417-21.184 3.417-34.85zm-89.517-45.1H3798.28c14.35-48.517 51.25-75.167 105.233-75.167 56.034 0 92.934 26.65 104.55 75.167z" />
      </g>
      <path
        d="M690.35 335.005L56.049 154.752 0 351.987 634.301 532.24l56.049-197.235z"
        fill="#41a330"
      />
      <g fill="#fff">
        <path d="M349.79 336.416L54.494 153.239 262.737 0l87.053 336.416z" />
        <path d="M349.517 335.975l291.15 189.698-211.599 148.571-79.551-338.269z" />
      </g>
    </Svg>
    </Link>
  )
}

export default Logo
