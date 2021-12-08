// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6125IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6125Icon(props: _6125IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M.775.127s1.22.14 2.205 2.235h-.059S1.932.47.7.175L.115.097a.772.772 0 01.66.03z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.033 2.395H2.9l-.01-.018C2.88 2.357 1.891.497.69.208L0 .116.098.064a.803.803 0 01.686.028C.89.106 2.053.31 3.01 2.344l.024.05zM.805.168C1.722.45 2.478 1.549 2.794 2.07 1.955.487.997.209.804.168zM.283.083L.705.14l.036.01a.799.799 0 00-.46-.068l.002.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6125Icon;
/* prettier-ignore-end */
