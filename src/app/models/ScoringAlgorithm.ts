import { ScoringObject } from "./ScoringObject";
import { Training } from "./Training/Training";

export class Score {
    constructor(public name: string, public value: number) {}
}

export class ScoringResult {
    constructor(public scores: Score[], public finalScore: number) {}
}

export class ScoringAlgorithm {    

    public static score(training: Training, scoringObject: ScoringObject) : ScoringResult {

        let parts: Score[] = [];

        parts.push({ 
            name: "TrainingTypeScore",
            value: ScoringAlgorithm.getTrainingTypeScore(training, scoringObject.trainingTypeMatrix)
        });
        parts.push({
            name: "WarmUpScore",
            value: ScoringAlgorithm.getWarmUpScore(training, scoringObject.warmUpTypeMatrix)
        });
        parts.push({
            name: "EpocScore",
            value: ScoringAlgorithm.getEpocScore(training, scoringObject.epocMatrix)
        });
        parts.push({
            name: "IntensityScore",
            value: ScoringAlgorithm.getIntensityScore(training, scoringObject.intensityLevelMatrix)
        });

        let final: number = parts.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0) / parts.length;

        return new ScoringResult(parts, final);
    }

    private static getTrainingTypeScore(training: Training, trainingTypeMatrix: number[]): number {
        return trainingTypeMatrix[training.TrainingType!];
    }

    private static getWarmUpScore(training: Training, warmUpTypeMatrix: number[]): number {
        
        let warmUpType = 0;
        // 0 brak rozgrzewki
        // 1 rozgrzewka
        // 2 rozgrzewka + rozruch
        if(training.WarmUp && training.WarmUp?.length > 0) {
            warmUpType = 1;
            if(training.WarmUp?.some(warmUpElement => warmUpElement.SetName?.toLowerCase() == 'rozruch')) {
                warmUpType = 2;
            }
        }

        return warmUpTypeMatrix[warmUpType];
    }

    private static getEpocScore(training: Training, epocMatrix: number[]): number {
        let averageEpoc: number = training.Excersises!.reduce((accumulator, currentValue) =>
            accumulator + currentValue.EPOC, 0) / training.Excersises!.length;

        return epocMatrix[Math.round(averageEpoc)];
    }

    private static getIntensityScore(training: Training, intensityLevelMatrix: number[]): number {
        let averageIntensity: number = training.Excersises!.reduce((accumulator, currentValue) =>
            accumulator + currentValue.IntensityLevel, 0) / training.Excersises!.length;

        return intensityLevelMatrix[Math.round(averageIntensity)];
    }
}


