// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6369IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6369Icon(props: _6369IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 9"}
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
          "M.309 8.784H.003V4.02a1.528 1.528 0 01.706-1.385l.01-.988A1.124 1.124 0 011.835.568.902.902 0 012.41 0l.084.293a.587.587 0 00-.39.456l-.023.135-.138-.009a.839.839 0 00-.92.784L1.01 2.828l-.092.04a1.196 1.196 0 00-.611 1.151v4.765z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6369Icon;
/* prettier-ignore-end */
