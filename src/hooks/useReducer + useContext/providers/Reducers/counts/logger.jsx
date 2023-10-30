export const ReducerLogger = (reducer) => {
  return (prevState, action) => {
    // Action start time in milliseconds
    const startPerformanceTime = performance.now();

    const { type, payload } = action;

    const logStyles = {
      action: 'color: gray; font-weight: bold;',
      prevState: 'color: #9E9E9E; font-weight: bold;',
      actionData: 'color: #03A9F4; font-weight: bold;',
      nextState: 'color: #4CAF50; font-weight: bold;',
      date: 'color: #b817a0; font-weight: bold;',
      time: 'color: #FFC107; font-weight: bold;',
    };

    console.group(`%c Action %c ${type}`, logStyles.action, 'color: black; font-weight: bold;');
    console.log(`%c Previous State`, logStyles.prevState, prevState);
    console.log(`%c Action`, logStyles.actionData, payload);

    const newState = reducer(prevState, action);

    console.log(`%c Next State`, logStyles.nextState, newState);
    const endTime = new Date();

    // Action end  time in milliseconds
    const endPerformanceTime = performance.now();

    // Action start time in milliseconds
    const executionTime = endPerformanceTime - startPerformanceTime;

    const logDate = {
      // Date full
      date: `${endTime.toLocaleDateString()} ${endTime.toLocaleTimeString()}`,

      // Action execution time
      executionTime: `${executionTime.toFixed(3)} ms`,
    };

    console.log(`%c Date`, logStyles.date, `${logDate.date}`);

    console.log(`%c Execution Time`, logStyles.time, `${logDate.executionTime}`);
    console.groupEnd();

    return newState;
  };
};
