// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6192IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6192Icon(props: _6192IconProps) {
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
          "M2.26.126S1.04.266.055 2.361h.058S1.105.469 2.334.174L2.92.096a.773.773 0 00-.659.03z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.113 2.394H0l.024-.05C.98.308 2.144.106 2.249.092a.8.8 0 01.686-.028l.099.052L2.34.21C1.138.496.154 2.358.144 2.377l-.01.019-.02-.002zM2.225.168C2.023.212 1.074.498.241 2.07.555 1.548 1.31.451 2.225.17zm.407-.095a.807.807 0 00-.336.075L2.327.14l.427-.058a.8.8 0 00-.122-.007V.073z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6192Icon;
/* prettier-ignore-end */
