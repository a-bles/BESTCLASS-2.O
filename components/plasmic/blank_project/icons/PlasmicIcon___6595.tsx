// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6595IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6595Icon(props: _6595IconProps) {
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
          "M.292 2.384L0 2.381l.014-1.31A1.374 1.374 0 01.5.03L.543 0l.053.004c.434.035.542.534.539.82l-.01.878-.29-.003.008-.88c0-.004 0-.44-.222-.515a1.14 1.14 0 00-.314.77l-.015 1.31z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6595Icon;
/* prettier-ignore-end */
