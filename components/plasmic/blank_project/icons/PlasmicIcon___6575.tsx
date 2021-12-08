// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6575IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6575Icon(props: _6575IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 5"}
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
          "M1.116 4.396H.824L.863.82c0-.005 0-.443-.223-.517a1.148 1.148 0 00-.313.77L.292 4.391 0 4.387.036 1.07A1.376 1.376 0 01.521.03L.565 0l.05.003c.434.035.543.534.54.82l-.04 3.573z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6575Icon;
/* prettier-ignore-end */
