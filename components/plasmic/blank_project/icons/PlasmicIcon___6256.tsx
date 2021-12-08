// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6256IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6256Icon(props: _6256IconProps) {
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
          "M2.392 18.465h-.306V2.613l-.418-.71H.986L.562.305H0V0h.796l.427 1.598h.623l.548.932-.002 15.935z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6256Icon;
/* prettier-ignore-end */
