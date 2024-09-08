import { Router } from "express"

const router = Router();

//---------------------- LISTADO CLIENTES

router.get('/list', async(req, res)=>{
    try {
        res.render('clientes/list');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});
//---------------------- LISTADO PRODUCTOS
router.get('/productos/list', async(req, res)=>{
    try {
        res.render('productos/list');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

//---------------------- LISTADO CATEGORIAS
router.get('/categoria/list', async(req, res)=>{
    try {
        res.render('categoria/list');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

//---------------------- AGREGAR CLIENTES

router.get('/add', async(req, res)=>{
    try {
        res.render('clientes/add');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/add', async(req, res)=>{
    try {
        res.redirect('/list');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});
//---------------------- AGREGAR PRODUCTOS
router.get('/agregarProducto', async(req, res)=>{
    try {
        res.render('productos/agregarProducto');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/agregarProducto', async (req, res) => {
    try {
        res.status(200).json({ message: 'Producto agregado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//---------------------- AGREGAR CATEGORIA
router.get('/agregarCategoria', async(req, res)=>{
    try {
        res.render('categoria/agregarCategoria');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/agregarCategoria', async (req, res) => {
    try {
        res.status(200).json({ message: 'Categoria agregado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//---------------------- EDITAR CLIENTES

router.get('/edit', async(req, res)=>{
    try {
        res.render('clientes/edit');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/edit', async(req, res)=>{
    try {
        res.redirect('/list');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

//---------------------- EDITAR PRODUCTOS

router.get('/editarProductos', async(req, res)=>{
    try {
        res.render('productos/editarProducto');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/editarProductos', async(req, res)=>{
    try {
        res.redirect('productos/list');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

//---------------------- EDITAR CATEGORIA

router.get('/editarCategoria', async(req, res)=>{
    try {
        res.render('categoria/editarCategoria');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/editarCategoria', async(req, res)=>{
    try {
        res.redirect('categoria/list');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});

export default router;