import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Index() {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkProfile = async () => {
      const profile = await AsyncStorage.getItem('profile');

      // Delay để layout chắc chắn đã mount
      setTimeout(() => {
        if (!profile) {
          router.replace('/onboarding');
        } else {
          router.replace('/(tabs)');
        }
        setChecking(false);
      }, 100);
    };

    checkProfile();
  }, []);

//   if (checking) {
//     return (
//       <View className="flex-1 justify-center items-center bg-white">
//         <ActivityIndicator size="large" />
//         <Text className="mt-4 text-lg">Đang kiểm tra trạng thái...</Text>
//       </View>
//     );
//   }

  return null;
}
