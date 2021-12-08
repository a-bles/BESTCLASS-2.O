// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6603IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6603Icon(props: _6603IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 2"}
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
          "M.964 1.237l-.903-.201L0 .78.912.03 1.038 0l.904.2.06.256-.913.752-.125.029zM.416.817l.542.12.627-.517L1.043.3.416.816z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6603Icon;
/* prettier-ignore-end */
