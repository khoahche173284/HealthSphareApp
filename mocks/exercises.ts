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
    muscleGroups: string[];
    isForWeightGain?: boolean;
    isForWeightLoss?: boolean;
  }
  
  export const exercises: Exercise[] = [
    {
      id: "1",
      name: "Bodyweight Squats",
      description: "A fundamental lower body exercise that targets multiple muscle groups.",
      duration: 10,
      caloriesBurned: 100,
      difficulty: "beginner",
      imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      steps: [
        "Stand with feet shoulder-width apart",
        "Lower your body as if sitting in a chair",
        "Keep your back straight and knees behind toes",
        "Return to standing position",
        "Repeat for desired repetitions"
      ],
      equipment: ["none"],
      muscleGroups: ["quadriceps", "hamstrings", "glutes", "core"],
      isForWeightLoss: true,
      isForWeightGain: true
    },
    {
      id: "2",
      name: "Push-ups",
      description: "Classic upper body exercise for building chest, shoulder, and arm strength.",
      duration: 10,
      caloriesBurned: 100,
      difficulty: "intermediate",
      imageUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      steps: [
        "Start in plank position with hands slightly wider than shoulders",
        "Lower your body until chest nearly touches the floor",
        "Keep your body in a straight line",
        "Push back up to starting position",
        "Repeat for desired repetitions"
      ],
      equipment: ["none"],
      muscleGroups: ["chest", "shoulders", "triceps", "core"],
      isForWeightGain: true
    },
    {
      id: "3",
      name: "Jumping Jacks",
      description: "Full-body cardio exercise to elevate heart rate and burn calories.",
      duration: 10,
      caloriesBurned: 100,
      difficulty: "beginner",
      imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      steps: [
        "Stand with feet together and arms at sides",
        "Jump while spreading legs and raising arms above head",
        "Jump again to return to starting position",
        "Repeat at a quick pace"
      ],
      equipment: ["none"],
      muscleGroups: ["full body", "cardiovascular"],
      isForWeightLoss: true
    },
    {
      id: "4",
      name: "Plank",
      description: "Isometric core exercise that builds strength and stability.",
      duration: 5,
      caloriesBurned: 40,
      difficulty: "beginner",
      imageUrl: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      steps: [
        "Start in push-up position but with forearms on the ground",
        "Keep body in straight line from head to heels",
        "Engage core and hold the position",
        "Hold for desired duration"
      ],
      equipment: ["none"],
      muscleGroups: ["core", "shoulders", "back"],
      isForWeightLoss: true,
      isForWeightGain: true
    },
    {
      id: "5",
      name: "Lunges",
      description: "Lower body exercise that targets legs and improves balance.",
      duration: 10,
      caloriesBurned: 90,
      difficulty: "beginner",
      imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      steps: [
        "Stand with feet hip-width apart",
        "Step forward with one leg",
        "Lower body until both knees are at 90-degree angles",
        "Push back to starting position",
        "Alternate legs and repeat"
      ],
      equipment: ["none"],
      muscleGroups: ["quadriceps", "hamstrings", "glutes", "calves"],
      isForWeightLoss: true
    },
    {
      id: "6",
      name: "Dumbbell Rows",
      description: "Upper body pulling exercise for back strength.",
      duration: 15,
      caloriesBurned: 120,
      difficulty: "intermediate",
      imageUrl: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      steps: [
        "Hold a dumbbell in each hand",
        "Hinge at hips with slight knee bend",
        "Keep back flat and core engaged",
        "Pull dumbbells up to sides of ribcage",
        "Lower with control and repeat"
      ],
      equipment: ["dumbbells"],
      muscleGroups: ["back", "biceps", "shoulders"],
      isForWeightGain: true
    },
    {
      id: "7",
      name: "Burpees",
      description: "High-intensity full-body exercise for cardio and strength.",
      duration: 10,
      caloriesBurned: 150,
      difficulty: "advanced",
      imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      steps: [
        "Start in standing position",
        "Drop into squat position and place hands on floor",
        "Kick feet back into plank position",
        "Perform a push-up (optional)",
        "Jump feet back to squat position",
        "Jump up explosively with arms overhead"
      ],
      equipment: ["none"],
      muscleGroups: ["full body", "cardiovascular"],
      isForWeightLoss: true
    },
    {
      id: "8",
      name: "Bench Press",
      description: "Classic strength exercise for chest development.",
      duration: 15,
      caloriesBurned: 150,
      difficulty: "intermediate",
      imageUrl: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      steps: [
        "Lie on bench with feet flat on floor",
        "Grip barbell slightly wider than shoulder width",
        "Lower bar to mid-chest with control",
        "Press bar up until arms are extended",
        "Repeat for desired repetitions"
      ],
      equipment: ["bench", "barbell", "weight plates"],
      muscleGroups: ["chest", "shoulders", "triceps"],
      isForWeightGain: true
    }
  ];