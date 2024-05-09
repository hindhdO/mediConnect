import mongoose from "mongoose";

// Définition du schéma de réservation dans MongoDB utilisant Mongoose
const bookingSchema = new mongoose.Schema(
  {
    // Référence au médecin associé à cette réservation
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor", // Lien avec le modèle Doctor
      required: true, // Le champ est obligatoire
    },
    // Référence à l'utilisateur qui a effectué la réservation
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User", // Lien avec le modèle User
      required: true, // Le champ est obligatoire
    },
    // Prix du ticket pour cette réservation
    ticketPrice: { type: String, required: true },
    // Date et heure de la réservation
    appointmentDate: {
      type: Date,
      required: true,
    },
    // Statut de la réservation (en attente, approuvée, annulée)
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"], // Statuts possibles de la réservation
      default: "pending", // Statut par défaut est en attente
    },
    // Indique si la réservation a été payée ou non
    isPaid: {
      type: Boolean,
      default: true, // Par défaut, la réservation est considérée comme payée
    },
  },
  // Ajout des horodatages pour suivre automatiquement les dates de création et de mise à jour
  { timestamps: true }
);

// Exportation du modèle Booking avec le schéma défini
export default mongoose.model("Booking", bookingSchema);
