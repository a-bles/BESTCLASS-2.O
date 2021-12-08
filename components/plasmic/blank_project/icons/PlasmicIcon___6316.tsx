// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6316IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6316Icon(props: _6316IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 21"}
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
          "M.184 20.943L0 20.804.213.867l.1-.136L2.723 0l.184.138-.213 19.938-.1.136-2.41.73zM.497.973l-.209 19.64 2.121-.643L2.62.33.496.975z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6316Icon;
/* prettier-ignore-end */
