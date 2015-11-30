# interpolate

The `interpolate` function allows animated values to be derived from other animated values.

Additionally you can `interpolate` from other `interpolate` values.

Like so 

```

this._animatedValue = new Animated.ValueXY();

this._opacityAnimation = this._animatedValue.x.interpolate({
	inputRange: [0, 150],
	outputRange: [1, .2],
	extrapolate: 'clamp'
});


this._bgColorAnimation = this._opacityAnimation.interpolate({
	inputRange: [.2, 1],
	outputRange: ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']
})
```

What this is doing is taking an animated position, as the `x` changes we are interpolating the opacity. Then as the opacity is interpolated the background color is interpolated from white to black.

The reason we have to specify the `inputRange` as `[.2,1]` instead of `[1,.2]` is because the `inputRange` cannot descend, it must always ascend in value. That doesn't mean you always have to start at 0, you can start at any value, and even negative values.

The `outputRange` however can be anything as long as you provide the same number of values.

## Flipping/Inverse values

For various reasons you may want to flip the values around. Maybe as someone swipes right you want things to move left? Who knows. All we have to do is provide opposite values from the `inputRange` in the `outputRange`.

Example

```
this._animatedValue = new Animated.ValueXY();

this._reverseAnimatedValue = this._animatedValue.x.interpolate({
	inputRange: [0, 150],
	outputRange: [150, 0],
	extrapolate: 'clamp'
});

```


## More Interpolation

Because interpolation is so important there is an entire section dedicated to it here. [Interpolation](INTERPOLATION.md)