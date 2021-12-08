// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6565IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6565Icon(props: _6565IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 2"}
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
          "M.085 1.082L0 .803l2.636-.8L2.71 0 4.1.31l-.063.284L2.684.293l-2.599.79z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6565Icon;
/* prettier-ignore-end */
