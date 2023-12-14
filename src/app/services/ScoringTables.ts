import { Injectable } from '@angular/core';
import { Answer } from '../models/Answer';
import { AnswersObject } from '../models/AnswersObject';
import { ScoringObject } from '../models/ScoringObject';

@Injectable({
    providedIn: 'root',
})
export class ScoringTables {

    private treningTypeMatrix: number[][][] = [
        /* Zestresowany */
        [
            /* zrelaksowac się */
            [18, 7, 6, 4, 5, 9, 10], //TreningType - enum order
            /* pobudzić się */
            [7,	9, 10, 8, 5, 6,	4]
        ],
        /* Pełen energii */
        [
            /* zrelaksowac się */
            [8,	10,	9,	7,	5,	6,	4],
            /* pobudzić się */
            [7,	6,	5,	9,	8,	10,	4]
        ],
        /* Zmęczony */
        [
            /* zrelaksowac się */
            [7,	5,	4,	6,	8,	9,	10],
            /* pobudzić się */
            [8,	7,	6,	5,	9,	10,	4]
        ],
        /* Ospały */
        [
            /* zrelaksowac się */
            [8,	5,	4,	7,	10,	6,	9],
            /* pobudzić się */
            [9,	10,	8,	7,	5,	6,	4]
        ]
    ];

    /* normalnie 10 - every type (default) */

    private warmUpTypeMatrix: number[][] = [
        [8, 9, 10],
        [9, 10, 9],
        [10, 9, 8]
    ];

    private epocMatrix: any[][] = [
        [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [undefined, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8],
        [undefined, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6],
        [undefined, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4]
    ];

    private intensityLevelMatrix: any[][] = [
        [undefined],
        [undefined, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        [undefined, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2],
        [undefined, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3],
        [undefined, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4],
        [undefined, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5],
        [undefined, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6],
        [undefined, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7],
        [undefined, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8],
        [undefined, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9],
        [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    ]

    private getTreningTypeScoring(answers: AnswersObject) {
        return this.treningTypeMatrix[answers.Mood][answers.Goal];
    }

    private getWarmUpTypeScoring(answers: AnswersObject) {
        return this.warmUpTypeMatrix[answers.LastActivities];
    }

    private getEpocScoring(answers: AnswersObject) {
        return this.epocMatrix[answers.DutiesAfter];
    }

    private getIntensityLevelScoring(answers: AnswersObject) {
        return this.intensityLevelMatrix[answers.EnergyLevel];
    }

    public getScoringObject(answers: AnswersObject): ScoringObject {
        
        let scoringObject = new ScoringObject();
        scoringObject.trainingTypeMatrix = this.getTreningTypeScoring(answers);
        scoringObject.warmUpTypeMatrix = this.getWarmUpTypeScoring(answers);
        scoringObject.epocMatrix = this.getEpocScoring(answers);
        scoringObject.intensityLevelMatrix = this.getIntensityLevelScoring(answers);

        return scoringObject; 
    }

}
