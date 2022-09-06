import React from 'react';
import {  Menu, MenuItem } from '@ui-kitten/components';

const AccountMenuList = ({ navigation }) => {
    const onOrdersPress = () => {
        navigation.navigate('Reports')
    }
  return (
    <>
      <Menu>
        <MenuItem title="Activity"  />
        <MenuItem title="Reports" onPress={onOrdersPress} />
        <MenuItem title="Settings" />
        <MenuItem title="Logout" />
      </Menu>
    </>
  );
};
export default AccountMenuList;
