// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6131IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6131Icon(props: _6131IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 4"}
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
          "M13.09 3.78H.073L0 3.493 6.51 0h.144l6.51 3.493-.074.287zM.682 3.474h11.8L6.584.304.682 3.475z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6131Icon;
/* prettier-ignore-end */
