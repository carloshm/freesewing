import { version } from '../package.json'

export default {
  name: 'breanna',
  version: version,
  design: 'Joost De Cock',
  code: 'Joost De Cock',
  department: 'womenswear',
  type: 'block',
  difficulty: 3,
  tags: ['top'],
  optionGroups: {
    fit: [
      'shoulderDart',
      'shoulderDartSize',
      'shoulderDartLength',
      'waistDart',
      'waistDartSize',
      'waistDartLength',
      'verticalEase',
      'chestEase',
      'collarEase',
      'bicepsEase',
      'cuffEase',
      'shoulderEase',
      'waistEase'
    ],
    style: [
      'primaryBustDart',
      'primaryBustDartLength',
      'secondaryBustDart',
      'secondaryBustDartLength',
      'primaryBustDartShaping',
      'sleeveLengthBonus'
    ],
    advanced: [
      'acrossBackFactor',
      'armholeDepthFactor',
      'frontArmholeDeeper',
      'shoulderSlopeReduction',
      'sleeveWidthGuarantee',
      {
        sleevecap: [
          'sleevecapEase',
          'sleevecapTopFactorX',
          'sleevecapTopFactorY',
          'sleevecapBackFactorX',
          'sleevecapBackFactorY',
          'sleevecapFrontFactorX',
          'sleevecapFrontFactorY',
          'sleevecapQ1Offset',
          'sleevecapQ2Offset',
          'sleevecapQ3Offset',
          'sleevecapQ4Offset',
          'sleevecapQ1Spread1',
          'sleevecapQ1Spread2',
          'sleevecapQ2Spread1',
          'sleevecapQ2Spread2',
          'sleevecapQ3Spread1',
          'sleevecapQ3Spread2',
          'sleevecapQ4Spread1',
          'sleevecapQ4Spread2'
        ]
      }
    ]
  },
  measurements: [
    'hpsToHipsBack',
    'hpsToHipsFront',
    'hpsToWaistBack',
    'shoulderToShoulder',
    'centerBackNeckToHips',
    'naturalWaist',
    'highBust',
    'highBustFront',
    'hpsToBust',
    'bustFront',
    'bustSpan',
    'shoulderSlope',
    'neckCircumference'
  ],
  dependencies: {
    back: 'base',
    frontBase: 'base',
    front: 'frontBase',
    sleevecap: 'front',
    sleeve: 'sleevecap'
  },
  inject: {
    back: 'base',
    frontBase: 'base',
    front: 'frontBase',
    sleeve: 'sleevecap'
  },
  hide: ['frontBase', 'sleevecap'],
  options: {
    // Constants
    collarFactor: 4.8,
    armholeDepthBase: 0.6,
    breannaFitSleeve: true,
    breannaFitCollar: true,

    // Booleans
    shoulderDart: { bool: false },
    waistDart: { bool: true },

    // Lists
    primaryBustDart: {
      list: [
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '15:00',
        '16:00',
        '17:00'
      ],
      dflt: '06:00'
    },
    secondaryBustDart: {
      list: [
        'none',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '15:00',
        '16:00',
        '17:00'
      ],
      dflt: '13:30'
    },

    // Percentages
    acrossBackFactor: { pct: 96, min: 93, max: 100 },
    armholeDepthFactor: { pct: 100, min: 80, max: 120 },
    shoulderDartSize: { pct: 7, min: 4, max: 10 },
    shoulderDartLength: { pct: 85, min: 60, max: 100 },
    waistDartSize: { pct: 10, min: 4, max: 15 },
    waistDartLength: { pct: 85, min: 60, max: 100 },
    verticalEase: { pct: 2, min: 0, max: 8 },
    frontArmholeDeeper: { pct: 1, min: 0, max: 5 },
    shoulderEase: { pct: 0, min: 0, max: 4 },
    collarEase: { pct: 3.5, min: 0, max: 10 },
    chestEase: { pct: 10, min: 5, max: 20 },
    waistEase: { pct: 10, min: 5, max: 20 },
    primaryBustDartShaping: { pct: 50, min: 25, max: 75 },
    primaryBustDartLength: { pct: 85, min: 65, max: 95 },
    secondaryBustDartLength: { pct: 85, min: 65, max: 95 },
    shoulderSlopeReduction: { pct: 0, min: 0, max: 100 },
    bicepsEase: { pct: 15, min: 0, max: 50 },
    cuffEase: { pct: 20, min: 0, max: 50 },
    sleevecapEase: { pct: 1, min: 0, max: 10 },
    sleevecapTopFactorX: { pct: 50, min: 25, max: 75 },
    sleevecapTopFactorY: { pct: 100, min: 35, max: 165 },
    sleevecapBackFactorX: { pct: 60, min: 35, max: 65 },
    sleevecapBackFactorY: { pct: 33, min: 35, max: 65 },
    sleevecapFrontFactorX: { pct: 55, min: 35, max: 65 },
    sleevecapFrontFactorY: { pct: 33, min: 35, max: 65 },
    sleevecapQ1Offset: { pct: 3, min: 0, max: 7 },
    sleevecapQ2Offset: { pct: 5.5, min: 0, max: 7 },
    sleevecapQ3Offset: { pct: 4.5, min: 0, max: 7 },
    sleevecapQ4Offset: { pct: 1, min: 0, max: 7 },
    sleevecapQ1Spread1: { pct: 6, min: 4, max: 20 },
    sleevecapQ1Spread2: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread1: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread2: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread1: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread2: { pct: 8, min: 4, max: 20 },
    sleevecapQ4Spread1: { pct: 7, min: 4, max: 20 },
    sleevecapQ4Spread2: { pct: 7, min: 4, max: 20 },
    sleeveWidthGuarantee: { pct: 90, min: 25, max: 100 },
    sleeveLengthBonus: { pct: 0, min: -40, max: 10 }
  }
}
