# Changelog — site-web-selarl-julie-samama-v2

## 2026-08-16 — Passe UX/UI & identité visuelle

| Page / fonction | Modification | Motif | Validation | KPI associé |
|---|---|---|---|---|
| Global | Refonte légère du système visuel : hiérarchie, espacements, cartes, CTA, focus clavier, responsive | Clarifier l’expérience et rapprocher le prototype de la charte web | Demande explicite de Julie le 16/08/2026 | Clics CTA, accès services, usage mobile |
| Navigation | Navigation principale simplifiée : Services, Prévention & conseils, À propos, Contact, Urgence, Rendez-vous | Aligner le header sur l’architecture UX validée et réduire la concurrence entre actions | Demande explicite de Julie le 16/08/2026 | Clics navigation / CTA |
| Accueil | Hero, services, réassurance, prévention, équipements, zone et contact restructurés | Répondre plus vite à qui / quoi / où / comment contacter | Demande explicite de Julie le 16/08/2026 | Clics Services et Rendez-vous |
| Header | Préparation de l’affichage du logo officiel via `/assets/logo.png`, avec fallback texte si l’image n’est pas présente | Utiliser la marque officielle sans redessiner ni recolorer le logo | Logo fourni par Julie le 16/08/2026 | Contrôle visuel desktop/mobile |

### Dépendance restante
Le fichier binaire officiel doit être présent sous `assets/logo.png`. Le connecteur GitHub utilisé par Luna permet d’écrire les fichiers texte mais ne permet pas de transférer directement le PNG local. Aucun logo généré ou redessiné n’est utilisé en remplacement.

### Palette
Le bleu signature validé `#0F2879` est utilisé. Les valeurs exactes ivoire, sauge, bleu marine profond et terracotta restent volontairement non figées tant qu’elles ne sont pas verrouillées dans le Design System technique.
