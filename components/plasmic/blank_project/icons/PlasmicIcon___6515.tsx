// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6515IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6515Icon(props: _6515IconProps) {
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
          "M.61.179L.266.685l.118.172C.12.905.05.862.032.61.016.42.012.228 0 .016.19.06.454-.126.61.179z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6515Icon;
/* prettier-ignore-end */
