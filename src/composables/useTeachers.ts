import { ref, onMounted } from "vue";

interface Teacher {
  id: number;
  name: string;
  title: string;
  photo?: string;
  email: string;
  research: string[];
}

export function useTeachers() {
  const teachers = ref<Teacher[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const fetchTeachers = async () => {
    try {
      // 这里可以替换为实际的API调用
      const response = await fetch("/api/teachers");
      const data = await response.json();
      teachers.value = data;
    } catch (e) {
      error.value = "获取教师数据失败";
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchTeachers);

  return {
    teachers,
    loading,
    error,
  };
}
