import { PickerIOS } from "@react-native-community/picker"

interface IWheelBasePickerProps {
	data: Array<string>;
	selectedItem?: number;
	onItemSelected?: Function;
	disabled?: boolean;
}

export interface IWheelPickerAndroidProps extends IWheelBasePickerProps {
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

export interface IWheelPickerIOSProps extends IWheelBasePickerProps, Partial<PickerIOS['props']> {}
