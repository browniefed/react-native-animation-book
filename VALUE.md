# Animated.Value

In order to create a value that can be animated we need to create a new value.

We do that by calling 

```
new Animated.Value(0)
```

Typically we'll do this and set it on `state` however this can be called in `componentWillMount`, `constructor`, or really anywhere besides `render`.

```
getInitialState: function() {
	return {
		someAnimatedValue: new Animate.Value(0)
	}
}

constructor(props) {
	super(props)
	this.state = {
		someAnimatedValue: new Animate.Value(0)
	}
}

componentWillMount: function() {
	this._someAnimatedValue = new Animated.Value(0)
}

```

Creatinga  new `Animated.Value` goes through the process of setting everything up so that our `Animated.View` or similar components can read and attach listeners to the internal value that is being animated.


## IMPORTANT

`Animated.Value` is an instance that has the actual value shielded inside of it. These can be passed into `style` props on `Animated` components but additionally can be passed into any property on an `Animated` component. There are limitations in this though, it must be a property that takes a simple value, the property cannot take an `array` or an `object`, so for example `strokeDash` can take an `array`. In this case we cannot pass an `array` of animated values into `strokeDash`, it will cause errors to be thrown. Another example is `contentOffset` on `ScrollView`, this takes an object of `{x: value, y: value}` this will not work with Animated.

Most importantly passing to a value other than the `style` prop should be a native property!

These shortcomings will hopefully be fixed in future versions of Animated to allow for any arbitrary data structure to have animated values.