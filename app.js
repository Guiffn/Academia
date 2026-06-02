import http from 'node:http';
import cors from 'cors';
import express from 'express';

import alunoRoutes from './routes/alunoRoutes.js';
import planoRoutes from './routes/planoRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/planos', planoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});