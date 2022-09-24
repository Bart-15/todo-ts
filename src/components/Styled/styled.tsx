import styled from 'styled-components';

const dark : string = "#21262d";
const light : string = "#fff";


export const TogglewWrapper = styled.div`
    position:relative;
`

export const ToggleLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`

export const ToggleCheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${ToggleLabel} {
    background: #4fbe79;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin-left: 21px;
        transition: 0.2s;
        }
    }
`

export const StyledContainer = styled.div<{isDark: boolean, width: number}>`
    max-width:${props => `${props.width}%`};
    padding:2rem;
    margin:0 auto;
    background:${props => props.isDark ? `${dark}` : `${light}`};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    border-radius:10px;
`

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Container = styled.div`
    max-width:1200px;
    margin:0 auto;
`

export const Title = styled.h2`
    font-size:20px;
    text-align:center;
`

export const ActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap:4px;
`