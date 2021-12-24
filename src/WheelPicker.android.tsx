import React from 'react'
import { requireNativeComponent, View } from 'react-native'
import { IWheelPickerAndroidProps } from './types'

const WheelPickerView = requireNativeComponent('WheelPicker', null)

export default class WheelPicker extends React.Component<IWheelPickerAndroidProps> {
  static defaultProps = {
    style: {
      width: 'auto',
      height: 150,
    },
  }

  onItemSelected = (event: any) => {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(event.nativeEvent.position)
    }
  }

  render() {
    const { isCyclic, data } = this.props
    return (
      <View pointerEvents={this.props.disabled ? "none" : "auto"}>
        <WheelPickerView
          {...this.props}
          isCyclic={data.length > 2 ? isCyclic : false}
          onChange={this.onItemSelected}
        />
      </View>
    )
  }
}
