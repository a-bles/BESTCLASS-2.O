// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6529IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6529Icon(props: _6529IconProps) {
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
        d={"M.085 1.804L0 1.525l.731-.221L1.014 0l.284.062-.32 1.471-.893.271z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6529Icon;
/* prettier-ignore-end */
