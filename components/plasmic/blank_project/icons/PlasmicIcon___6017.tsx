// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6017IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6017Icon(props: _6017IconProps) {
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

      <path
        d={
          "M.37.74a.37.37 0 110-.74.37.37 0 010 .74zm0-.44A.071.071 0 00.3.37c0 .076.141.076.142 0A.071.071 0 00.37.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6017Icon;
/* prettier-ignore-end */
