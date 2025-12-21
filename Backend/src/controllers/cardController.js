import Card from '../models/Card.js';

export const createCard = async (req, res) => {
  try {
    const card = await Card.create({
      ...req.body,
      userId: req.user._id
    });
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCards = async (req, res) => {
  try {
    const cards = await Card.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    if (card.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    if (card.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updatedCard = await Card.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    if (card.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPublicCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id).populate('userId', 'name');
    
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const incrementCardView = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    // Increment view count
    card.views = (card.views || 0) + 1;
    await card.save();

    res.json({ views: card.views });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const incrementCardShare = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    // Increment share count
    card.shares = (card.shares || 0) + 1;
    await card.save();

    res.json({ shares: card.shares });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
