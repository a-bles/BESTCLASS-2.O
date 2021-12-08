// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5968IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5968Icon(props: _5968IconProps) {
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
          "M.3 18.07H0V2.476l.537-.913h.61L1.56 0h.78v.299h-.55l-.417 1.563H.706l-.41.695L.3 18.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5968Icon;
/* prettier-ignore-end */
