// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6491IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6491Icon(props: _6491IconProps) {
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
        d={"M.402.054a.486.486 0 00-.308.722.609.609 0 01.303-.727l.005.005z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.063.792A.593.593 0 01.055.277a.48.48 0 01.32-.252L.382.02.41 0l.053.073-.05.016H.407a.56.56 0 00-.273.674l-.07.029z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6491Icon;
/* prettier-ignore-end */
