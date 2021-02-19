import { increment, decrement, reset } from './counter.actions';
import { createReducer, on } from '@ngrx/store';


export const initState = 0;

// tslint:disable-next-line: variable-name
const _counterReducer = createReducer(
    initState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);

export function counterReducer(state, action): any {
    return _counterReducer(state, action);
}
