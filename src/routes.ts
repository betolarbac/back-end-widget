import express from 'express';
import { NodemailermailAdapter } from './adapters/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUsecase } from './use-cases/submit-feedback-use-case';


export const routes = express.Router();


routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailermailAdapter

    const submitFeedUseCase = new SubmitFeedbackUsecase(prismaFeedbacksRepository, nodemailerMailAdapter)

    await submitFeedUseCase.execute({
        type,
        comment,
        screenshot,
    })

//  
    return res.status(201).send()
})