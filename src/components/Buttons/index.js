import styled from 'styled-components';

const Button = styled.button`
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 10px 10px 0px 0px rgba(0,0,0,1);
    font-size: .8rem;
    padding: 5px 20px;
    font-weight: 900;
    outline: none;
    border: 2px solid black;
    transition:.3s;

    &:hover{
        transition:.3s;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

export default Button;
