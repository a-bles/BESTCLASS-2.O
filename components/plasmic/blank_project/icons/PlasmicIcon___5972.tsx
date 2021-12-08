// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5972IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5972Icon(props: _5972IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 2"}
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
        d={"M12.801 1.203H0V0h.306v.898h12.19V0h.305v1.203z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5972Icon;
/* prettier-ignore-end */
