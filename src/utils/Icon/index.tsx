export const DownloadDoubleArrowIcon = ({
  size = 24,
  color = "#FFFFFF",
  className = "",
}) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={`icon ${className}`}
    >
      <polyline
        points="15 18 12 21 9 18"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <polyline
        points="15 13 12 16 9 13"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <line
        x1="12"
        y1="16"
        x2="12"
        y2="7"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        d="M20,7V4a1,1,0,0,0-1-1H5A1,1,0,0,0,4,4V7"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

export const ArrowDownIcon = ({ size = 24, className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={`stroke-current ${className}`}
    >
      <path
        d="M8 12.0001L12 16.0001M12 16.0001L16 12.0001M12 16.0001V6.80006C12 5.40935 12 4.714 11.4495 3.93546C11.0837 3.41818 10.0306 2.77974 9.40278 2.69468C8.45789 2.56666 8.09907 2.75384 7.38143 3.1282C4.18333 4.79649 2 8.14331 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 8.29865 19.989 5.06693 17 3.33788"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LocationIcon = ({
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 64 64"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current ${className}`}
    >
      <path d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
    </svg>
  );
};

export const PhoneIcon = ({ color = "currentColor", className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z"
        fill={color}
      />
    </svg>
  );
};

export const MailIcon = ({ color = "currentColor", className = "" }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={color}
    >
      <path d="M452.29,74.535H59.71C26.728,74.535,0,101.263,0,134.236v243.527c0,32.974,26.728,59.702,59.71,59.702H452.29c32.973,0,59.71-26.728,59.71-59.702V134.236C512,101.263,485.264,74.535,452.29,74.535z M483.49,393.849l-11.366,13.46L312.957,277.407l-24.65,23.454c-18.268,16.776-46.345,16.776-64.614,0l-24.65-23.454L39.876,407.309l-11.366-13.46l149.44-136.517L27.531,115.968l8.893-11.783L256,270.56l219.575-166.375l8.886,11.783l-150.41,141.364L483.49,393.849z" />
    </svg>
  );
};
