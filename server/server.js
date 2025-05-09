const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const DB_PATH = './bd.json';

// Función para leer el archivo JSON
const readDB = () => {
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
};

// Función para escribir en el archivo JSON
const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};


// GET para obtener los datos de la pantalla inicial
app.get('/gapsi/api/perfil', (req, res) => {
    const data ={"perfil":"“Bienvenido Candidato 01", "version": "1.0.0.1"};
    
    res.json(data);
  });

// GET todos los elementos
app.get('/gapsi/api/proveedores', (req, res) => {
  const items = readDB();
  res.json(items);
});

// POST nuevo elemento
app.post('/gapsi/api/proveedores/saveProfile', (req, res) => {
  const items = readDB();
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  writeDB(items);
  res.status(201).json(newItem);
});

// PUT actualizar un elemento
app.put('/gapsi/api/proveedores/:id', (req, res) => {
  const id = Number(req.params.id);
  const items = readDB();
  const index = items.findIndex(item => item.id === id);

  if (index === -1) return res.status(404).json({ error: 'Item no encontrado' });

  items[index] = { ...items[index], ...req.body };
  writeDB(items);
  res.json(items[index]);
});

// DELETE eliminar un elemento
app.delete('/gapsi/api/proveedores/:id', (req, res) => {
  const id = Number(req.params.id);
  const items = readDB();
  const filtered = items.filter(item => item.id !== id);

  if (items.length === filtered.length) return res.status(404).json({ error: 'Item no encontrado' });

  writeDB(filtered);
  res.json({ message: 'Item eliminado' });
});

// Iniciar servidor
app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});

