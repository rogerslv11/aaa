/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BriefingData {
  // Paso 1: Diagnóstico de la Web Actual & Datos de Contacto
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  cityCountry: string;
  projectType: 'full_redesign' | 'ux_restructuring' | 'mobile_speed_upgrade' | 'cms_migration' | 'new_site';
  currentWebsite: string;
  currentPlatform: string;
  currentWebsiteAge: string;

  // Paso 2: Auditoría de Problemas & Frustraciones Actuales
  currentPainPoints: string[];
  satisfactionRating: number;
  biggestFrustration: string;
  businessDescription: string;
  targetAudience: string;
  competitiveDifferential: string;

  // Paso 3: Qué Mantener vs Qué Reestructurar & Accesos
  assetsToKeep: string[];
  technicalAccessStatus: 'has_all_access' | 'needs_migration_help' | 'start_from_scratch';
  restructuringArchitecture: 'one_page_funnel' | 'multi_page_corporate' | 'lead_generation' | 'catalog_ecommerce';

  // Paso 4: Objetivos del Rediseño, Nueva Identidad & Referencias
  redesignGoals: string[];
  brandTone: string;
  colorPaletteChoice: string;
  hasLogo: 'yes' | 'no' | 'needs_redesign';
  competitorWebsites: string;
  referenceWebsites: string;

  // Paso 5: Nueva Estructura de Secciones & Módulos
  desiredSections: string[];
  specialIntegrations: string[];
  specialFeaturesNotes: string;

  // Paso 6: Plan de Rediseño, Complementos & Checkout
  selectedPlan: 'essential' | 'professional' | 'elite';
  addons: {
    migrationSeoRedirects: boolean;
    seoContentPackage: boolean;
    speedOptimizationScore95: boolean;
    expressDelivery24h: boolean;
    monthlyMaintenance: boolean;
  };

  // Paso 7: Pago
  paymentMethod: 'card' | 'bizum' | 'paypal' | 'whatsapp';
  cardDetails: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
  };
}
