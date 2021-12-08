// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6126IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6126Icon(props: _6126IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 25"}
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
          "M.056 0c6.906 3.46 17.71 10.914 19.7 24.258l-.295.044C17.496 11.132 6.85 3.752 0 .303"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6126Icon;
/* prettier-ignore-end */
