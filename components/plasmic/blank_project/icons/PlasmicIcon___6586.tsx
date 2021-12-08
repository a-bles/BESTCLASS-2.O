// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6586IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6586Icon(props: _6586IconProps) {
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
          "M1.088 2.772l-.291-.004L.819.741a.966.966 0 01-.185.165L.59.936.54.932C.252.908.05.669 0 .292l.289-.04c.014.102.062.33.226.38C.689.464.799.24.827 0l.291.022-.03 2.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6586Icon;
/* prettier-ignore-end */
