# LayoutAnimation

`LayoutAnimation` is less configurable and less specific than `Animated`. It applies to whatever component it is triggered in.

You do not control specific values like with `Animated`; `LayoutAnimation` will animate everything that changes on the next rendering. This why you typically configure a layout animation and then call `setState`. 

This is great for when you want a specific animation to apply to all changes of any style property on components, and or you don't know what specific values (aka heights, and widths) a component will become. 

The other benefit is native animations. These animations are not taking place in the JavaScript world of React Native, so that means if there is another `setState` diff that is triggered during the animation you will be mostly unaffected.
