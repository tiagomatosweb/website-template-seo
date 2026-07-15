import type { AreasArea } from '~/components/ui/Areas.vue'
import easternMap from '~/assets/img/maps/eastern.webp'
import innerWestMap from '~/assets/img/maps/innerwest.webp'
import stGeorgeMap from '~/assets/img/maps/stgeorge.webp'

export const areas1: AreasArea[] = [
  {
    name: 'Eastern Suburbs',
    description: 'We help Eastern Suburbs businesses turn local search into booked jobs — from Bondi and Coogee through to Maroubra — with SEO, Google Ads and landing pages built to convert.',
    map: easternMap,
    suburbs: [
      'Bellevue Hill', 'Bondi', 'Bondi Beach', 'Bondi Junction', 'Bronte',
      'Centennial Park', 'Chifley', 'Clovelly', 'Coogee', 'Darling Point',
      'Double Bay', 'Dover Heights', 'Edgecliff', 'Kensington', 'Kingsford',
      'La Perouse', 'Little Bay', 'Malabar', 'Maroubra', 'Matraville', 'North Bondi',
      'Paddington', 'Phillip Bay', 'Point Piper', 'Port Botany', 'Queens Park',
      'Randwick', 'Rose Bay', 'South Coogee', 'Tamarama', 'Vaucluse',
      'Watsons Bay', 'Waverley', 'Woollahra',
    ],
  },
  {
    name: 'Inner West',
    description: 'From Newtown and Marrickville out to Ashfield and Balmain, we run lead-gen campaigns that put Inner West brands in front of ready-to-buy local customers.',
    map: innerWestMap,
    suburbs: [
      'Annandale', 'Ashfield', 'Balmain', 'Camperdown', 'Dulwich Hill',
      'Enmore', 'Erskineville', 'Leichhardt', 'Lewisham', 'Marrickville',
      'Newtown', 'Petersham', 'Rozelle', 'Stanmore', 'Summer Hill', 'Tempe',
    ],
  },
  {
    name: 'St George',
    description: 'Across the St George area — Hurstville, Kogarah and Rockdale — we build local marketing funnels that generate qualified enquiries and grow your customer base.',
    map: stGeorgeMap,
    suburbs: [
      'Allawah', 'Arncliffe', 'Banksia', 'Banksmeadow', 'Bardwell Park', 'Bardwell Valley',
      'Beverley Park', 'Beverly Hills', 'Bexley', 'Bexley North', 'Blakehurst',
      'Brighton-le-Sands', 'Carlton', 'Carss Park', 'Connells Point', 'Dolls Point', 'Hurstville',
      'Hurstville Grove', 'Kingsgrove', 'Kogarah', 'Kogarah Bay', 'Kyeemagh', 'Kyle Bay',
      'Lugarno', 'Monterey', 'Mortdale', 'Narwee', 'Oatley', 'Peakhurst', 'Peakhurst Heights',
      'Penshurst', 'Ramsgate', 'Ramsgate Beach', 'Riverwood', 'Rockdale', 'Sandringham',
      'Sans Souci', 'South Hurstville', 'Turrella', 'Wolli Creek',
    ],
  },
]
