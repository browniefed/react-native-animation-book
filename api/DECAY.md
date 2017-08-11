# Animated.decay

The typical use of `decay` is to take something that may be moving at a particular velocity and apply deceleration to it. One such use case is throwing a card. The finger will cause the card to move at a specific velocity. We can use the velocity, apply it to our `decay` and bring the card to its final position and make it look like a real flick happened.

Without `decay`, when someone flicks to release a card, it would just stop wherever they last touched with their fingers. Most commonly, this will be used with `PanResponder` and `Animated.ValueXY`.

```

this._animatedValue = new Animated.ValueXY();

Animated.decay(this._animatedValue, {   // coast to a stop
    velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
    deceleration: 0.997,
})
```

What does it look like in a real life example? Well thanks to Brent Vatne you can check out some real life code here [https://github.com/brentvatne/react-native-animated-demo-tinder/blob/master/index.ios.js#L47](https://github.com/brentvatne/react-native-animated-demo-tinder/blob/master/index.ios.js#L47).

```
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        var velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.98
          }).start(this._resetState)
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start()
        }
      }
    })
```

Note: It would be much better to NOT access the Animated.Value's `_value` directly as in the example. This is synchronous access and can lead to performance issues. A much better approach would be to attach an event listener. However, for the sake of this example, this will work.

The main part to look at is this function:
```
      onPanResponderRelease: (e, {vx, vy}) => {
```
On the release we the second argument is the ending `gestureState`, we use destructing to pop off the velocities.

```
        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.98
          }).start(this._resetState)
        } else {
```

If the user move the card passed a certain threshold (left or right) then we'll continue to animate the card until it stops. This allows you to have the card movement continue as if the user threw the card.
