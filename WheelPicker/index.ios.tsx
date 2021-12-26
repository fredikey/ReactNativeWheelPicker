import React from "react"
import {PickerIOS} from "@react-native-picker/picker"
import {IWheelPickerIOSProps} from './types'

export const WheelPicker = ({data, onItemSelected, disabled, selectedItem, ...otherProps}: IWheelPickerIOSProps) => {
  if (!data || data.length === 0) return null;
  
  return (
	  <PickerIOS
		  selectedValue={selectedItem || 0}
		  onValueChange={onItemSelected}
		  {...otherProps}
	  >
		  {data.map((item, idx) => (
			  <PickerIOS.Item key={idx} label={item} value={idx} />
		  ))}
	  </PickerIOS>
  );
};
