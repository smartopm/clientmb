import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportListScreen from './ReportScreen';
import AccountMenuList from './MyAccount';

const MyAccountStack = createNativeStackNavigator();

export default function MyAccountStackScreen() {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen name="MyAccount" component={AccountMenuList} options={{ title: 'My Account' }} />
      <MyAccountStack.Screen name="Reports" component={ReportListScreen}  />
    </MyAccountStack.Navigator>
  );
}
