import mongoose from "mongoose";

// Définition du schéma Doctor dans MongoDB utilisant Mongoose
const DoctorSchema = new mongoose.Schema({
  // Informations de base pour l'authentification et le contact
  email: { type: String, required: true, unique: true }, // Email doit être unique et est requis
  password: { type: String, required: true }, // Mot de passe requis pour l'authentification
  name: { type: String, required: true }, // Nom du docteur, requis pour identification
  phone: { type: Number }, // Numéro de téléphone, pas obligatoirement requis
  photo: { type: String }, // Lien vers une photo de profil du docteur
  ticketPrice: { type: Number }, // Prix pour une consultation avec ce docteur
  role: { type: String }, // Rôle peut être utilisé pour distinguer différents types d'utilisateurs

  // Spécifique aux médecins
  specialization: { type: String }, // Spécialisation du médecin
  qualifications: { type: Array }, // Qualifications académiques ou professionnelles sous forme de tableau
  experiences: { type: Array }, // Expériences professionnelles sous forme de tableau
  bio: { type: String, maxLength: 50 }, // Biographie courte du médecin, avec une longueur maximale
  about: { type: String }, // Description détaillée du médecin
  timeSlots: { type: Array }, // Créneaux horaires disponibles pour les rendez-vous

  // Gestion des évaluations et des avis
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }], // Références aux avis laissés par les patients
  averageRating: { type: Number, default: 0 }, // Note moyenne, initialisée à 0
  totalRating: { type: Number, default: 0 }, // Score total des évaluations, initialisé à 0

  // Statut d'approbation du profil du docteur
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"], // Statuts possibles de l'approbation
    default: "pending", // Statut par défaut est en attente
  },

  // Rendez-vous liés au docteur
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }], // Références aux rendez-vous du médecin
});

// Exportation du modèle Doctor avec le schéma défini
export default mongoose.model("Doctor", DoctorSchema);
