import CategoriesScreen from '@/screens/categories-screen';
import CategoryScreen from '@/screens/category-screen';
import EditTaskScreen from '@/screens/edit-task';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CategoriesStackParamList } from './types';

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
