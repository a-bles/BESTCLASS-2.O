// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6204IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6204Icon(props: _6204IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 57"}
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
          "M.285 56.676L0 56.674.57 3.153l.466-1.049.545-.165.384-1.736L2.63 0l.083.273-.506.154-.384 1.736-.581.176-.388.876-.57 53.461z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6204Icon;
/* prettier-ignore-end */
