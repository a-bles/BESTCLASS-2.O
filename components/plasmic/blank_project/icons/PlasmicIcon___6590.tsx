// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6590IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6590Icon(props: _6590IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M.592.936L.54.932C.251.908.049.669 0 .292l.288-.04c.015.103.063.33.226.38C.688.464.799.241.828 0l.288.042a1.28 1.28 0 01-.48.865l-.044.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6590Icon;
/* prettier-ignore-end */
