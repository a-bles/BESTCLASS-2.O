// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6527IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6527Icon(props: _6527IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
        d={"M.084 1.756L0 1.476l.571-.172L.853 0l.285.062-.32 1.47-.734.224z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6527Icon;
/* prettier-ignore-end */
