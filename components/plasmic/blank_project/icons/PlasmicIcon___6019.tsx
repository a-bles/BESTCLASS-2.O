// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6019IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6019Icon(props: _6019IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M1.931 3.164a1.022 1.022 0 00-.39-.358l-.088-.04-.014-1.152a.808.808 0 00-.9-.758l-.135.01L.382.731A.574.574 0 000 .287L.083 0a.885.885 0 01.564.555A1.097 1.097 0 011.737 1.6l.011.977c.174.107.322.25.434.421l-.25.166z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6019Icon;
/* prettier-ignore-end */
