/**
Object that represents the possible attack and defense multipliers when
comparing 2 pokemon.
**/
function Multiplier() {
  let attackMultiplier = 1;
  let defenseMultiplier = 1;
  this.getAttackMultiplier = function() {
    return attackMultiplier;
  }
  this.resetAttackMultiplier = function() {
    attackMultiplier = 1;
  }
  this.getDefenseMultiplier = function() {
    return defenseMultiplier; }
  this.resetDefenseMultiplier = function() { defenseMultiplier = 1;
  }
  this.no_damage_to = function() {
    attackMultiplier *= 0
  };
  this.half_damage_to = function() {
    attackMultiplier *= 0.5
  };
  this.double_damage_to = function() {
    attackMultiplier *= 2
  };
  this.no_damage_from = function() {
    defenseMultiplier *= 0
  };
  this.half_damage_from = function() {
    defenseMultiplier *= 0.5
  };
  this.double_damage_from = function() {
    defenseMultiplier *= 2
  };
}
