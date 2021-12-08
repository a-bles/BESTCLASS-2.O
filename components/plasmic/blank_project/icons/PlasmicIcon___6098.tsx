// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6098IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6098Icon(props: _6098IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={"M.06.05a.476.476 0 01.3.707.596.596 0 00-.297-.71L.06.05z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.392.773L.327.747A.55.55 0 00.06.087H.052L0 .077.052 0 .08.02l.007.005a.47.47 0 01.31.246.58.58 0 01-.005.502z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6098Icon;
/* prettier-ignore-end */
