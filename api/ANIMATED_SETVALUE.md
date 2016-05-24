# setValue

`setValue` is a function exposed on the `new Animated.Value()` instance. It allows for external code to control the internal value of the instance without triggering animations of intermediary states.

For example:

```
this._animatedValue = new Animated.Value(0);

<Animated.View style={{left: this._animatedValue}} />

this._animatedValue.setValue(150);

```

The `Animated.View` will immediately jump from position left `0` to positoin left `150` and will not iterate nicely from `0` to `150`. You must use other `Animated` functions to do so, which we'll cover later.

Something to note is that if `interpolate` is called to set up such things, this will cause the correct value to be interpolated but not animated.

For Example:

```
this._animatedValue = new Animated.Value(0);

var _backgroundColor = this._animatedValue.interpolate({
	inputRange: [0, 150],
	outputRange: ['rgba(255,255,255,1)', 'rgba(0,0,0,1)']
});

<Animated.View style={{left: this._animatedValue, backgroundColor: _backgroundColor}} />

this._animatedValue.setValue(150);

```

This will cause the `backgroundColor` of the `Animated.View` to immediately jump from white to black. Other `Animated` functions would transition from white to shades of gray and eventually black.
