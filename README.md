# React Native Animation Book

## THIS IS A WORK IN PROGRESS

If you would like to see specific things let me know.

TODO:

* Clamp
* PanResponder
* Scroll

* Basic Animations ( Some complete, need more basic animations)
* Advanced Animations

* Add gifs and live code examples where needed


## Introduction

React Native has had a fantastic reception. There have already been a ton of great applications built using React Native. However one hugely important part of mobile applications is animations. React on the web has generally been pretty poor at dealing with animations, however there are some great people out their attempting to solve this problem. One such solution is `react-motion` [https://github.com/chenglou/react-motion/](https://github.com/chenglou/react-motion/).

However `react-motion` utilizes `setState` which if you are animating components with signifcant amounts of children will cause a lot of diffing. Christopher Chedeau then gave a talk at React Rally, which you should watch here [Christopher Chedeau - Animated](https://www.youtube.com/watch?v=xtqUJVqpKNo). Additionally follow along with the slides here [https://speakerdeck.com/vjeux/react-rally-animated-react-performance-toolbox](https://speakerdeck.com/vjeux/react-rally-animated-react-performance-toolbox).

This was a novel technique and really shows off the flexibility of React. Currently it only works on React Native but there is a non-working port for the web.

There is already some great documentation written up on the React Native `Animated` library here [http://facebook.github.io/react-native/docs/animated.html](http://facebook.github.io/react-native/docs/animated.html). It's not perfect by any means but that's what this book is here for. I'll be covering all of the APIs, basics, and other topics.

We'll also be covering `LayoutAnimation` which you can read up on here [http://facebook.github.io/react-native/docs/layoutanimation.html](http://facebook.github.io/react-native/docs/layoutanimation.html).


## READ THE RESOURCES

A lot of people say there aren't great resources or documentation on animations, but seriously read [RESOURCES](RESOURCES.md)! Read code in the [Animation Example](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/AnimatedExample.js). Also checkout the code in the [Gratuitous Animation Examples](https://github.com/facebook/react-native/tree/master/Examples/UIExplorer/AnimatedGratuitousApp).

For real though, why are you still here? Go read those before even bothering to read this stuff.


## Hey you already blogged about this

Yeah, I might steal some examples from my blog and repurpose them, clean them up, etc. Deal with it. They are my blog posts and I'll do whatever the hell I want with them.