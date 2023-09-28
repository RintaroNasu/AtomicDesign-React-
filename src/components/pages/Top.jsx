import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";


export const Top = () =>{
    const navigate = useNavigate();
    const {setUserInfo} = useContext(UserContext);
    const onClickAdmin = () =>  {
        setUserInfo({isAdmin:true})
        navigate("/users")};
    const onClickGeneral = () => {
        setUserInfo({isAdmin:false})
        navigate("/users")};
    return(
        <DefaultLayout>
            <SContainer>
                <h2>TOPページです</h2>
                <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
                <br />
                <br />
                <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
            </SContainer>
        </DefaultLayout>
    );
}

const SContainer = styled.div`
    text-align:center;
`;