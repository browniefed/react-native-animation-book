---
title: "Colors"
lesson: 2
chapter: 5
date: "03/01/2018"
type: "lesson"
---

# Color Interpolation

Color interpolation allows for a user to bind an `Animated.Value` to color transitions. **COLOR INTERPOLATION DOESN'T WORK WITH HEX**

I'll say that again it doesn't work with hex, it only works with `rgb`, `rgba`, `hsl`, and other numeric formats.

```js
this._animatedValue.interpolate({
	inputRange: [0, 150],
	outputRange: ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']
});

```

The code above will transition a color from `black` to `white`.