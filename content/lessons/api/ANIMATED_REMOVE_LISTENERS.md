---
title: "removeListener/removeAllListeners"
lesson: 6
chapter: 4
date: "03/01/2018"
type: "lesson"
---
## removeListener

When you need to remove listening on an animation, you can call `removeListener` with the string that is returned from `addListener`.
```js

this._animatedValue = new Animated.Value(0);

var animatedListenerId = this._animatedValue.addListener(({value}) => this._value = value);

this._animatedValue.removeListener(animatedListenerId);
```

## removeAllListeners

If you happen to attach any number of listeners to an animated value and want to clean up everything, you can simple call `removeAllListeners`. This will clean up all listeners attached to the Animated value so you don't have a memory leak.

```js
componentWillUnmount: function() {
	this._animatedValue.removeAllListeners()
}
```
