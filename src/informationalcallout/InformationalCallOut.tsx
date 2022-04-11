/* -----------------------------------------------------------------------
 * <copyright company="Microsoft Corporation">
 *   Copyright (c) Microsoft Corporation.  All rights reserved.
 * </copyright>
 * ----------------------------------------------------------------------- */

import {
  ICalloutProps,
  IIconProps,
  IconButton,
  TooltipHost,
} from "@fluentui/react";

import React from "react";
import { useId } from "@uifabric/react-hooks";

export type ICallOutPropsConfig = {
  iconClassName: string;
  iconName: string;
  iconFontSize?: number;
  toolTipId: string;
  callOutDescription: string;
  callOutConfig?: ICalloutProps;
};

export const InformationalCallOutComponent: React.FunctionComponent<ICallOutPropsConfig> = (
  props
) => {
  const toolTipId = useId(props.toolTipId);
  const iconPropsObject: IIconProps = {
    iconName: props.iconName,
    styles: {
      root: {
        fontSize: props.iconFontSize,
        position: "relative",
      },
    },
  };

  return (
    <>
      <TooltipHost
        content={props.callOutDescription}
        calloutProps={props.callOutConfig}
        id={toolTipId}
      >
        <IconButton
          className={props.iconClassName}
          iconProps={iconPropsObject}
          aria-describedby={toolTipId}
          ariaDescription={props.callOutDescription}
        ></IconButton>
      </TooltipHost>
    </>
  );
};
