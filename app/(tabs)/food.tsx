import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { Search, Filter } from "lucide-react-native";

import { useColorScheme } from "../../hooks/useColorScheme";
import Colors from "../../constants/colors";
import { useUserStore } from "../../store/userStore";
import { vietnameseFoods, FoodItem } from "../../mocks/vietnameseFoods";
import FoodCard from "../../components/FoodCard";

export default function FoodScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  const { profile } = useUserStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredFoods = useMemo(() => {
    return vietnameseFoods.filter((food) => {
      const matchesSearch =
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory = selectedCategory
        ? food.category === selectedCategory
        : true;

      let matchesGoal = true;
      if (selectedFilter === "weightLoss") matchesGoal = !!food.isForWeightLoss;
      else if (selectedFilter === "weightGain")
        matchesGoal = !!food.isForWeightGain;

      return matchesSearch && matchesCategory && matchesGoal;
    });
  }, [searchQuery, selectedCategory, selectedFilter]);

  const categories = [
    { id: "breakfast", label: "Sáng" },
    { id: "lunch", label: "Trưa" },
    { id: "dinner", label: "Tối" },
    { id: "snack", label: "Ăn nhẹ" },
  ];

  const filters = [
    { id: null, label: "Tất cả" },
    { id: "weightLoss", label: "Giảm cân" },
    { id: "weightGain", label: "Tăng cân" },
  ];

  const renderFoodItem = ({ item }: { item: FoodItem }) => (
    <FoodCard food={item} />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          Thực phẩm Việt Nam
        </Text>
        <Text style={[styles.subtitle, { color: colors.muted }]}>
          Khám phá các món ăn phù hợp với mục tiêu của bạn
        </Text>
      </View>

      {/* Search bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
        <Search size={20} color={colors.muted} />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Tìm kiếm món ăn..."
          placeholderTextColor={colors.muted}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Category selector */}
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  { backgroundColor: isActive ? colors.primary : colors.card },
                ]}
                onPress={() =>
                  setSelectedCategory(isActive ? null : category.id)
                }
              >
                <Text
                  style={[
                    styles.categoryText,
                    { color: isActive ? "white" : colors.text },
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Filter by goal */}
      <View style={styles.filtersContainer}>
        <View style={styles.filterHeader}>
          <View style={styles.filterTitleContainer}>
            <Filter size={16} color={colors.muted} />
            <Text style={[styles.filterTitle, { color: colors.text }]}>
              Lọc theo mục tiêu
            </Text>
          </View>
          <View style={styles.filterButtons}>
            {filters.map((filter) => {
              const isActive = selectedFilter === filter.id;
              return (
                <TouchableOpacity
                  key={filter.id ?? "all"}
                  style={[
                    styles.filterButton,
                    {
                      backgroundColor: isActive ? colors.primary : "transparent",
                      borderColor: colors.border,
                    },
                  ]}
                  onPress={() => setSelectedFilter(filter.id)}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      { color: isActive ? "white" : colors.text },
                    ]}
                  >
                    {filter.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      {/* Food list */}
      <FlatList
        data={filteredFoods}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.foodGrid}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.muted }]}>
              Không tìm thấy món ăn phù hợp
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    fontWeight: "500",
  },
  filtersContainer: {
    marginBottom: 16,
  },
  filterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  filterTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
  },
  filterButtons: {
    flexDirection: "row",
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    marginLeft: 8,
  },
  filterButtonText: {
    fontSize: 12,
    fontWeight: "500",
  },
  foodGrid: {
    justifyContent: "space-between",
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
  },
});
