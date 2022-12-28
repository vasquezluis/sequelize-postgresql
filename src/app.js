import express from 'express'

import projectRoutes from './routes/projects.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

const app = express()

// middlewares
app.use(express.json())

app.use(projectRoutes)
app.use(tasksRoutes)

export default app;