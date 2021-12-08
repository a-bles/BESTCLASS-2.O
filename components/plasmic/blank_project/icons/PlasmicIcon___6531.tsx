// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6531IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6531Icon(props: _6531IconProps) {
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
        d={"M.085 1.804L0 1.524l.731-.22L1.014 0 1.3.061.98 1.532l-.894.272z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6531Icon;
/* prettier-ignore-end */
