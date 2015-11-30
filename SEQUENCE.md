# Animated.sequence

The `sequence` is one method for composing animations together. This will have an animation trigger one after the other.

`1st animation -> 2nd animation -> 3rd animation -> nth animation`

```
this._opacityAnimationValue = new Animated.Value(1);
this._moveAnimationValue = new Animated.ValueXY();


Animated.sequence([
	Animated.timing(this._moveAnimationValue, {
		toValue: 100,
		duration: 500
	}),
	Animated.timing(this._opacityAnimationValue, {
		toValue: 0,
		duration: 200
	})
]).start()

<Animated.View style={{opacity: this._opacityAnimationValue, transform: this._moveAnimationValue.getTranslateTransform()}} />
```
Our example here we have 2 animations. One that will control opacity, and the other movement ( or in our case translateX/translateY).

The first animation will move the View from `x: 0, y: 0` to `x: 100, y: 100`. 
Then our second animation will kick off and it will fade out the opacity from `1` to `0`.

