interface AccountDropDownProps {
  visible?: boolean;
}

const AccountDropDown: React.FC<AccountDropDownProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return <div>AccountDropDown</div>;
};
export default AccountDropDown;
