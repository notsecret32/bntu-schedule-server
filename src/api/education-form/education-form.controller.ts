import { type Request, type Response } from 'express'
import asyncHandler from 'express-async-handler'
import { educationFormService } from './education-form.service'

const getAll = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const allEducationForms = await educationFormService.getAll()
    res.status(200).json(allEducationForms)
  },
)

const getById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const id: number = +req.params.id
      const foundedEducationFormById = await educationFormService.getById(id)

      if (foundedEducationFormById !== null) {
        res.status(200).json(foundedEducationFormById)
      }
    } catch (error) {
      res.status(404).json({ message: error.message })
      console.error(error)
    }
  },
)

const createEducationForm = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { name } = req.body as { name: string }
      const educationForm = await educationFormService.createEducationForm(name)
      res.status(200).json(educationForm)
    } catch (error) {
      res.status(400).json({ message: error.message })
      console.error(error)
    }
  },
)

export const educationFormController = {
  getAll,
  getById,
  createEducationForm,
}
