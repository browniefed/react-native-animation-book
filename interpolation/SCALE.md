# Scale / Mapping Values

Scale probably isn't the correct word, and is slightly confusing, but with interpolation  

#### Up

```
this._animatedValue = new Animated.Value(0);

this._animatedValue.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 100],
});
```

Taking an input range from `0` to `1` and having the output from `0` to `100`

If we were to have an animation that animates the value from `0` to `1` over the course of `1` second then each `100` milliseconds would cause a step of `10`

```
Animated.timing(this._animatedValue, {
	toValue: 1,
	duration: 1000
})

```

Outputs
```
input: 0 => 0ms => output: 0
input: .1 => 100ms => output: 10
input: .2 => 200ms => output: 20
input: .3 => 300ms => output: 30
....
input: 1 => 1000ms => output: 100

```

#### Down

The reverse is also true. 

```
this._animatedValue = new Animated.Value(0);

this._animatedValue.interpolate({
  inputRange: [0, 100],
  outputRange: [0, 1],
});
```
We can scale our input values down to a smaller output range.

```
Animated.timing(this._animatedValue, {
	toValue: 100,
	duration: 1000
})

```

Outputs
```
input: 0 => 0ms => output: 0
input: 10 => 100ms => output: .1
input: 20 => 200ms => output: .2
input: 30 => 300ms => output: .3
....
input: 100 => 1000ms => output: 1

```

#### All Around

With interpolation you can map arbitrary `inputRange`s to arbitrary `outputRange`s. The only requirement is that `inputRange` is ascending, and that the `outputRange` has the same amount of values as `inputRange`.

```
this._animatedValue = new Animated.Value(0);

this._animatedValue.interpolate({
  inputRange: [0, 30, 50, 80, 100],
  outputRange: [0, -30, -50, 0, 200],
});
```

Now what happens if we trigger a `1` second animation to `100`

```
Animated.timing(this._animatedValue, {
	toValue: 100,
	duration: 1000
})

```

* First we get inverse values, at `0 => 0`, `30 => -30` at the `300` millisecond point, and then `50 => -50` at the `500` millisecond point.
* Then we immediately animate from `-50` to `0` from the `500` millisecond to `800` millisecond point.
* Finally over the last `200` milliseconds we shoot from `0` to `200`.





