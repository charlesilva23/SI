import { z } from "zod"

export const createTicketSchema = z.string().min(1, "Campo Obrigatório")
