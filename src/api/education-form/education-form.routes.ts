import express from 'express'

import { educationFormController } from './education-form.controller'

const router = express.Router()

// Route: /api/education_forms
router
	.route('/')
	.get(educationFormController.getAll)
	.post(educationFormController.createEducationForm)

export { router }