import { Router } from 'express';

const router = Router();

/**
 * Product Routes
 */
router.get('/products', () => {})
router.get('/products/:id', () => {})
router.post('/products', () => {})
router.put('/products/:id', () => {})
router.delete('/products/:id', () => {})

/**
 * Update Routes
 */

router.get('/updates', () => {})
router.get('/updates/:id', () => {})
router.post('/updates', () => {})
router.put('/updates/:id', () => {})
router.delete('/updates/:id', () => {})

/**
 * UpdatePoints Routes
 */
 router.get('/updatepoints', () => {})
 router.get('/updatepoints/:id', () => {})
 router.post('/updatepoints', () => {})
 router.put('/updatepoints/:id', () => {})
 router.delete('/updatepoints/:id', () => {})

 export default router;