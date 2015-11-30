# Animated

Unlike `LayoutAnimation` then `Animated` library is extremely configurable and can target very specific components. However it currently runs on the `JavaScript` side, and utilizes `requestAnimationFrame` to animate the values and `setNativeProps` in order to send specific values back to the native world.

This can have some down falls. Most notably because it's running in the JavaScript world, in the event you have a `setState` that triggers a diff and thus may take sometime you can see your animations stutter.