import { Prisma } from '@prisma/client'

export type EducationForm = Prisma.EducationFormGetPayload<{
	include: { groups: true }
}>
export type Faculty = Prisma.FacultyGetPayload<{ include: { groups: true } }>
export type Course = Prisma.CourseGetPayload<{ include: { groups: true } }>
export type Group = Prisma.GroupGetPayload<{
	include: { course: true; educationForm: true; faculty: true; schedules: true }
}>
export type WeekDay = Prisma.WeekDayGetPayload<{ include: { schedules: true } }>
export type WeekType = Prisma.WeekTypeGetPayload<{
	include: { schedules: true }
}>
export type Time = Prisma.TimeGetPayload<{ include: { schedules: true } }>
export type Subject = Prisma.SubjectGetPayload<{ include: { schedules: true } }>
export type SubjectType = Prisma.SubjectTypeGetPayload<{
	include: { schedules: true }
}>
export type Teacher = Prisma.TeacherGetPayload<{ include: { schedules: true } }>
export type Auditorium = Prisma.AuditoriumGetPayload<{
	include: { schedules: true; building: true }
}>
export type Building = Prisma.BuildingGetPayload<{
	include: { auditories: true }
}>
export type Schedule = Prisma.ScheduleGetPayload<{
	include: {
		auditorium: true
		groups: true
		subject: true
		subjectType: true
		teacher: true
		time: true
		weekDay: true
		weekType: true
	}
}>
export type SchedulesOnGroups = Prisma.SchedulesOnGroupsGetPayload<{
	include: { group: true; schedule: true }
}>
export type Exam = Prisma.ExamGetPayload<{}>
export type News = Prisma.NewsGetPayload<{}>
