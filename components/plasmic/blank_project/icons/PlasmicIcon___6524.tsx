// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6524IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6524Icon(props: _6524IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 20"}
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
          "M.292 19.784L0 19.781.189 3.195.652 2.15l.557-.17.392-1.774L2.282 0l.085.28-.517.156-.393 1.774-.593.18-.395.895-.177 16.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6524Icon;
/* prettier-ignore-end */
