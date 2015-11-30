# flattenOffset

Read the documentation here [http://facebook.github.io/react-native/docs/animated.html#flattenoffset](http://facebook.github.io/react-native/docs/animated.html#flattenoffset).

`flattenOffset` like `setOffset` is batched in with `Animated.ValueXY` as it is going to typically be used when dealing with `PanResponder`, and called in the `onPanResponderRelease` function.

`flattenOffset` will take whatever values are in the offset and add them to the base animated value, and then reset the offset to `0`. So for example if we had an offset of `100` and our `Animated.Value` is `50`. When we call `flattenOffset` our offset will become `0` and our `Animated.Value` will become `150`.

```
  componentWillMount: function() {
    this._animatedValue = new Animated.ValueXY()
    this._value = {x: 0, y: 0}
    
    this._animatedValue.addListener((value) => this._value = value);
	this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
      onMoveShouldSetPanResponderCapture: () => true, // Same here, tell iOS that we allow dragging
      onPanResponderGrant: (e, gestureState) => {
        this._animatedValue.setOffset({x: this._value.x, y: this._value.y});
		this._animatedValue.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null, {dx: this._animatedValue.x, dy: this._animatedValue.y}
      ]), // Creates a function to handle the movement and set offsets
      onPanResponderRelease: () => {
        this._animatedValue.flattenOffset(); // Flatten the offset so it resets the default positioning
      }
    });
  },


// To use

<Animated.View style={[styles.box, {transform: this._animatedValue.getTranslateTransform()}]} {...this._panResponder.panHandlers} />

```

### Live Code [https://rnplay.org/apps/m_t0yQ](https://rnplay.org/apps/m_t0yQ)


In this context `flattenOffset` is taking what ever is set in the offset and merging it in with the animated value. We use `flattenOffset` to reset our offset back to `x: 0, y: 0`. Because we reset our offset and our animated value in the `onPanResponderGrant` the call to `flattenOffset` is unnecessary, however in the case where we want to trigger an animation from the released location to another location `flattenOffset` is required.