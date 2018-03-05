---
title: "Degrees/Radians (Rotation)"
lesson: 3
chapter: 5
date: "03/01/2018"
type: "lesson"
---

# Interpolating Degrees

Similarly to colors you can interpolate to degrees or radians. This is how you would write animated values for `rotateX`, `rotateY`, `rotate`, `rotateZ`, `skewX`, `skewY` and or other style properties that require a string degree/radian.

```js
this._animatedValue.interpolate({
	inputRange: [0, 150],
	outputRange: ['0deg`, `15deg`]
});

```
You can specify simple values.

Or in the case maybe you want left and right rotation.

```js
this._animatedValue.interpolate({
	inputRange: [-150, 0, 150],
	outputRange: ['-15deg' '0deg`, `15deg`]
});

```

Radians are just like degrees, just use `rad` instead of `deg`. 1 radian is roughly equally to 57.2958 degrees.

```js
this._animatedValue.interpolate({
	inputRange: [0, 150],
	outputRange: ['0rad`, `0.0872665rad`]
});

```