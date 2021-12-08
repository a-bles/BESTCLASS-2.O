// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6581IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6581Icon(props: _6581IconProps) {
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
          "M.292 2.939L0 2.934l.02-1.863A1.375 1.375 0 01.506.03L.55 0l.053.004c.434.035.544.534.539.821l-.02 1.863-.291-.003L.85.82C.85.816.85.38.628.305a1.14 1.14 0 00-.314.77L.292 2.939z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6581Icon;
/* prettier-ignore-end */
