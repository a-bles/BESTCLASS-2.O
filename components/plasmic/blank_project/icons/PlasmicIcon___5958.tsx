// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5958IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5958Icon(props: _5958IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 1"}
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
        d={"M5.89.759H0V.46h5.793L6.43 0l.175.242-.716.517z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5958Icon;
/* prettier-ignore-end */
