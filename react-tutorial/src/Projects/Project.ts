export class Project {
    id: number | undefined;
    name: string = '';
    description: string = '';
    imageUrl: string = '';
    contractTypeId: number | undefined;
    contractSignedOn: Date = new Date();
    budget: number = 0;
    isActive: boolean = false;
    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if (!initializer) return;
        this.id = initializer?.id;
        this.name = initializer?.name;
        this.description = initializer?.description;
        this.imageUrl = initializer?.imageUrl;
        this.contractTypeId = initializer?.contractTypeId;
        this.contractSignedOn = new Date(initializer?.contractSignedOn);
        this.budget = initializer?.budget;
        this.isActive = initializer?.isActive;
    }
}