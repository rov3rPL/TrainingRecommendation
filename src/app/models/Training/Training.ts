import { ExcersisteItem } from "./ExcersiseItem";

export class Training {

    constructor(
        public Title?: string,
        public TrainingType?: number,
        public WarmUp?: ExcersisteItem[],
        public Excersises?: ExcersisteItem[],
        public Ending?: ExcersisteItem[]
    ) {}

}
