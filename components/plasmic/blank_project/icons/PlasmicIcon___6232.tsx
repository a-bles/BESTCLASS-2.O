// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6232IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6232Icon(props: _6232IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M2.146 3.939L0 1.842l.2-.204 1.667 1.63L1.902 0l.285.003-.041 3.936z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6232Icon;
/* prettier-ignore-end */
