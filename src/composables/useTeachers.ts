import { ref, onMounted } from "vue";
import { teacherApi } from "@/api";
import type { Teacher } from "@/types/api";

export function useTeachers() {
  const teachers = ref<Teacher[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);
  const currentPage = ref(1);
  const pageSize = ref(10);
  const total = ref(0);

  const fetchTeachers = async () => {
    try {
      loading.value = true;
      const res = await teacherApi.getTeacherList({
        page: currentPage.value,
        pageSize: pageSize.value,
      });
      teachers.value = res.data.list;
      total.value = res.data.total;
    } catch (e) {
      error.value = "获取教师数据失败";
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchTeachers);

  return {
    teachers,
    loading,
    error,
    currentPage,
    pageSize,
    total,
    fetchTeachers,
  };
}
