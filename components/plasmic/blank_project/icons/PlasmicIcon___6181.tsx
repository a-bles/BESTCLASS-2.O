// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6181IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6181Icon(props: _6181IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 2"}
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
        d={"M6.813 1.457H0v-.305h6.51V.305H0V0h6.813v1.457z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6181Icon;
/* prettier-ignore-end */
