// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6442IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6442Icon(props: _6442IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M.035.035h.31l-.01.22h-.3v-.22z"} fill={"currentColor"}></path>

      <path
        d={
          "M.37.291H0V0h.383v.038C.378.105.376.165.373.23L.37.291zM.071.221H.3C.3.168.305.122.307.07H.072v.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6442Icon;
/* prettier-ignore-end */
