// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5946IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5946Icon(props: _5946IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 4"}
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

      <path
        d={
          "M12.81 3.7H.072L0 3.417 6.37 0h.141l6.371 3.418-.072.281zM.667 3.4h11.549L6.442.298.667 3.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5946Icon;
/* prettier-ignore-end */
