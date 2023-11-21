import * as React from "react";
import { IComboBoxOption, IComboBoxStyles, VirtualizedComboBox } from "@fluentui/react";
import { useSetTimeout } from "@fluentui/react-hooks";

const options: IComboBoxOption[] = [];
for (let i = 0; i < 1000; i++) {
  options.push({
    key: `${i}`,
    text: `Option ${i}`,
  });
}
const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: "300px" } };

const isAndroid = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.indexOf("android") > -1;
};

export const ComboBoxVirtualizedExample: React.FunctionComponent = () => {
  const { clearTimeout, setTimeout } = useSetTimeout();

  const overrideScrollDismiss = React.useRef(false);
  const scrollDismissTimeout = React.useRef(0);
  const preventDismissOnScrollOrResize = (ev: any) => {
    if (overrideScrollDismiss.current && (ev.type === "scroll" || ev.type === "resize")) {
      return true;
    }

    return false;
  };
  const onComboOpen = () => {
    if (isAndroid()) {
      overrideScrollDismiss.current = true;

      clearTimeout(scrollDismissTimeout.current ? scrollDismissTimeout.current : 0);
      scrollDismissTimeout.current = setTimeout(() => {
        overrideScrollDismiss.current = false;
      }, 10000);
    }
  };
  return (
    <VirtualizedComboBox
      defaultSelectedKey="547"
      label="Scaled/virtualized example with 1000 items"
      allowFreeform
      autoComplete="on"
      options={options}
      dropdownMaxWidth={200}
      useComboBoxAsMenuWidth
      styles={comboBoxStyles}
      onMenuOpen={onComboOpen}
      calloutProps={{ preventDismissOnEvent: preventDismissOnScrollOrResize }}
    />
  );
};
