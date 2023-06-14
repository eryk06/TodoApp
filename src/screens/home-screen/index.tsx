import Loader from '@/components/shared/loader';
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper';
import Task from '@/components/tasks/task';
import TaskActions from '@/components/tasks/task-actions';
import { fetcher } from '@/services/config';
import useUserGlobalStore from '@/store/useUserGlobalStore';
import { ICategory, ITask } from '@/types';
import { getGreeting } from '@/utils/helpers';
import { AnimatedText, Box, Text } from '@/utils/theme';
import { format } from 'date-fns';
import React from 'react';
import { FlatList } from 'react-native';
import { ZoomInEasyDown } from 'react-native-reanimated';
import vi from 'date-fns/locale/vi';

import useSWR from 'swr';

const today = new Date();
const formattedDate = format(today, 'eeee, dd/LL', { locale: vi });

const getVietnameseGreeting = (hour) => {
  if (hour >= 0 && hour < 12) {
    return 'buổi sáng';
  } else if (hour >= 12 && hour < 16) {
    return 'buổi trưa';
  } else if (hour >= 16 && hour < 18) {
    return 'buổi chiều';
  } else {
    return 'buổi tối';
  }
};

const currentHour = new Date().getHours();
const greeting = getVietnameseGreeting(currentHour);

const HomeScreen = () => {
  const { user } = useUserGlobalStore();

  const {
    data: tasks,
    isLoading,
    mutate: mutateTasks,
  } = useSWR<ITask[]>('tasks/', fetcher);

  if (isLoading || !tasks) {
    return <Loader />;
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <AnimatedText
          variant="textXl"
          marginTop={'5'}
          fontWeight="500"
          entering={ZoomInEasyDown.delay(500).duration(700)}
        >
          Xin chào {greeting} {user?.name}
        </AnimatedText>
        <Text variant="textBase" fontWeight="500" marginTop="3">
          Hôm nay là {formattedDate} 😊 {tasks.length} nhiệm vụ
        </Text>
        <Box height={26} />
        <TaskActions categoryId="" />
        <Box height={26} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} mutateTasks={mutateTasks} />
          )}
          ItemSeparatorComponent={() => <Box height={14} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
