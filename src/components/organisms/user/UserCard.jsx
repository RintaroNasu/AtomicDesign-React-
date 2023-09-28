import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import { memo } from "react";
export const UserCard = memo((props) =>{
    const {user} = props;
    return(
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>Web</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    );
});
const SDl = styled.dl`
    text-align: left;
    margin-bottom:0px;
    dt{
        float:left;
    }
    dd{
        padding-bottom:8px;
        padding-left:32px;
        overflow-wrap: break-word;
    }
`