import { educationFormController } from './education-form.controller'
import { router } from './education-form.routes'
import { educationFormService } from './education-form.service'

export const educationFormApi = {
  router,
  educationFormController,
  educationFormService,
}
