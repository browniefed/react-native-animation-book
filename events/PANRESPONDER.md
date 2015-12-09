# PanResponder

The `PanResponder` is typically going to be used to control animations that cause various drag events to happen, or additionally to trigger animations to completion and terminate on a release.

I'd recommend reading [Gesture Responder System](http://facebook.github.io/react-native/docs/gesture-responder-system.html) and then addtionally reading the documentation on [PanResponder](http://facebook.github.io/react-native/docs/panresponder.html) before continuing.

There are 3 main functions that we'll use for our animations. 

The first is `onPanResponderGrant`.
This is typically going to be used as our setup. We may need to use [setOffset](../api/SETOFFSET.md) in the case of dragging, but your use cases may vary for what you need to setup.

The second is `onPanResponderMove`. 
This is going to be called whenever a user moves their finger. In many cases it'll be for dragging with a single finger, however the event (first argument) will provide an array of all of the touch events that are currently happening. There could be more than 1! Typically you'd use [Animated.event](../api/EVENT.md) here, but if you need more complex logic (doing different animations based on number of touches currently happening), then this may be much more complex.

Either way the gist is that it's typically going to be used to track a constant touch while a user is moving their finger.


The third and final `onPanResponderRelease`. 
This is typically where the analysis of the animation value and business logic might live. In the case of Tinder, on release we want to analyze the final position of the card we were dragging.
If it reaches a certain threshold then we may want to trigger an [Animated.decay](../api/DECAY.md) to continue the card throw, or if it doesn't reach our threshold we may want to reset the card position by animating it back to the middle. This may use a [Animated.timing](../api/TIMING.md) or [Animated.spring](../api/SPRING.md) to reset it back to `x:0, y:0.  Also commonly with drag animations [flattenOffset](../api/FLATTENOFFSET.md) will be called.

There are a few other cases for `onPanResponderRelease` that deal with stopping animations that may have been triggerd in `onPanResponderGrant` or also deciding on what to do based upon values of other animations that you may be listening on using [addListener](../api/ANIMATED_ADDLISTENER.md). 

There is another less common one that likely will not happen in lesser complex applications but it is `onPanResponderTerminate`. Similar to a release but as it is described in the documentaiton `"Another component has become the responder, so this gesture should be cancelled"`.

A gesture may still be happening however it is not currently being handled by our `PanResponder`. Depending on your application you may just want to trigger the same stuff that happens on an `onPanResponderRelease` or at least the parts that deal with reseting the animation if that happens to be applicable.


To see example code of all of this check out [setOffset](../api/SETOFFSET.md), [flattenOffset](../api/FLATTENOFFSET.md), and or check out the more complete [Basic Drag Animation](../basic/DRAG.md) demo.