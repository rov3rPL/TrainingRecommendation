import { MoodEnum } from "./Enums/MoodEnum";
import { GoalEnum } from "./Enums/GoalEnum";
import { DutiesAfterEnum } from "./Enums/DutiesAfterEnum";
import { LastActivities } from "./Enums/LastActivitiesEnum";

export class AnswersObject {
    Mood!: MoodEnum;
    Goal!: GoalEnum;
    LastActivities!: LastActivities;
    DutiesAfter!: DutiesAfterEnum;
    EnergyLevel!: number;
}