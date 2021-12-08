// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6464IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6464Icon(props: _6464IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 4"}
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
          "M13.086 3.78H.072L0 3.493 6.507 0h.144l6.507 3.493-.072.287zM.68 3.474h11.8L6.579.307l-5.9 3.167z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6464Icon;
/* prettier-ignore-end */
