# Animated.spring

The spring allows for us to define values that will animate from the start to end without having to define a specific amount of time like in `timing`. 

It does this by taking various values that will do that calculation for us. The only required one is `toValue` and the rest have defaults. However I recommend at least tweaking `velocity`, `tension` and `friction` to get the perfect animation.

Here are the values you can supply for the config.

```
  toValue: number
  overshootClamping: bool
  restDisplacementThreshold: number
  restSpeedThreshold: number
  velocity: number
  bounciness: number
  speed: number
  tension: number
  friction: number
  ```

  In the case of `Animated.ValueXY` you can supply an object `{x: number y: number}` in the `toValue`.

