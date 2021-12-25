import React, { useCallback, useState } from "react"
import { PickerIOS } from "@react-native-community/picker"
import { IWheelPickerIOSProps } from './types'

export const WheelPicker = ({data, onItemSelected, disabled, selectedItem, ...otherProps}: IWheelPickerIOSProps) => {
  const [selectedValue, setSelectedValue] = useState(selectedItem || 0);
  
  const onValueChange: IWheelPickerIOSProps['onValueChange'] = useCallback((value) => {
		  onItemSelected && onItemSelected(value)
		  setSelectedValue(value);
  }, [])
  
  if (!data || data.length === 0) return null;
  
  
  
  return (
	  <PickerIOS
		  selectedValue={selectedValue}
		  onValueChange={onValueChange}
		  {...otherProps}
	  >
		  {data.map((item, idx) => (
			  <PickerIOS.Item key={idx} label={item} value={idx} />
		  ))}
	  </PickerIOS>
  );
};
