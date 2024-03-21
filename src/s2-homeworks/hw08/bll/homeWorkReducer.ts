import { UserType } from '../HW8';

type ActionType = { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    // need to fix any
    const sortFunc = (name1: UserType, name2: UserType) => name1.name.localeCompare(name2.name);
    switch (action.type) {
        case 'sort': {
            // by name
            if (action.payload === 'up') {
                state.sort((a, b) => sortFunc(a, b));
                return [...state];
            } else {
                state.sort((a, b) => sortFunc(b, a));
                return [...state];
            }
        }
        case 'check': {
            return state.filter((item) => item.age >= action.payload).sort((a, b) => -1);
        }
        default:
            return state;
    }
};
