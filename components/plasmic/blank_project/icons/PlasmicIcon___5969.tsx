// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5969IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5969Icon(props: _5969IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 19"}
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
          "M2.339 18.07h-.3V2.557l-.408-.695H.963L.545.3H0V0h.78l.417 1.563h.61l.536.913L2.34 18.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5969Icon;
/* prettier-ignore-end */
