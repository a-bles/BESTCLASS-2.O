// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6619IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6619Icon(props: _6619IconProps) {
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
        d={"M.627.696L.485.663 0 .213.198 0l.424.393.659-.2.084.28-.738.223z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6619Icon;
/* prettier-ignore-end */
