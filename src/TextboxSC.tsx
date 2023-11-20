import styled from 'styled-components';
export const TextboxSC = () => {

    const StyledInput = styled.input`
        padding: 5px;
        background-color: yellow;

        &:hover {
            background-color: green;
        }
    `


    return (
        <StyledInput type="text" />
    )
}