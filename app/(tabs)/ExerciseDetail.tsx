import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Colors from "../../constants/colors";
import { Exercise } from "../../mocks/exercises";
import { useColorScheme } from "../../hooks/useColorScheme";

interface ExerciseDetailProps {
  exercise: Exercise;
  onClose: () => void;
}

const ExerciseDetailScreen: React.FC<ExerciseDetailProps> = ({ exercise, onClose }) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>{exercise.name}</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={[styles.closeButtonText, { color: colors.primary }]}>Đóng</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.description, { color: colors.text }]}>{exercise.description}</Text>

      <Text style={[styles.detailsText, { color: colors.muted }]}>
        Mức độ: {exercise.difficulty}
      </Text>
      <Text style={[styles.detailsText, { color: colors.muted }]}>
        Nhóm cơ: {exercise.muscleGroups.join(", ")}
      </Text>

      {exercise.isForWeightLoss && (
        <Text style={[styles.detailsText, { color: colors.muted }]}>Mục tiêu: Giảm cân</Text>
      )}
      {exercise.isForWeightGain && (
        <Text style={[styles.detailsText, { color: colors.muted }]}>Mục tiêu: Tăng cân</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#222326", // màu xám đen
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
  closeButtonText: {
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default ExerciseDetailScreen;
