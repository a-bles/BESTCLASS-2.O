// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6203IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6203Icon(props: _6203IconProps) {
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
          "M1.919 18.411l-.286-.002.172-16.136-.332-.578-.6.182L.522.363l-.44.133L0 .223.731 0l.348 1.514.527-.156.485.841v.039L1.919 18.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6203Icon;
/* prettier-ignore-end */
