# Animated.timing

Animated timing allows for us to define an animation that takes a certain amount of time. It's most commonly used if you need to animate to a specific value over a set amount of time.

```
this._animatedValue = new Animated.Value(0);

Animated.timing(this._animatedValue, {
	toValue: 100,
	duration: 500
})
```

This will animate our `_animatedValue` from `0` to `100` over the course of `500` milliseconds.

The `Animated.timing` config also takes 2 additional parameters, `easing`, and `delay`. The delay is most self explanatory, it will wait X number of milliseconds before triggering the animation.

```
this._animatedValue = new Animated.Value(0);

Animated.timing(this._animatedValue, {
	toValue: 100,
	delay: 300,
	duration: 500
}).start()
```

This animation will wait `300` milliseconds before triggering and then take `500` milliseconds to animate from `0` to `100`. The total time of animation will be `800` milliseconds.

The other is `easing`, which if none is supplied defaults to `easeInOut`. To get access to a bunch of pre-defined easing functions you can require the `Easing` module like so.

```
var React = require('react-native');

var {
  Easing
} = React;
```

You can look at some of the provided easings here [https://github.com/facebook/react-native/blob/master/Libraries/Animated/src/Easing.js](https://github.com/facebook/react-native/blob/master/Libraries/Animated/src/Easing.js).

If you do not like one of the provided easings you can write your own as it is a function that is provided a number, that returns a new number.

```
var React = require('react-native');

var {
  Easing
} = React;

this._animatedValue = new Animated.Value(0);

Animated.timing(this._animatedValue, {
	toValue: 100,
	easing: Easing.linear,
	duration: 500
}).start()

Animated.timing(this._animatedValue, {
	toValue: 100,
	easing: easing: Easing.elastic(2), // Springy
	duration: 500
}).start()

Animated.timing(this._animatedValue, {
	toValue: 100,
	easing: Easing.bounce, // Like a ball
	duration: 500
}).start()
```

Many more examples can be found here in the `AnimatedExample` of the `UIExplorer` [https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/AnimatedExample.js](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/AnimatedExample.js).
