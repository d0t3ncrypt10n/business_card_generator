import express from 'express';
import {
  createCard,
  getCards,
  getCardById,
  updateCard,
  deleteCard,
  getPublicCard,
  incrementCardView,
  incrementCardShare
} from '../controllers/cardController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateCard } from '../middleware/validation.js';

const router = express.Router();

router.route('/')
  .post(protect, validateCard, createCard)
  .get(protect, getCards);

router.route('/:id')
  .get(protect, getCardById)
  .put(protect, validateCard, updateCard)
  .delete(protect, deleteCard);

router.get('/public/:id', getPublicCard);
router.post('/public/:id/view', incrementCardView);
router.post('/public/:id/share', incrementCardShare);

export default router;
