import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, BMIResult, CalorieResult, WaterIntakeGoal } from '../types/user';

interface AppState {
  profile: UserProfile | null;
  hasCompletedOnboarding: boolean;
  waterIntakeToday: number; // in ml
  waterIntakeLogs: { amount: number; timestamp: number }[];
  lastWaterReminder: string | null; // ISO date string
  
  // Actions
  setProfile: (profile: Partial<UserProfile>) => void;
  calculateBMI: () => BMIResult | null;
  calculateCalories: () => CalorieResult | null;
  calculateWaterGoal: () => WaterIntakeGoal | null;
  addWaterIntake: (amount: number) => void;
  resetWaterIntakeForNewDay: () => void;
  setHasCompletedOnboarding: (completed: boolean) => void;
  setPremium: (isPremium: boolean, expiryDate?: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      profile: null,
      hasCompletedOnboarding: false,
      waterIntakeToday: 0,
      waterIntakeLogs: [],
      lastWaterReminder: null,
      
      setProfile: (newProfileData) => {
        set((state) => ({
          profile: {
            ...state.profile,
            ...newProfileData,
          } as UserProfile,
        }));
        
        // If this is the first time setting the profile, also calculate water goal
        if (newProfileData.weight && (!get().profile?.waterGoal)) {
          const waterGoal = Math.round(newProfileData.weight * 0.03 * 1000); // Convert to ml
          set((state) => ({
            profile: {
              ...state.profile,
              waterGoal,
            } as UserProfile,
          }));
        }
      },
      
      calculateBMI: () => {
        const profile = get().profile;
        if (!profile) return null;
        
        const heightInMeters = profile.height / 100;
        const bmi = profile.weight / (heightInMeters * heightInMeters);
        
        let category: BMIResult["category"];
        let description: string;
        
        if (bmi < 18.5) {
          category = "underweight";
          description = "You are underweight. Consider a healthy weight gain plan.";
        } else if (bmi >= 18.5 && bmi < 23) {
          category = "normal";
          description = "Your weight is normal. Maintain your healthy lifestyle!";
        } else if (bmi >= 23 && bmi < 25) {
          category = "overweight";
          description = "You are overweight. Consider a moderate weight loss plan.";
        } else {
          category = "obese";
          description = "You are in the obese range. A structured weight loss plan is recommended.";
        }
        
        return {
          value: parseFloat(bmi.toFixed(1)),
          category,
          description,
        };
      },
      
      calculateCalories: () => {
        const profile = get().profile;
        if (!profile) return null;
        
        // Calculate BMR using Mifflin-St Jeor Equation
        let bmr = 0;
        if (profile.gender === "male") {
          bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) + 5;
        } else {
          bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) - 161;
        }
        
        // Apply activity multiplier
        let activityMultiplier = 1.2; // sedentary
        switch (profile.activityLevel) {
          case "light":
            activityMultiplier = 1.375;
            break;
          case "moderate":
            activityMultiplier = 1.55;
            break;
          case "active":
            activityMultiplier = 1.725;
            break;
          case "very_active":
            activityMultiplier = 1.9;
            break;
        }
        
        let dailyCalories = bmr * activityMultiplier;
        
        // Adjust based on goal
        if (profile.goal === "lose") {
          dailyCalories -= 500; // Deficit for weight loss
        } else if (profile.goal === "gain") {
          dailyCalories += 500; // Surplus for weight gain
        }
        
        // Calculate macros (simplified)
        const proteinGrams = Math.round((dailyCalories * 0.3) / 4); // 30% protein, 4 calories per gram
        const fatGrams = Math.round((dailyCalories * 0.25) / 9); // 25% fat, 9 calories per gram
        const carbsGrams = Math.round((dailyCalories * 0.45) / 4); // 45% carbs, 4 calories per gram
        
        return {
          bmr: Math.round(bmr),
          dailyCalories: Math.round(dailyCalories),
          proteinGrams,
          carbsGrams,
          fatGrams,
        };
      },
      
      calculateWaterGoal: () => {
        const profile = get().profile;
        if (!profile) return null;
        
        const waterGoal = profile.waterGoal || Math.round(profile.weight * 0.03 * 1000); // in ml
        const consumed = get().waterIntakeToday;
        const percentage = Math.min(100, Math.round((consumed / waterGoal) * 100));
        
        return {
          amount: waterGoal,
          consumed,
          percentage,
        };
      },
      
      addWaterIntake: (amount) => {
        const timestamp = Date.now();
        set((state) => ({
          waterIntakeToday: state.waterIntakeToday + amount,
          waterIntakeLogs: [
            { amount, timestamp },
            ...state.waterIntakeLogs,
          ],
          profile: state.profile ? {
            ...state.profile,
            waterIntake: [
              ...(state.profile.waterIntake || []),
              timestamp,
            ],
          } : null,
        }));
      },
      
      resetWaterIntakeForNewDay: () => {
        set({ waterIntakeToday: 0 });
      },
      
      setHasCompletedOnboarding: (completed) => {
        set({ hasCompletedOnboarding: completed });
      },
      
      setPremium: (isPremium, expiryDate) => {
        set((state) => ({
          profile: state.profile ? {
            ...state.profile,
            isPremium,
            premiumUntil: expiryDate,
          } : null,
        }));
      },
    }),
    {
      name: "health-app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);