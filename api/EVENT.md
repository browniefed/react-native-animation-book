# Animated.event

This is just a helper function to map arbitrary data to `Animated` values. Check out the docs for their explanation [http://facebook.github.io/react-native/docs/animated.html#event](http://facebook.github.io/react-native/docs/animated.html#event).

There are 2 main cases when you want to use `Animated.event`. When dealing with`PanResponder` events, and or dealing with `onScroll` events. You could write up your own function and map things yourself but use what's provided for you.

Example of `PanResponder`

```
 onPanResponderMove: Animated.event([
   null,                // raw event arg ignored
   {dx: this._pan.x, dy: this._pan.y},    // gestureState arg
 ]),
 ```

 What is happening here is that the `onPanResponderMove` calls it's function with 2 params. We are ignoring the raw event, which is the first argument, thus we pass null.
 The second argument is the `gestureState` which provides some helpful values, in our case `dx` and `dy`. Which are deltas (aka the changes) in how far the user has moved their finger from the beginning of the touch.

 We pass in our 2 animated values from an `Animated.ValueXY` which our `Animated.event` will take that configuration, traverse it, find the Animated values and call `setValue` for us. Effectively when the user moves their finger our Animated values will be the delta positions.

 This could then be passed into a `translateX/translateY`

 The other case is Scroll. Maybe you want to trigger certain background colors? effects? etc on scroll. Well hooking into the `onScroll` of a `ScrollView` or `ListView` with an `Animated.event` can help with that. 

 In our case here we're listening to how far the x is being scrolled.

```
 onScroll={Animated.event(
   [{nativeEvent: {contentOffset: {x: this._scrollX}}}]
   {listener},          // Optional async listener
 )}
```
Additionally you can define a callback listener as the second argument to `Animated.event`.
