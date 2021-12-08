// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6094IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6094Icon(props: _6094IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.07 2.02c.034-.672-.175-1.379.273-2-.333.638-.16 1.336-.273 2z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.104 2.026l-.069-.008c.01-.18 0-.365-.007-.546C-.054.962.048.442.315 0l.059.036a2.71 2.71 0 00-.22 1.26c.001.244-.015.488-.05.73zM.116.662a2.633 2.633 0 00-.03.47C.088.975.098.818.116.662z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6094Icon;
/* prettier-ignore-end */
