// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6523IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6523Icon(props: _6523IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M.891 1.918L.534.37l-.45.136L0 .227.747 0l.357 1.547.686-.207.085.279-.984.299z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6523Icon;
/* prettier-ignore-end */
