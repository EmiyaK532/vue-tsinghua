import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { teacherApi } from "@/api";
import type { Teacher } from "@/types/api";

export function useTeachers(type: number = 1) {
  const teachers = ref<Teacher[]>([]);
  const loading = ref(false);
  const error = ref("");

  const fetchTeachers = async () => {
    loading.value = true;
    error.value = "";
    try {
      const res = await teacherApi.getTeacherList(type);
      teachers.value = res.data.data;
    } catch (err) {
      console.error("获取教师列表失败:", err);
      error.value = "获取教师列表失败";
      ElMessage.error("获取教师列表失败");
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchTeachers();
  });

  return {
    teachers,
    loading,
    error,
    fetchTeachers,
  };
}
