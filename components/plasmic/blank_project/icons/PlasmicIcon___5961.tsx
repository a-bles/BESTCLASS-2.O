// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5961IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5961Icon(props: _5961IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 30"}
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
          "M25.757.324a55.92 55.92 0 00-9.76 5.363C9.647 10.088 1.766 17.807.298 29.58L0 29.542C1.483 17.657 9.429 9.872 15.835 5.437A56.202 56.202 0 0125.757 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5961Icon;
/* prettier-ignore-end */
