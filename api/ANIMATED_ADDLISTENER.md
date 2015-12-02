# addListener

Animation is asynchronous and in some cases you may want to keep track of what the animated values are. Some reasons you may want to do this is animating values while users are holding down a button. You might animate a progress from `0` to `1` and if it reaches `1` then on release you might fire the action.

With `addListener` that is possible.

Some basic example code
```
this._animatedValue = new Animated.Value(0);

this._animatedValue.addListener(({value}) => this._value = value);

Animated.timing(this._animatedValue, {
	toValue: 100,
	duration: 500
}).start();
``` 

## Synchronous Value?
Many people may be wondering if they can get the value synchronously. The answer is yes, no, and well you shouldn't.
Previously you could call `getAnimatedValue()` or access the internal value of the `Animated.Value`, however this is bad practice. The current implementation of `Animated` is implemented in the JavaScript world but there are plans to move it from the JavaScript world to the native world for performance reasons.

For that reason accessing the animated value synchronously is frowned upon. It is a little more verbose but attaching a listener is the recommended way, sadly at the moment you cannot attach a listener to interpolated values.


** IF YOU ATTACH A LISTENER DO NOT FORGET TO REMOVE IT **