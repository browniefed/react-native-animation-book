# getLayout

This method exists only on `Animated.ValueXY` instances. The documentation explains it here [http://facebook.github.io/react-native/docs/animated.html#getlayout](http://facebook.github.io/react-native/docs/animated.html#getlayout).

This is a helper that just saves you some code. The equivalence of what it generates is something like so:

```
this._animatedValue = new Animated.ValueXY();

{
	left: this._animatedValue.x,
	top: this._animatedValue.y
}

```

That would be provided to an `Animated.View` or other Animated component.

```
<Animated.View style={{
	left: this._animatedValue.x,
	top: this._animatedValue.y
}} />
```

But with the helper method you would only need to do

```
<Animated.Value style={this._animatedValue.getLayout()} />
```
