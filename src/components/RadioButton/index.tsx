import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Radio, RadionButtonProps, Selected, Title } from "./styles";

type Props = TouchableOpacityProps & RadionButtonProps & {
	title: string;
};

export function RadioButton({ title, selected = false, ...rest }: Props) {
	return (
		<Container selected={selected} {...rest}>
			<Radio>{selected && <Selected />}</Radio>

			<Title>{title}</Title>
		</Container>
	)
}