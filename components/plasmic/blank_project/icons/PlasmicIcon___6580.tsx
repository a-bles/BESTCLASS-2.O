// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6580IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6580Icon(props: _6580IconProps) {
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
          "M.291 2.332L0 2.33l.013-1.258A1.377 1.377 0 01.498.03L.542 0l.053.004c.435.035.544.534.539.821L1.12 2.082.829 2.08.843.82c0-.005 0-.442-.224-.516a1.138 1.138 0 00-.312.77L.29 2.332z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6580Icon;
/* prettier-ignore-end */
