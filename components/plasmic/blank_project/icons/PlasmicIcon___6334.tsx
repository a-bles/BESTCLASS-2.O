// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6334IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6334Icon(props: _6334IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 5"}
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
          "M.306 4.367H0V.929A.97.97 0 01.576.016L.623 0 .67.016a.97.97 0 01.575.914v3.187H.938V.929C.938.924.934.468.623.324.308.469.306.924.306.928v3.439z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6334Icon;
/* prettier-ignore-end */
