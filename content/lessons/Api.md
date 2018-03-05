---
title: "Animated API"
lesson: 1
chapter: 4
date: "03/01/2018"
type: "lesson"
---
# API

Here we'll dive into the API of `Animated` and all the various functions, code examples and reasons why you would want to use them.

Link to documentation [http://facebook.github.io/react-native/docs/animated.html#content](http://facebook.github.io/react-native/docs/animated.html#content)

To get access to it simple pull it off of your `react-native` require like so:

```js
import React from "react";
import { View, Animated } from "react-native";

```

By default, `Animated` gives us access to 3 animatable components: `Animated.View`, `Animated.Text` and `Animated.Image`.

Later we'll cover how any component can become animatable.
