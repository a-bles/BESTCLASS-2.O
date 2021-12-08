// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5925IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5925Icon(props: _5925IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 1"}
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
        d={"M11.901.919H0V0h11.901v.919zM.299.62h11.303V.3H.299v.32z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5925Icon;
/* prettier-ignore-end */
