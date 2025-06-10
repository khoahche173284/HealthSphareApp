export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  caloriesBurned: number; // per session
  difficulty: "beginner" | "intermediate" | "advanced";
  imageUrl: string;
  videoUrl?: string;
  steps: string[];
  equipment: string[];
  muscleGroups: string[]; // sẽ là tiếng Việt
  isForWeightGain?: boolean;
  isForWeightLoss?: boolean;
}

export const exercises: Exercise[] = [
  {
    id: "1",
    name: "Ngồi xổm với trọng lượng cơ thể",
    description: "Bài tập cơ bản cho phần thân dưới, tác động đến nhiều nhóm cơ.",
    duration: 10,
    caloriesBurned: 100,
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    steps: [
      "Đứng thẳng, hai chân rộng bằng vai",
      "Hạ người xuống như ngồi trên ghế",
      "Giữ lưng thẳng và đầu gối không vượt quá mũi chân",
      "Trở lại tư thế đứng thẳng",
      "Lặp lại số lần mong muốn"
    ],
    equipment: ["none"],
    muscleGroups: ["đùi trước", "đùi sau", "mông", "cơ bụng"],
    isForWeightLoss: true,
    isForWeightGain: true
  },
  {
    id: "2",
    name: "Chống đẩy",
    description: "Bài tập thân trên cổ điển giúp phát triển ngực, vai và tay.",
    duration: 10,
    caloriesBurned: 100,
    difficulty: "intermediate",
    imageUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    steps: [
      "Bắt đầu ở tư thế plank, hai tay rộng hơn vai một chút",
      "Hạ thấp cơ thể cho đến khi ngực gần chạm sàn",
      "Giữ cơ thể thành một đường thẳng",
      "Đẩy người lên trở lại vị trí ban đầu",
      "Lặp lại số lần mong muốn"
    ],
    equipment: ["none"],
    muscleGroups: ["ngực", "vai", "tay sau", "cơ bụng"],
    isForWeightGain: true
  },
  {
    id: "3",
    name: "Bật nhảy tại chỗ (Jumping Jacks)",
    description: "Bài tập cardio toàn thân giúp tăng nhịp tim và đốt cháy calo.",
    duration: 10,
    caloriesBurned: 100,
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    steps: [
      "Đứng thẳng, hai chân khép, hai tay xuôi theo thân",
      "Bật nhảy, đồng thời dang rộng hai chân và đưa hai tay qua đầu",
      "Nhảy lần nữa để trở về tư thế ban đầu",
      "Lặp lại động tác với tốc độ nhanh"
    ],
    equipment: ["none"],
    muscleGroups: ["toàn thân", "tim mạch"],
    isForWeightLoss: true
  },
  {
    id: "4",
    name: "Plank (Chống tay giữ thân người thẳng)",
    description: "Bài tập isometric cho cơ core giúp tăng sức mạnh và sự ổn định.",
    duration: 5,
    caloriesBurned: 40,
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    steps: [
      "Bắt đầu ở tư thế chống đẩy nhưng chống bằng cẳng tay",
      "Giữ cơ thể thành một đường thẳng từ đầu đến gót chân",
      "Siết cơ bụng và giữ nguyên tư thế",
      "Giữ trong thời gian mong muốn"
    ],
    equipment: ["none"],
    muscleGroups: ["cơ bụng", "vai", "lưng"],
    isForWeightLoss: true,
    isForWeightGain: true
  },
  {
    id: "5",
    name: "Chùng chân (Lunges)",
    description: "Bài tập thân dưới giúp phát triển cơ chân và cải thiện thăng bằng.",
    duration: 10,
    caloriesBurned: 90,
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    steps: [
      "Đứng thẳng, hai chân rộng bằng hông",
      "Bước một chân về phía trước",
      "Hạ thấp cơ thể cho đến khi cả hai đầu gối tạo thành góc 90 độ",
      "Đẩy người trở lại vị trí ban đầu",
      "Đổi chân và lặp lại"
    ],
    equipment: ["none"],
    muscleGroups: ["đùi trước", "đùi sau", "mông", "bắp chân"],
    isForWeightLoss: true
  },
  {
    id: "6",
    name: "Kéo tạ đơn (Dumbbell Rows)",
    description: "Bài tập kéo thân trên giúp tăng sức mạnh lưng.",
    duration: 15,
    caloriesBurned: 120,
    difficulty: "intermediate",
    imageUrl: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    steps: [
      "Cầm một quả tạ đơn ở mỗi tay",
      "Gập người về phía trước, hơi khuỵu gối",
      "Giữ lưng thẳng và siết cơ bụng",
      "Kéo tạ lên hai bên sườn",
      "Hạ tạ xuống có kiểm soát và lặp lại"
    ],
    equipment: ["tạ đơn"],
    muscleGroups: ["lưng", "tay trước", "vai"],
    isForWeightGain: true
  },
  {
    id: "7",
    name: "Burpees",
    description: "Bài tập toàn thân cường độ cao giúp tăng sức bền và sức mạnh.",
    duration: 10,
    caloriesBurned: 150,
    difficulty: "advanced",
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    steps: [
      "Đứng thẳng",
      "Ngồi xổm xuống và đặt hai tay xuống sàn",
      "Đá hai chân ra sau vào tư thế plank",
      "Chống đẩy một cái (tùy chọn)",
      "Thu chân về tư thế ngồi xổm",
      "Bật nhảy lên cao, hai tay vươn qua đầu"
    ],
    equipment: ["none"],
    muscleGroups: ["toàn thân", "tim mạch"],
    isForWeightLoss: true
  },
  {
    id: "8",
    name: "Đẩy ngực với ghế (Bench Press)",
    description: "Bài tập sức mạnh cổ điển giúp phát triển cơ ngực.",
    duration: 15,
    caloriesBurned: 150,
    difficulty: "intermediate",
    imageUrl: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    steps: [
      "Nằm trên ghế, hai chân đặt vững trên sàn",
      "Nắm thanh tạ rộng hơn vai một chút",
      "Hạ thanh tạ xuống giữa ngực một cách kiểm soát",
      "Đẩy thanh tạ lên cho đến khi tay duỗi thẳng",
      "Lặp lại số lần mong muốn"
    ],
    equipment: ["ghế", "thanh tạ", "đĩa tạ"],
    muscleGroups: ["ngực", "vai", "tay sau"],
    isForWeightGain: true
  }
];