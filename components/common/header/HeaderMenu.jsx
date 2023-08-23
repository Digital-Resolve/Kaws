import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const Menu = () => {
    return (
        <TouchableOpacity>
            <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                <Rect x="0.0244141" y="0.731201" width="25.4465" height="2.6324" rx="1.3162" fill="black"/>
                <Rect x="0.0244446" y="8.62842" width="21.9367" height="2.6324" rx="1.3162" fill="black"/>
                <Rect x="0.0244446" y="16.5255" width="16.6719" height="2.6324" rx="1.3162" fill="black"/>
            </Svg>
        </TouchableOpacity>
        
    )
}

export default Menu