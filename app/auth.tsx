import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';
import { authStore } from '../store/authStore';
import { useRouter } from 'expo-router';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const user = await authStore.checkAuthStatus();
      if (user) {
        setIsAuthenticated(true);
        router.replace('/(tabs)'); // Điều hướng đến (tabs) nếu đã đăng nhập
      }
    } catch (error) {
      console.error('Auth check error:', error);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    router.replace('/(tabs)'); // Điều hướng đến (tabs) sau khi đăng nhập
  };

  const handleLogout = async () => {
    try {
      await authStore.logout();
      setIsAuthenticated(false);
      router.replace('/auth'); // Quay lại AuthScreen sau khi đăng xuất
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isAuthenticated) {
    return null; // Không hiển thị gì vì sẽ điều hướng
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {isLogin ? (
            <LoginForm
              onLoginSuccess={handleAuthSuccess}
              onSwitchToRegister={() => setIsLogin(false)}
            />
          ) : (
            <RegisterForm
              onRegisterSuccess={handleAuthSuccess}
              onSwitchToLogin={() => setIsLogin(true)}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  authenticatedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});