import { SubmitFeedbackUsecase } from "./submit-feedback-use-case";

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUsecase(
            { create: async () => {} },
            { sendMail: async () =>{} }
        )

    await  expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'exemple commemt',

        })).resolves.not.toThrow();
    }); 
});