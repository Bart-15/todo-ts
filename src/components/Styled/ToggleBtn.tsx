import {useContext} from 'react';
import { ToggleCheckBox, TogglewWrapper, ToggleLabel } from "./styled";
import { DarkModeContext } from '../../context/DarkMode';
const ToggleDarkMode = () => {
    const {isDark, setDark} = useContext(DarkModeContext);

    return (
        <TogglewWrapper>
            <ToggleCheckBox id="checkbox" type="checkbox" checked={isDark} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDark(e.target.checked)}/>
            <ToggleLabel htmlFor="checkbox" />
        </TogglewWrapper>
    );
}

export default ToggleDarkMode;