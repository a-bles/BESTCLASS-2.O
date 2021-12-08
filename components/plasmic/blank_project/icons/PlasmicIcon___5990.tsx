// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5990IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5990Icon(props: _5990IconProps) {
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
          "M1.218 2.661h-.3V.908C.918.902.914.457.608.316.301.457.3.902.3.907v1.754H0V.908A.95.95 0 01.562.014L.608 0l.046.014a.95.95 0 01.563.895v1.752z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5990Icon;
/* prettier-ignore-end */
