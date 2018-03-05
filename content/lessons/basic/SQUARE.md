---
title: "Moving Square"
lesson: 2
chapter: 7
date: "03/01/2018"
type: "lesson"
---
# Basic Square Animation

#### Live Code [https://rnplay.org/apps/BH9T8Q](https://rnplay.org/apps/BH9T8Q)

![Simple Timing Move](../images/SimpleTimingMove.gif)


```
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Animated
} = React;

var SampleApp = React.createClass({
  componentWillMount: function() {
    this._animatedValue = new Animated.Value(0);
  },

  componentDidMount: function() {
    Animated.timing(this._animatedValue, {
        toValue: 300,
        duration: 500
    }).start();
  },

  render: function() {
    return (
      <View style={styles.container}>
       <Animated.View 
      		style={[styles.box, {transform: [{translateY: this._animatedValue}]}]}
      	/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
   	backgroundColor: 'red',
    position: 'absolute',
    top: 100,
    left: 100,
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('SampleApp', () => SampleApp);

```