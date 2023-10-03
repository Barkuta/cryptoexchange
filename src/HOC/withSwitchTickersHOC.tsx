import React, { ComponentType } from "react";

interface IntrinsicAttributes {
  price: number;
  count: number;
  switcher: boolean;
  switchFn: () => any;
}

export function WithSwitchTickersHOC<WP extends IntrinsicAttributes>(
  WrappedComponent: ComponentType<WP>
) {
  return (props: WP) => {
    let switchFn: () => any = () => {
      if (props.switcher) {
        let res = Math.abs(props.count / props.price);
        return res.toFixed(6);
      } else {
        return Math.abs(props.count * props.price);
      }
    };
    return <WrappedComponent {...props} switchFn={switchFn} />;
  };
}
