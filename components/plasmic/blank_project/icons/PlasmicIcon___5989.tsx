// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5989IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5989Icon(props: _5989IconProps) {
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
          "M1.218 2.661h-.3V.908C.918.902.914.457.61.316.302.457.3.902.3.907v1.754H0V.908A.951.951 0 01.563.014L.61 0l.046.014a.95.95 0 01.562.895v1.752z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5989Icon;
/* prettier-ignore-end */
