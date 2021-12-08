// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6259IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6259Icon(props: _6259IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.286 2.875L0 2.872l.02-1.823A1.344 1.344 0 01.495.029L.537 0l.052.004c.426.034.532.522.529.802l-.02 1.823-.286-.003.02-1.823c0-.005 0-.433-.218-.505a1.126 1.126 0 00-.306.754L.286 2.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6259Icon;
/* prettier-ignore-end */
