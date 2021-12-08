// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6598IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6598Icon(props: _6598IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.293.775a.281.281 0 01-.17-.056A.326.326 0 010 .446.462.462 0 01.305.014a.293.293 0 01.26.042A.33.33 0 01.69.33a.463.463 0 01-.304.432.333.333 0 01-.092.014zM.39.288a.193.193 0 00-.097.16A.069.069 0 00.3.487a.198.198 0 00.097-.16A.073.073 0 00.39.288z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6598Icon;
/* prettier-ignore-end */
