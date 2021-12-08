// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6434IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6434Icon(props: _6434IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
          "M.313.023C-.025.639.136 1.319.057 1.969.093 1.314-.083.632.313.023z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.093 1.973l-.071-.007c.01-.175.004-.355 0-.533A2.328 2.328 0 01.285 0l.062.037A2.575 2.575 0 00.12 1.328a5.38 5.38 0 01-.027.645z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6434Icon;
/* prettier-ignore-end */
