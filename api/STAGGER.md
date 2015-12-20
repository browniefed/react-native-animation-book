# Animated.stagger

The `stagger` call will have 2 animations trigger at the same time,

```
this._opacityAnimationValue = new Animated.Value(1);
this._moveAnimationValue = new Animated.ValueXY();


Animated.stagger(100, [
	Animated.timing(this._moveAnimationValue, {
		toValue: 100,
		duration: 500
	}),
	Animated.timing(this._opacityAnimationValue, {
		toValue: 0,
		duration: 200
	})
]).start()

<Animated.View style={{opacity: this._opacityAnimationValue, transform: this._moveAnimationValue.getTranslateTransform()}} />
```

Our example here we have 2 animations. One that will control opacity, and the other movement ( or in our case translateX/translateY ).

The first animation will move the View from `x: 0, y: 0` to `x: 100, y: 100`. This will happen over the `500` milliseconds.

There will be a delay of `100` milliseconds.

Then our second animation will kick off and it will fade out the opacity from `1` to `0`.

So the `Animated.View` will move, wait `100` milliseconds and then fade out.


This example is kind of contrived, but one perfect example of this sort of movement is Chat Heads. Trigger an animation to same location but causing a staggered delay of a certain number of milliseconds.
