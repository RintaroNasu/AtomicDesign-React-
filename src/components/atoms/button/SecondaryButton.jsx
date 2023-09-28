import styled from "styled-components"
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (prpps) =>{
    const {children} = prpps;
    return <Button>{children}</Button>
}

const Button = styled(BaseButton)`
    background-color:#11999e;
    }
`