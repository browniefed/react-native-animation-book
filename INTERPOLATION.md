# Inerpolation

Interpolation is KEY to having great animations. There are many ways to interpolate and we'll cover as many as we can here.

Interpolating with `Animated` can allow us to bind to our `Animated.Value`s that we create and change the output. So for example, maybe as a user scrolls or drags a card around you can interpolate from that `Animated.Value` and change things like the background color and or rotation.

Not only can you do colors and rotation but you can scale down or scale up values. Setting an `inputRange` and subsequent `outputRange` can allow you to adjust the values.

For example maybe you want the opacity to also be bound to the dragging of a card.

You could accomplish that like so

```
this._animatedValue = new Animated.ValueXY();

this._opacityAnimation = this._animatedValue.x.interpolate({
	inputRange: [0, 150],
	outputRange: [1, .2]
});
```

The `this._opacityAnimation` can be used just like an `Animated.Value` and can be passed into any `Animated.View` and or Animated component. What the interpolation in this case is doing is as the `x` value in our `_animtedValue` increases from `0` to `150` it is determine the step and subsequent `outputRange` between `1` and `.2`.

So when our `x` value is 0, our interpolated opacity value will be `1`, at `150` it will be `.2`, and when it's at `75` it'll be `.4` opacity.

You may be thinking to yourself, well what if the user moves the card more than `150`? Well some users may think it will automatically stop and our `_opacityAnimation` will stay at `.2`. That isn't the case be default.

You must specify how the interpolation should be extrapolated. If you want it to stop at `.2` no matter how far the `x` goes than you must specify `extrapolate:'clamp'` like os.

```
this._opacityAnimation = this._animatedValue.x.interpolate({
	inputRange: [0, 150],
	outputRange: [1, .2],
	extrapolate: 'clamp'
});
```

Clamp is VERY IMPORTANT to remember as you may have unintended side effects, especially when dealing with colors and rotation.

Additioanlly you must pass in the same amount of values in `inputRange` and `outputRange`. This can be weird as you may find yourself duplicating some values in `outputRange` occasionally. I've mostly run into this sort of thing when dealing with colors.


## Handy Technique - .99

The Animated library and interpolation is great, but it does have some downfalls. Sometimes you want to in essense trigger a `setValue` but if you are specifying an `inputRange` and `outputRange` all of these values will be animated to. 

In our opacity case it will always slowly step the animation down from `1` to `.2`. What if you want to have a drop off cliff. Like if the user moves it `75` it should immediately drop to `.2` opacity. 

Well on technique is to define something at `.99` before your cutoff. So in our case the user can drag all the way up to `74.99` and it'll slowly fade out to `.8` opacity, however as soon as it creeps over from `74.99` to `75` it will immediately drop to `.2` opacity.

Code example 

```
this._opacityAnimation = this._animatedValue.x.interpolate({
	inputRange: [0, 74.99, 75],
	outputRange: [1, .8, .2],
	extrapolate: 'clamp'
});
```

This shows how flexible and inflexible the `Animated` library is. However it's a pseudo hacky way to define arbitrary ranges of values.