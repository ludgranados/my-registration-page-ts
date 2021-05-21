type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id?: string | number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type InitialStateType = {
    members: User[];
    member: User | undefined;
    getMembers: () => void;
    addMember: (member: User) => void;
};