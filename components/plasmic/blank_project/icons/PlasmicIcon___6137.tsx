// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6137IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6137Icon(props: _6137IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 4"}
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
          "M12.806 3.7H.07L0 3.417 6.368 0h.141l6.368 3.418-.07.281zM.665 3.4h11.548L6.438.3.665 3.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6137Icon;
/* prettier-ignore-end */
