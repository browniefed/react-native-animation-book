---
title: "start"
lesson: 13
chapter: 4
date: "03/01/2018"
type: "lesson"
---

# start

`start` will cause an animation to trigger. It takes a callback that will be called upon completion of the the animation.

This will be how we trigger animations on any `Animated.timing`, `Animated.decay`, `Animated.spring`, as well as our animation combinators like `Animated.parallel`, `Animated.sequence` and `Animated.stagger`.

A simple example:

```js
this._animatedValue = new Animated.Value(0);

Animated.timing(this._animatedValue, {
	toValue: 100,
	duration: 500
}).start(() => console.log('done'));
```
