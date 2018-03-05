---
title: "getTranslateTransform"
lesson: 10
chapter: 4
date: "03/01/2018"
type: "lesson"
---
# getTranslateTransform

This method exists only on `Animated.ValueXY` instances. The documentation explains it here [http://facebook.github.io/react-native/docs/animated.html#gettranslatetransform](http://facebook.github.io/react-native/docs/animated.html#gettranslatetransform).

This is a helper that just saves you some code. The equivalence of what it generates is something like so:

```js
this._animatedValue = new Animated.ValueXY();

transform: [
	{
		translateX: this._animatedValue.x
	},
	{
		translateY: this._animatedValue.y
	}
]

```

That would be provided to an `Animated.View` or other Animated component.

```js
<Animated.View style={{transform: [
	{
		translateX: this._animatedValue.x
	},
	{
		translateY: this._animatedValue.y
	}
]}} />
```

But with the helper method you would only need to do

```js
<Animated.Value style={{
   transform: this._animatedValue.getTranslateTransform()
 }} />
```


## Why use Translate

Translate allows for us to change the position of a component regardless of it's current layout. When you use `getLayout`, the component must be set to `position: 'absolute'`; however, a compnent you would like to move may not necessarily be absolutely positioned.

Further more, if you do have a component positioned absolutely, you may want to move the component but not affect it's layout. An example would be in the case where you have a full screen modal using `{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}`, but would like to animate it off the screen.

This is where you could use the `translateX/translateY` to move it without affecting the layout. If you are interested you can read more about it on my blog here: [http://browniefed.com/blog/2015/10/18/react-native-easy-overlay-modal-with-navigator/](http://browniefed.com/blog/2015/10/18/react-native-easy-overlay-modal-with-navigator/).
