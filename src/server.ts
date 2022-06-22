import Express, { Request, Response} from "express";
const PORT = 3000
const app = Express()

app.get('/ping', (req:Request, res:Response) => {
    return res.send('<h1>/pong</h1>')
})

app.listen(PORT, () => console.log(`ta rodando na porta ${PORT}`))