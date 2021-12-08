// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6330IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6330Icon(props: _6330IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
          "M.305 5.788H0V.025L.303 0a.616.616 0 00.32.477A.632.632 0 00.943 0l.301.05a.91.91 0 01-.57.735L.625.801.578.785a.77.77 0 01-.27-.153L.306 5.788z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6330Icon;
/* prettier-ignore-end */
