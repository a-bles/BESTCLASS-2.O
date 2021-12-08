// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6292IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6292Icon(props: _6292IconProps) {
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
          "M.306 18.465H0V2.53l.549-.932h.623L1.595 0h.797v.305H1.83l-.427 1.598H.72l-.418.71.003 15.852z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6292Icon;
/* prettier-ignore-end */
