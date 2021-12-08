// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6327IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6327Icon(props: _6327IconProps) {
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
          "M1.244 2.137H.938V.927C.938.923.934.467.623.323.308.467.306.923.306.927v1.21H0V.928A.968.968 0 01.575.017L.622 0l.046.016a.97.97 0 01.576.913v1.208z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6327Icon;
/* prettier-ignore-end */
