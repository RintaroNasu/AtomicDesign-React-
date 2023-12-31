import styled from "styled-components";
import { HeaderOnly } from "../templates/HeaderOnly";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { useContext } from "react";

const users = [...Array(10).keys()].map(((val) => {
    return{
        id: val,
        name: `なすりん${val}`,
        image: "https://source.unsplash.com/NEOXGVKTmcA",
        email: "rintaro624528@au.com",
        phone: "000-9999-8888",
        company: {
            name: "テスト株式会社"
        },
        website: "https://google.com"
    }
}))

export const Users = () =>{
    const {userInfo, setUserInfo} = useContext(UserContext);
    const onClickSwitch = () =>{ setUserInfo({isAdmin: !userInfo.isAdmin});

    }
    return(
        <HeaderOnly>
            <SContainer>
                <h2>ユーザー一覧です</h2>
                <SearchInput/>
                <br />
                <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
                <SUserArea>
                    {users.map((user) => (
                        <UserCard key={users.id} user={user}/>
                    ))}
                </SUserArea>
            </SContainer>
        </HeaderOnly>
    );
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 24px
`;
const SUserArea = styled.div`
    padding-top: 40px;
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;

`