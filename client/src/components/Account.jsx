import useMyPosts from "../hooks/useMyPosts";
import { AccountContainer } from "../styled/Account.styled";
const Account = () => {
  const { data } = useMyPosts();
  return (
    <AccountContainer>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </AccountContainer>
  );
};

export default Account;
