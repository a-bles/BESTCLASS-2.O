// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6569IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6569Icon(props: _6569IconProps) {
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
          "M.292 2.332L0 2.33l.013-1.258A1.375 1.375 0 01.499.03L.542 0l.053.004c.435.035.544.534.54.821l-.014 1.257-.292-.003L.842.82c0-.005 0-.443-.222-.516a1.15 1.15 0 00-.314.77L.292 2.332z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6569Icon;
/* prettier-ignore-end */
