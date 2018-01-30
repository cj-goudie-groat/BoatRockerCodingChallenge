/**
Object that represents the possible attack and defense multipliers when
comparing 2 pokemon.
**/
function Multiplier() {
  let attackMultiplier = 1;
  let defenseMultiplier = 1;

  //getter for attackMultiplier
  this.getAttackMultiplier = function() {
    return attackMultiplier;
  }
  //reset attack multiplier to 1 after comparing 2 pokemon
  this.resetAttackMultiplier = function() {
    attackMultiplier = 1;
  }

  //getter for defenseMultiplier
  this.getDefenseMultiplier = function() {
    return defenseMultiplier;
  }
  //reset defense multiplier to 1 after comparing 2 pokemon
  this.resetDefenseMultiplier = function() {
    defenseMultiplier = 1;
  }

  //set attackMultiplier to 0
  this.no_damage_to = function() {
    attackMultiplier = 0
  }

  //set attackMultiplier to half of its current value
  this.half_damage_to = function() {
    attackMultiplier *= 0.5
  }

  //set attackMultiplier to double of its current value
  this.double_damage_to = function() {
    attackMultiplier *= 2
  }

  //set defenseMultiplier to 0
  this.no_damage_from = function() {
    defenseMultiplier = 0
  }

  //set defenseMultiplier to half of its current value
  this.half_damage_from = function() {
    defenseMultiplier *= 0.5
  }

  //set defenseMultiplier to double of its current value
  this.double_damage_from = function() {
    defenseMultiplier *= 2
  }

  /**
  Adjusts the attack and defense multipliers of the 2 pokemon. For each relation
  of

  relation : the array of all type interactions for the first pokemon
  relationType : the current interaction type
  pokemonType : the type of the second pokemon
  **/
  this.adjustMulitplier = function(relation, relationType, pokemonType) {
    let i = relation.length;
    if (multiplier.hasOwnProperty(relationType)) {
      while (i--) {
        if (relation[i].name == pokemonType)
          multiplier[relationType]();
      }
    }
  }
}
