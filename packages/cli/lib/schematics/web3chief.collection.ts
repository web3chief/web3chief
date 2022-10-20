import { AbstractRunner } from '../runners';
import { AbstractCollection } from './abstract.collection';
import { SchematicOption } from './schematic.option';

export interface Schematic {
    name: string;
    alias: string;
    description: string;
}

export enum Semantics {
    DEFAULT_APP = 'default-app'
}

export class Web3ChiefCollection extends AbstractCollection {
    private static schematics: Schematic[] = [
        {
            name: Semantics.DEFAULT_APP,
            alias: Semantics.DEFAULT_APP,
            description: 'Generate a new default application workspace',
        }
    ];

    constructor(runner: AbstractRunner) {
        super('@web3chief/schematics', runner);
    }

    public async execute(name: string, options: SchematicOption[]) {
        const schematic: string = this.validate(name);
        await super.execute(schematic, options);
    }

    public static getSchematics(): Schematic[] {
        return Web3ChiefCollection.schematics.filter(
            (item) => item.name !== 'angular-app',
        );
    }

    private validate(name: string) {
        const schematic = Web3ChiefCollection.schematics.find(
            (s) => s.name === name || s.alias === name,
        );

        if (schematic === undefined || schematic === null) {
            throw new Error(
                `Invalid schematic "${name}". Please, ensure that "${name}" exists in this collection.`,
            );
        }
        return schematic.name;
    }
}
