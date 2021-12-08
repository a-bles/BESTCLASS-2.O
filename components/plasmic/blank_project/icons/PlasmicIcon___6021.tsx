// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6021IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6021Icon(props: _6021IconProps) {
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
          "M.24 3.109L0 2.929c.104-.14.234-.259.384-.35l.01-.968A1.097 1.097 0 011.486.556.882.882 0 012.05 0l.083.287L2.09.144l.042.143a.574.574 0 00-.382.445l-.023.133-.134-.008a.806.806 0 00-.9.766L.68 2.767l-.09.038a.995.995 0 00-.35.304z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6021Icon;
/* prettier-ignore-end */
