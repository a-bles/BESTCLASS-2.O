// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6339IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6339Icon(props: _6339IconProps) {
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
          "M1.245 2.138H.939V.928C.939.924.934.468.623.324.31.467.306.924.306.928v1.21H0V.928A.97.97 0 01.576.015L.623 0l.048.015a.97.97 0 01.574.913v1.21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6339Icon;
/* prettier-ignore-end */
