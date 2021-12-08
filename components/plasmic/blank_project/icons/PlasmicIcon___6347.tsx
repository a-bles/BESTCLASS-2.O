// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6347IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6347Icon(props: _6347IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.306 2.669H0V.025L.303 0a.621.621 0 00.32.477A.633.633 0 00.943 0l.302.05a.91.91 0 01-.573.735L.626.801.578.785a.757.757 0 01-.27-.153L.307 2.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6347Icon;
/* prettier-ignore-end */
