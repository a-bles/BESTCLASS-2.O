// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6541IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6541Icon(props: _6541IconProps) {
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
        d={"M12.396 0L0 3.758l.085.279L12.48.279l-.085-.28z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6541Icon;
/* prettier-ignore-end */
