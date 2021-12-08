// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _601IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _601Icon(props: _601IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 16"}
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
          "M7.874 15.728a.864.864 0 01-.618-.256l-7-7a.875.875 0 010-1.237l7-7a.875.875 0 011.237 1.237L2.11 7.853l6.382 6.382a.875.875 0 01-.619 1.493z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.874 15.728a.864.864 0 01-.618-.256l-7-7a.875.875 0 010-1.237l7-7a.875.875 0 011.237 1.237L2.11 7.853l6.382 6.382a.875.875 0 01-.619 1.493z"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>

      <path
        d={
          "M7.874 15.728a.864.864 0 01-.618-.256l-7-7a.875.875 0 010-1.237l7-7a.875.875 0 011.237 1.237L2.11 7.853l6.382 6.382a.875.875 0 01-.619 1.493z"
        }
        fill={"currentColor"}
        fillOpacity={".2"}
      ></path>
    </svg>
  );
}

export default _601Icon;
/* prettier-ignore-end */
