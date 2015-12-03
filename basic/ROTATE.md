# Basic Rotation

#### Live Code [https://rnplay.org/apps/VI9yaw](https://rnplay.org/apps/VI9yaw)

```
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} = React;

var SampleApp = React.createClass({
  
  componentWillMount: function() {
    this._animatedValue = new Animated.Value(0);
  },
  componentDidMount: function() {
    Animated.timing(this._animatedValue, {
        toValue: 100,
        duration: 3000
    }).start(); 
  },
  render: function() {
    
    var interpolatedRotateAnimation = this._animatedValue.interpolate({
    	inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });
    
    return (
      <View style={styles.container}>
       <Animated.View 
      		style={[styles.box, {transform: [{rotate: interpolatedRotateAnimation}]}]}
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

## Merge them all together

#### Live Code [https://rnplay.org/apps/2XNa8g](https://rnplay.org/apps/2XNa8g)

We just need to adjust our render function to bring all the code together

```
  render: function() {
    
    var interpolatedRotateAnimation = this._animatedValue.interpolate({
    	inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });
    
    var interpolatedColorAnimation = this._animatedValue.interpolate({
    	inputRange: [0, 100],
      outputRange: ['rgba(255,255,255, 1)', 'rgba(51,156,177, 1)']
    });
    
    return (
      <View style={styles.container}>
       <Animated.View 
      		style={[styles.box, {backgroundColor: interpolatedColorAnimation, 
      				transform: [{translateY: this._animatedValue}, 
      							{rotate: interpolatedRotateAnimation}
      						    ]}
			    	]}
      	/>
      </View>
    );
  }
```