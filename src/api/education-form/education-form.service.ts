import { type EducationForm } from '@prisma/client'
import { prisma } from '../../db'

class EducationFormService {
	getAll = async (): Promise<EducationForm[]> => {
		return await prisma.educationForm.findMany()
	}

	createEducationForm = async (
		educationFormName: string,
	): Promise<EducationForm> => {
		const fondedEducationFormByName = await prisma.educationForm.findFirst({
			where: {
				name: educationFormName,
			},
		})

		if (fondedEducationFormByName != null) {
			throw new Error(
				`Education form with the name "${educationFormName}" already exists`,
			)
		}

		const createdEducationForm = await prisma.educationForm.create({
			data: {
				name: educationFormName,
			},
		})

		return createdEducationForm
	}
}

export const educationFormService = new EducationFormService()
