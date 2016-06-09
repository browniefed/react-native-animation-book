# setOffset

Read documentation here [http://facebook.github.io/react-native/docs/animated.html#setoffset](http://facebook.github.io/react-native/docs/animated.html#setoffset).

`setOffset` is grouped in with other `Animated.ValueXY` methods, although it also exists on `Animated.Value`, because it is most typically used with `ValueXY`, `PanResponder` and the `onPanResponderGrant` calls.

`setOffset` allows us to set a base value on top of what our animated value is. For example if you set an offset of `100` and our `Animated.Value` is `50`, then when the `Animated.View` requests the value it would be `150`.

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

### Live Code Examaple: [https://rnplay.org/apps/m_t0yQ](https://rnplay.org/apps/m_t0yQ)

In this context, `setOffset` is helping us accomplish in assigning the base offset to be the current position. We then clear the animated value and set it back to `x: 0, y: 0`. This allows us to utilize `dx` and `dy`, our delta movement, so that no jumps happen when the user presses on the box to move it.
