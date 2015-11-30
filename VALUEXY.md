# Animated.ValueXY

Creating a `new Animated.ValueXY({x: 0, y: 0})` is almost exactly the same as `Animated.Value` with a few exceptions. The `ValueXY` are often used to help with position of components and or when you're dealing with gestures.

A few additional helper methods are added that make it easy to pass appropriate animated values to `left/top`, as well as `translateX/transalteY`. There are other helpers to help dealing with gestures and such so there is no jump when users press down first (that's solved with setOffset).

`Animated.ValueXY()` is an instance that adds those additional helper methods, but also exposes `.x` and `.y`. The `.x` and `.y` are merely `new Animated.Value()` instances.

You'd do just the same to create them as you would `new Animated.Value()`


```
getInitialState: function() {
	return {
		someAnimatedValue: new Animate.ValueXY()
	}
}

constructor(props) {
	super(props)
	this.state = {
		someAnimatedValue: new Animate.ValueXY()
	}
}

componentWillMount: function() {
	this._someAnimatedValue = new Animated.ValueXY()
}

```

They default to `{x: 0, y:0}`, however if you want to change the default values you can pass in an object like so `new Animated.ValueXY({x: 15, y: 15})` which would set the default internal `Animated.Value`s to `15`.