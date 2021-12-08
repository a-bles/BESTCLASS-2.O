// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5964IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5964Icon(props: _5964IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 2"}
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
          "M3.12 1.748A23.925 23.925 0 000 .281L.101 0C1.19.42 2.247.916 3.264 1.487l-.143.261z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5964Icon;
/* prettier-ignore-end */
