import { rest } from 'msw'

const automations = [
  { id: 'send_email', label: 'Send Email', params: ['to', 'subject'] },
  { id: 'generate_doc', label: 'Generate Document', params: ['template'] }
]

export const handlers = [
  rest.get('/automations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(automations))
  }),

  rest.post('/simulate', async (req, res, ctx) => {
    const body = await req.json()
    const nodes = body.nodes || []

    const log = nodes.map((n, i) => `Step ${i + 1}: ${n.type} - ${n.data.title || "Untitled"}`)

    return res(ctx.status(200), ctx.json({ log }))
  })
]
