/**
 * fleetPhotos.ts — vehicle photography (design.md §3.3 photo cards).
 * Innova & Innova Crysta: actual photos of our own fleet (/images/fleet/own).
 * Ertiga & Hycross: Wikimedia Commons (CC BY-SA, CC0 or public domain) —
 * every use of those shows a credit line (author, licence, source).
 * Files live in /public/images/fleet (1280px, resized from the originals).
 *
 * The Innova Hycross photos show the Toyota Zenix, the Indonesian-market name
 * of the same vehicle.
 */

export interface FleetPhoto {
  src: string;
  alt: string;
  /** Short label used as a gallery caption */
  label: string;
  /** Third-party photos only (Wikimedia Commons) */
  author?: string;
  license?: 'CC BY-SA 4.0' | 'CC BY-SA 3.0' | 'CC0' | 'Public domain';
  /** Wikimedia Commons file page */
  sourceUrl?: string;
  /** true = actual photo of our own fleet (no credit line needed) */
  own?: boolean;
  /** CSS object-position for cropping, e.g. 'center 60%' */
  position?: string;
  width: number;
  height: number;
}

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`;

export const fleetPhotos: Record<string, FleetPhoto[]> = {
  // Actual photos of our own fleet (Toyota Innova, KA 02 AC 9968)
  innova: [
    {
      src: '/images/fleet/own/innova-side.jpg',
      alt: 'Our silver Toyota Innova with roof carrier, side view',
      label: 'Exterior · side',
      own: true,
      width: 1600,
      height: 1200,
      position: 'center 60%',
    },
    {
      src: '/images/fleet/own/innova-front.jpg',
      alt: 'Our silver Toyota Innova, front view',
      label: 'Exterior · front',
      own: true,
      width: 960,
      height: 1280,
      position: 'center 65%',
    },
    {
      src: '/images/fleet/own/innova-seats-front.jpg',
      alt: 'Tan leather front seats in our Toyota Innova',
      label: 'Leather seats · front',
      own: true,
      width: 1200,
      height: 1600,
    },
    {
      src: '/images/fleet/own/innova-seats-rear.jpg',
      alt: 'Tan leather second and third row seats in our Toyota Innova',
      label: 'Leather seats · rear rows',
      own: true,
      width: 1600,
      height: 1200,
    },
    {
      src: '/images/fleet/own/innova-rear.jpg',
      alt: 'Our silver Toyota Innova, rear view',
      label: 'Exterior · rear',
      own: true,
      width: 1200,
      height: 1600,
      position: 'center 60%',
    },
  ],
  // Actual photos of our own fleet (Toyota Innova Crysta, KA 03 AJ 8559)
  'innova-crysta': [
    {
      src: '/images/fleet/own/crysta-front.jpg',
      alt: 'Our silver Toyota Innova Crysta, front three-quarter view',
      label: 'Exterior · front',
      own: true,
      width: 960,
      height: 1280,
      position: 'center 62%',
    },
    {
      src: '/images/fleet/own/crysta-captain-seats.jpg',
      alt: 'Second-row captain seats in our Toyota Innova Crysta',
      label: 'Captain seats · 2nd row',
      own: true,
      width: 1599,
      height: 899,
    },
    {
      src: '/images/fleet/own/crysta-cabin.jpg',
      alt: 'Driver cabin and front seats in our Toyota Innova Crysta',
      label: 'Driver cabin',
      own: true,
      width: 1200,
      height: 1600,
    },
    {
      src: '/images/fleet/own/crysta-third-row.jpg',
      alt: 'Third-row seats and floor mats in our Toyota Innova Crysta',
      label: 'Third row',
      own: true,
      width: 1600,
      height: 1200,
    },
  ],
  ertiga: [
    {
      src: '/images/fleet/ertiga-front.jpg',
      alt: 'White Maruti Suzuki Ertiga, front three-quarter view',
      label: 'Exterior · front',
      author: 'Ramakrishna Mission Vidyapith',
      license: 'Public domain',
      sourceUrl: commons('2022 Maruti Suzuki Ertiga LXi.jpg'),
      width: 1280,
      height: 848,
    },
    {
      src: '/images/fleet/ertiga-3.jpg',
      alt: 'White Maruti Suzuki Ertiga, front view',
      label: 'On the road',
      author: 'Akashpbrahmavar',
      license: 'CC0',
      sourceUrl: commons('Maruti Suzuki Ertiga(3).jpg'),
      width: 1280,
      height: 904,
    },
    {
      src: '/images/fleet/ertiga-side.jpg',
      alt: 'Maruti Suzuki Ertiga (previous generation), front three-quarter view',
      label: 'Exterior · side',
      author: 'Akashpbrahmavar',
      license: 'CC0',
      sourceUrl: commons('Maruti Suzuki Ertiga(1).jpg'),
      width: 1280,
      height: 720,
    },
    {
      src: '/images/fleet/ertiga-rear.jpg',
      alt: 'Maruti Suzuki Ertiga (previous generation), rear view',
      label: 'Exterior · rear',
      author: 'Akashpbrahmavar',
      license: 'CC0',
      sourceUrl: commons('Maruti Suzuki Ertiga(2).jpg'),
      width: 1280,
      height: 720,
    },
  ],
  'innova-hycross': [
    {
      src: '/images/fleet/hycross-front.jpg',
      alt: 'White Toyota Innova Hycross (Zenix), front three-quarter view',
      label: 'Exterior · front',
      author: 'Ethan Llamas',
      license: 'CC BY-SA 4.0',
      sourceUrl: commons('Toyota Zenix 2.0 Q HEV Platinum White Pearl Mica - front.jpg'),
      width: 1280,
      height: 823,
    },
    {
      src: '/images/fleet/hycross-interior.jpg',
      alt: 'Toyota Innova Hycross (Zenix) hybrid cabin and dashboard',
      label: 'Cabin & dashboard',
      author: 'Ethan Llamas',
      license: 'CC BY-SA 4.0',
      sourceUrl: commons('Toyota Zenix MAGH10 2.0 Q HEV interior.jpg'),
      width: 1280,
      height: 853,
    },
    {
      src: '/images/fleet/hycross-rear.jpg',
      alt: 'White Toyota Innova Hycross (Zenix), rear three-quarter view',
      label: 'Exterior · rear',
      author: 'Ethan Llamas',
      license: 'CC BY-SA 4.0',
      sourceUrl: commons('Toyota Zenix 2.0 Q HEV Platinum White Pearl Mica - rear.jpg'),
      width: 1280,
      height: 823,
    },
  ],
};

/** Homepage hero backdrop (design.md §3.2.1) — our own Innova. */
export const heroPhoto = fleetPhotos.innova[0];

export const primaryPhoto = (vehicleId: string): FleetPhoto | undefined => fleetPhotos[vehicleId]?.[0];

/** Credit line for third-party photos; empty for our own fleet photos. */
export const photoCredit = (p: FleetPhoto) => (p.own ? '' : `Photo: ${p.author} / Wikimedia Commons, ${p.license}`);
