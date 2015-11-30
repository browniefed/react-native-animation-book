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