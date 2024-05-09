import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// Fonction pour obtenir toutes les critiques
export const getAllReviews = async (req, res) => {
    try {
        // Récupérer toutes les critiques de la base de données
        const reviews = await Review.find({});
        // Répondre avec les critiques récupérées
        res.status(200).json({ success: true, message: 'Successfully retrieved all reviews', data: reviews });
    } catch (error) {
        // Si une erreur se produit, renvoyer un message d'erreur avec le code de statut 404
        res.status(404).json({ success: false, message: 'Not found', error: error.message });
    }
}

// Fonction pour créer une critique
export const createReview = async (req, res) => {
    // Si le corps de la requête ne contient pas de champ 'doctor', utilisez le paramètre de l'URL 'doctorId'
    if (!req.body.doctor) {
        req.body.doctor = req.params.doctorId;
    }
    // Si le corps de la requête ne contient pas de champ 'user', utilisez le paramètre de l'URL 'userId'
    if (!req.body.user) {
        req.body.user = req.params.userId;
    }

    // Créer une nouvelle instance de la critique en utilisant les données de la requête
    const newReview = new Review(req.body);
    try {
        // Enregistrer la nouvelle critique dans la base de données
        const savedReview = await newReview.save();

        // Mettre à jour le document du médecin associé avec l'ID de la nouvelle critique
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id } // Ajouter l'ID de la critique au tableau 'reviews' du médecin
        }, { new: true, runValidators: true });

        // Vérifier si le médecin a été mis à jour avec succès
        if (!updatedDoctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        // Répondre avec un message de succès et les données de la critique nouvellement créée
        res.status(200).json({ success: true, message: "Review submitted", data: savedReview });
    } catch (error) {
        // Si une erreur se produit lors de la création de la critique, renvoyer un message d'erreur avec le code de statut 500
        res.status(500).json({ success: false, message: error.message });
    }
}
