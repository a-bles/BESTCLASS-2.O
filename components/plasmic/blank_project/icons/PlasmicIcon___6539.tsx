// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6539IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6539Icon(props: _6539IconProps) {
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
          "M.186 1.72L0 1.497 1.174.529.074.284.139 0l1.39.309.062.255L.186 1.721z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6539Icon;
/* prettier-ignore-end */
