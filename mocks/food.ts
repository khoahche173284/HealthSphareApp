export interface FoodItem {
    id: string;
    name: string;
    calories: number; // per serving
    protein: number; // in grams
    carbs: number; // in grams
    fat: number; // in grams
    servingSize: string;
    imageUrl: string;
    category: "breakfast" | "lunch" | "dinner" | "snack";
    tags: string[];
    isForWeightGain?: boolean;
    isForWeightLoss?: boolean;
  }
  
  export const vietnameseFoods: FoodItem[] = [
    {
      id: "1",
      name: "Phở Bò",
      calories: 400,
      protein: 25,
      carbs: 50,
      fat: 10,
      servingSize: "1 bowl (500g)",
      imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      category: "breakfast",
      tags: ["soup", "beef", "noodles"],
      isForWeightLoss: true,
    },
    {
      id: "2",
      name: "Bánh Mì Thịt",
      calories: 350,
      protein: 15,
      carbs: 40,
      fat: 12,
      servingSize: "1 sandwich (200g)",
      imageUrl: "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      category: "breakfast",
      tags: ["sandwich", "pork", "bread"],
      isForWeightGain: true,
    },
    {
      id: "3",
      name: "Cơm Tấm Sườn Nướng",
      calories: 650,
      protein: 30,
      carbs: 80,
      fat: 20,
      servingSize: "1 plate (400g)",
      imageUrl: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "lunch",
      tags: ["rice", "pork", "grilled"],
      isForWeightGain: true,
    },
    {
      id: "4",
      name: "Gỏi Cuốn",
      calories: 150,
      protein: 10,
      carbs: 20,
      fat: 2,
      servingSize: "2 rolls (100g)",
      imageUrl: "https://images.unsplash.com/photo-1562967915-92ae0c320a01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      category: "snack",
      tags: ["fresh", "shrimp", "rolls"],
      isForWeightLoss: true,
    },
    {
      id: "5",
      name: "Bún Chả",
      calories: 450,
      protein: 25,
      carbs: 55,
      fat: 15,
      servingSize: "1 bowl (400g)",
      imageUrl: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "lunch",
      tags: ["noodles", "pork", "grilled"],
      isForWeightLoss: true,
    },
    {
      id: "6",
      name: "Cháo Gà",
      calories: 250,
      protein: 15,
      carbs: 35,
      fat: 5,
      servingSize: "1 bowl (300g)",
      imageUrl: "https://images.unsplash.com/photo-1626201850129-a96d35a27eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "breakfast",
      tags: ["porridge", "chicken", "comfort food"],
      isForWeightLoss: true,
    },
    {
      id: "7",
      name: "Bò Kho",
      calories: 500,
      protein: 30,
      carbs: 40,
      fat: 20,
      servingSize: "1 bowl (450g)",
      imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "dinner",
      tags: ["stew", "beef", "hearty"],
      isForWeightGain: true,
    },
    {
      id: "8",
      name: "Canh Chua Cá",
      calories: 200,
      protein: 18,
      carbs: 15,
      fat: 5,
      servingSize: "1 bowl (300g)",
      imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "dinner",
      tags: ["soup", "fish", "sour"],
      isForWeightLoss: true,
    },
    {
      id: "9",
      name: "Xôi Gà",
      calories: 550,
      protein: 25,
      carbs: 70,
      fat: 15,
      servingSize: "1 plate (350g)",
      imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "breakfast",
      tags: ["sticky rice", "chicken", "filling"],
      isForWeightGain: true,
    },
    {
      id: "10",
      name: "Chè Đậu Xanh",
      calories: 180,
      protein: 5,
      carbs: 35,
      fat: 2,
      servingSize: "1 cup (200g)",
      imageUrl: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "snack",
      tags: ["dessert", "sweet", "beans"],
      isForWeightGain: true,
    },
    {
      id: "11",
      name: "Bún Bò Huế",
      calories: 550,
      protein: 30,
      carbs: 60,
      fat: 20,
      servingSize: "1 bowl (500g)",
      imageUrl: "https://images.unsplash.com/photo-1576644461179-ddd318c669e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "lunch",
      tags: ["spicy", "beef", "noodles"],
      isForWeightGain: true,
    },
    {
      id: "12",
      name: "Rau Muống Xào Tỏi",
      calories: 100,
      protein: 3,
      carbs: 10,
      fat: 5,
      servingSize: "1 plate (200g)",
      imageUrl: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "dinner",
      tags: ["vegetable", "stir-fry", "garlic"],
      isForWeightLoss: true,
    },
  ];
  
  /**
   * Get foods filtered by category
   * @param {string} category - Food category to filter by
   * @returns {FoodItem[]} Filtered food items
   */
  export const getFoodsByCategory = (category: string): FoodItem[] => {
    return vietnameseFoods.filter(food => food.category === category);
  };
  
  /**
   * Get foods filtered by weight goal
   * @param {string} goal - "gain" or "lose"
   * @returns {FoodItem[]} Filtered food items
   */
  export const getFoodsByGoal = (goal: string): FoodItem[] => {
    if (goal === "gain") {
      return vietnameseFoods.filter(food => food.isForWeightGain);
    } else if (goal === "lose") {
      return vietnameseFoods.filter(food => food.isForWeightLoss);
    }
    return vietnameseFoods;
  };
  
  /**
   * Get foods filtered by tag
   * @param {string} tag - Tag to filter by
   * @returns {FoodItem[]} Filtered food items
   */
  export const getFoodsByTag = (tag: string): FoodItem[] => {
    return vietnameseFoods.filter(food => food.tags.includes(tag));
  };