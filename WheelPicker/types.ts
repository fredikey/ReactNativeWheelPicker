import {StyleProp, ViewStyle} from 'react-native'

export interface IWheelPickerProps {
	data: Array<string>;
	selectedItem?: number;
	onItemSelected?: Function;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>
}

export interface IWheelPickerAndroidProps extends IWheelPickerProps {
	isCyclic?: boolean,
	selectedItemTextColor?: string
	selectedItemTextSize?: number
	indicatorWidth?: number
	hideIndicator?: boolean
	indicatorColor?: string
	itemTextColor?: string
	itemTextSize?: number
	backgroundColor?: string
	selectedItemTextFontFamily: string;
	itemTextFontFamily: string;
}

