# Animated.delay

The essense of `Animated.delay` internals is that it creates an `Animated.timing` that does nothing but wait. The main purpose is for using with composing animations in `stagger`, or `sequence`.

The other option is to pass in your delay to the animation config when you call it but using `Animated.delay` is the other option.

Here are 2 equivalent animations

```
this._animatedValue = new Animated.Value(0);

Animated.timing(this._animatedValue, {
	toValue: 100,
	delay: 300,
	duration: 500
}).start()
```

```
this._animatedValue = new Animated.Value(0);

Animated.sequence([
	Animated.delay(300),
	Animated.timing(this._animatedValue, {
		toValue: 100,
		duration: 500
	})
]).start()

```

In the first we are passing the delay in. In the second we are composing 2 animations, one of those animations is just the `Animated.delay` of `300` milliseconds.