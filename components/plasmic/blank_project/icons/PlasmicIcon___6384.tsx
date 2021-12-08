// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6384IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6384Icon(props: _6384IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 25"}
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
          "M2.546 24.857H2.24V3.597L0 1.194V0h.306v1.073L2.544 3.48l.002 21.378z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6384Icon;
/* prettier-ignore-end */
