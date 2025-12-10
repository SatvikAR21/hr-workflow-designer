import { apiGet, apiPost } from './client'

export const getAutomations = () => apiGet('/automations')

export const simulateWorkflow = (json) =>
  apiPost('/simulate', json)
