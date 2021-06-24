import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task-status.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto): Task;
}
