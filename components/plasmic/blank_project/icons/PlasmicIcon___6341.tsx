// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6341IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6341Icon(props: _6341IconProps) {
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
          "M1.244 2.72H.938V.927C.938.922.934.467.621.323.308.467.306.923.306.927v1.792H0V.928A.97.97 0 01.575.014L.62 0l.047.014a.97.97 0 01.576.915v1.79z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6341Icon;
/* prettier-ignore-end */
