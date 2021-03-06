import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./dto/create-task-status.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaksWithFilters(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
