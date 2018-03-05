---
title: "Animated.createAnimatedComponent"
lesson: 22
chapter: 4
date: "03/01/2018"
type: "lesson"
---

# createAnimatedComponent

`Animated` ships with 3 default views. `Animated.View`, `Animated.Text`, and `Animated.Image`. However in some cases you may want to turn a component into an `Animated` component so it can take advantage of `Animated.Value` in it's styles or properties.

Example ScrollView

```js
var AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)
```

It will work on any View, even `ReactART` views.

```js

var ReactART = require('ReactNativeART');

var {
	Shape
} = ReactArt;

var AnimatedShape = Animated.createAnimatedComponent(Shape);
```
