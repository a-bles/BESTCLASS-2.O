// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6340IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6340Icon(props: _6340IconProps) {
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
          "M1.244 2.72H.938V.927C.938.922.934.467.623.323.31.467.306.923.306.927v1.792H0V.928A.972.972 0 01.576.014L.623 0l.048.014a.971.971 0 01.573.915v1.79z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6340Icon;
/* prettier-ignore-end */
