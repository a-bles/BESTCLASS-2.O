// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6223IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6223Icon(props: _6223IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 72"}
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
          "M.306 71.202H0V21.373C.306 5.895 16.218.058 16.378 0l.104.287C16.322.344.607 6.115.306 21.376v49.826z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6223Icon;
/* prettier-ignore-end */
