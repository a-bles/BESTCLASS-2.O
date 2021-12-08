// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6571IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6571Icon(props: _6571IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 7"}
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
          "M1.054 6.016H.762L.819.741a.976.976 0 01-.185.166L.591.936.54.932C.252.908.05.669 0 .292l.289-.04c.014.103.063.33.226.38C.689.464.799.241.827 0l.291.022-.064 5.994z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6571Icon;
/* prettier-ignore-end */
