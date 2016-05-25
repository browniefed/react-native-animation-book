# stopAnimation

If an animation is in process of being animated and, for any particular reason, you need to stop it, you can call `stopAnimation`. The `stopAnimation` call also takes a callback with the value that the animation was stopped on.

```
this._animatedValue = new Animated.Value(0);

Animated.timing(this._animatedValue, {
	toValue: 100,
	duration: 500
}).start();


setTimeout(() => this._animatedValue.stopAnimation(({value}) => console.log("Final Value: " + value)), 250);
```

In this example, after 250 milliseconds, we'll stop the 500 millisecond animation. We also log the final value to the console, which will be roughly somewhere around 50.
