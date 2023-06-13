'use client'

export const processForm = async (e) => { 
  e.preventDefault();

  const df = new FormData(e.target)

  const formInput = {

    gender: String(df.get('gender')),
   annualIncome : Number(df.get('annualIncome')),
   incomeCurrency : Number(df.get('incomeCurrency')),
   incomeDuration : Number(df.get('incomeDuration')),
   investmentvalue : Number(df.get('investmentvalue')),
   incomeType : Number(df.get('incomeType')),
   aversion : Number(df.get('aversion')),
   fomo : Number(df.get('fomo')),
   preserve : Number(df.get('preserve')),
   uncertainty : Number(df.get('uncertainty')),
   orientation : Number(df.get('orientation')),
   operation : Number(df.get('operation')),
   judgement : Number(df.get('judgement')),
   lossReaction : Number(df.get('lossReaction')),
   confidence : Number(df.get('confidence')),

   agerank: Number,

   capacityRank: String,      
   capacityScore: Number,
   willingnessRank: String,
   willingnessScore: Number,
   
   ageWeight : 0.1,
   incomeWeight : 0.5,
   durationWeight: 0.05,
   portfolioWeight: 0.3,
   sourceWeight: 0.05,

   archetype: String,

   getAgeRanking() {
    if (this.age <= 25) {
      this.agerank = 4;
    } else if (this.age <= 35) {
      this.agerank = 3;
    } else if (this.age <= 50) {
      this.agerank = 2;
    } else {
      this.agerank = 1;
    }
  },

  calculateCapacity() {
  this.getAgeRanking();

  if(!formInput.hasOwnProperty('incomeType')) {
  formInput['incomeType'] = 0;
  }

  if(!formInput.hasOwnProperty('investmentvalue')) {
  formInput['investmentvalue'] = 0;
}

  this.capacityScore = 
  (this.agerank * 1.25 * this.ageWeight) + 
  (this.annualIncome * 0.625 * this.incomeCurrency * this.incomeWeight) +
  (this.incomeDuration * 1.67 * this.durationWeight) +
  (this.incomeType * 2.5 * this.sourceWeight) +
  (this.investmentvalue * 1.67 * this.portfolioWeight)

},

  getCapacityRank() {
    this.calculateCapacity()
    
    if (this.capacityScore <= 2.1) {
      this.capacityRank = "low-capacity"
    } else if (this.capacityScore <= 3.5) {
      this.capacityRank = "average-capacity"
    } else if (this.capacityScore <= 5) {
      this.capacityRank = "high-capacity"}
      else {this.capacityRank = ""}
  },

  getWillingnessRank() {

    this.willingnessScore = (
    this.confidence + this.fomo + this.preserve + this.aversion + this.uncertainty +
    (this.orientation * 1.667) + 
    (this.operation * 1.667) +
    (this.judgement * 1.667) +
    (this.lossReaction * 1.667))/9

    if (this.willingnessScore <= 2.3) {
      this.willingnessRank = "low-willingness"
    } else if (this.willingnessScore <= 3.7) {
      this.willingnessRank = "average-willingness"
    } else if (this.willingnessScore <= 5) {
      this.willingnessRank = "high-willingness"}
      else {this.willingnessRank = ""}
  },


  getarchetype() {

    this.getCapacityRank();
    this.getWillingnessRank();

    const combinedRank = `${this.willingnessRank}/${this.capacityRank}`

    switch (combinedRank) {
      case 'low-willingness/low-capacity':
      case 'low-willingness/average-capacity':
      case 'average-willingness/low-capacity':
        this.archetype = 'Builder';
        break;
      case 'low-willingness/high-capacity':
        this.archetype = 'Custodian';
        break;
      case 'average-willingness/average-capacity':
      case 'average-willingness/high-capacity':
        this.archetype = 'Scientist';
        break;
      case 'high-willingness/low-capacity':
      case 'high-willingness/average-capacity':
      case 'high-willingness/high-capacity':
        this.archetype = 'Boss';
        break;
      default:
        this.archetype = '';
    }        
    
  }

  }

  formInput.getarchetype()

  return formInput
}