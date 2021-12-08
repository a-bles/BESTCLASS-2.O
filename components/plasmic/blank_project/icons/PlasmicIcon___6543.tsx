// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6543IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6543Icon(props: _6543IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 5"}
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
        d={"M12.476 0L0 3.786l.085.279L12.56.279 12.476 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6543Icon;
/* prettier-ignore-end */
