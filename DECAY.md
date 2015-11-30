# Animated.decay

The typical use of `decay` is to take something that may be moving at a particular velocity and apply deceleration to it. One such use case is throwing a card. The finger will cause the card to move at a sepcific velocity. We can use the velocity, apply it to our `decay` and bring the card to it's final position and make it look like a real flick happened.

Without `decay` when someone flicks to release a card it would just stop wherever they last touched with their fingers. So most commonly this will be used with `PanResponder` and `Animated.ValueXY`

```

this._animatedValue = new Animated.ValueXY();

Animated.decay(this._animatedValue, {   // coast to a stop
    velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
    deceleration: 0.997,
})
```

What does it look like in a real life example. Well thanks to Brent Vatne you can check out some real life code here [https://github.com/brentvatne/react-native-animated-demo-tinder/blob/master/index.ios.js#L47](https://github.com/brentvatne/react-native-animated-demo-tinder/blob/master/index.ios.js#L47).

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

The main part to look at is. Now one thing here is DO NOT access `_value` like we are doing here. This is synchronous and we should be attaching an event listener but for the sake of example this will work.

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