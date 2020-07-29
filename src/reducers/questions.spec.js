import { questions} from './questions'

describe("The questions reducer", ()=> {
  it("should not modify the state", ()=> {
    const state = ["blue", "green"];
    const stateClone = ["blue", "green"];
    const newState = questions(state, {type: "GIBBERISH"});

    expect(newState).toEqual(stateClone);
    expect(newState).toBe(state);
  });

  it('should add new questions', ()=> {
    const state = [{question_id: "blue"}, {question_id: "green"}];
    const newQuestion = {question_id: "purple"}
    const newQuestionClone = {question_id: "purple"}
    const newState = questions(state, {type: 'FETCHED_QUESTION', question: newQuestion});

    expect(newState).toContain(newQuestion);
    expect(state).not.toContain(newQuestion);
    expect(newState).toHaveLength(3);
  })
});